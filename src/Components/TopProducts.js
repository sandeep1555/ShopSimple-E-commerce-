import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAllProducts } from '../Store/productSlice';
import ProductCard from './ProductCard';

const TopProducts = () => {

    const dispatch=useDispatch();
    const allProducts=useSelector(store=>store.products.allProducts);

    const fetchProducts = async() => {
        const data=await fetch("https://fakestoreapi.com/products");
        const json=await data.json();
        dispatch(addAllProducts(json));
        console.log(json);
          
         }
   useEffect(()=>
   {
      fetchProducts();
   },[])
   



  return (
    <div className='flex flex-wrap justify-center my-4'>

     { allProducts && allProducts.map((product)=>(

        <ProductCard  key={product.id} info={product}/>
     ))}

    </div>
  )
}

export default TopProducts
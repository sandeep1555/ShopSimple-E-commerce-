import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryList, getcategoryItems } from '../Store/productSlice';
import { ToggleactionButton } from '../Store/config';

const CategoryButtons = () => {
const activeButton=useSelector(store=>store.config.activeButton)
    const categoryList=useSelector(store=>store.products.categoryList)
const dispatch=useDispatch();
const getCategoryList=async()=>
{
    const data=await fetch("https://fakestoreapi.com/products/categories");
    const json=await data.json();
    console.log(json);
   
    dispatch(addCategoryList(json));
}

const getCategoryitems=async(list)=>
{
    const data=await fetch("https://fakestoreapi.com/products/category/"+list);
    const json=await data.json();
    console.log(json);
    list==="electronics" && dispatch(getcategoryItems(json));
    list==="jewelery" && dispatch(getcategoryItems(json));
    list==="men's clothing" && dispatch(getcategoryItems(json));
    list==="women's clothing" && dispatch(getcategoryItems(json));
    dispatch(ToggleactionButton(list===activeButton? "all" : list))
       
}

    useEffect(()=>
    {
        getCategoryList();
    },[])


    useEffect(()=>
    {
        getCategoryitems();
    },[])
  return (
    <div className='mx-20'>
         <button className='p-2 m-2 my-4 bg-black text-white rounded-lg '>all</button>
        { categoryList && categoryList.map((list)=>
        (
        
           <button onClick={()=>getCategoryitems(list)} className='p-2 m-2 my-4 bg-black text-white rounded-lg '>{list}</button>

        ))

        }
    </div>
  )
}

export default CategoryButtons
import React from 'react'
import TopProducts from './TopProducts'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const CardContainer = () => {
    const activeButton=useSelector(store=>store.config.activeButton)
    const categoryItems=useSelector(store=>store.products.categoryItems);
  return (
    <div>

   {activeButton=== "all"  &&     <TopProducts/>}
   {activeButton==="electronics" && <ProductCard info={categoryItems}/>} 
    </div>
  )
}

export default CardContainer
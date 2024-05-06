import React from 'react'

const ProductCard = ({info}) => {


const {image,price,description,title}=info;
const {rate}=info.rating;


  return (
    <div className="flex flex-col w-[300px] h-[320px] shadow-lg  m-2 my-4 p-2 rounded-lg overflow-hidden cursor-pointer">
        <div className='flex justify-center'>
            <img  className="w-[200px] h-[150px] " src={image}/>
        </div>
        <div className='mt-4 font-bold text-left p-2'>
            <h1 className=''>{title}</h1>
            <span>{rate+"★"}</span>
            <p className=''>{"₹"+(price)*80}</p>
            <button className='mx-16 p-2  bg-black text-white  rounded-lg'>+ADD Cart</button>
        </div>
       
    </div>
  )
}

export default ProductCard
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center shadow-lg'>
      <div>
        <img  className="bg-white w-[100px] h-[100px] " src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-e-commerce-logo-template-png-image_5066821.jpg"/>
      </div>
<div>
    <input className='border border-black rounded-lg p-2 w-72' type='text' placeholder='Search products....'/>
</div>
      <div>
        <ul className='flex mx-2'>
            <li className='mr-6'>Home</li>
            <li className='mr-6'>products</li>
            <li className='mr-6'>Help</li>
            <li className='mr-6'>Sign In</li>
            <li className='mr-6'>Cart</li>
        </ul>
      </div>
        </div>
  )
}

export default Header
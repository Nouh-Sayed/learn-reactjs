import React from 'react'

const Headerchef = () => {
  return (
    <div>
      <nav className='flex items-center justify-center bg-gray-100 p-4 gap-4 shadow-lg '>
         <h1 className='text-5xl font-bold text-black'>The chef
          </h1> 

         <img src='./src/assets/images/logo.png' alt='logo' className='w-16 h-16 ' />
    
 
      </nav>
      <hr className='border-gray-300    '  />
    </div>
  )
}

export default Headerchef

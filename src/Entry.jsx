import React from 'react'

function Entry() {
  return (
    <div>
        <section className='flex justify-between items-center m-10 gap-5 bg-gray-300 rounded-3xl  '>
            <dev className='w-38 h-60 rounded-4xl shrink-0 overflow-hidden' >
                <img className='w-4/4 h-4/4 ' src="src\assets\1.jpg" alt="main image" />
            </dev>
            <dev className=' text-black '>
   <div className='flex items-center gap-2'>
        <img 
            className='w-5 h-5' 
            src="src/assets/marker.png" 
            alt="map marker" 
        />
        <span className='font-bold'>Japan</span>
        <a 
            className='font-light text-sky-500' 
            href="#"
        >
            view in the map
        </a>
    </div>

<h1 className='font-extrabold text-sky-700'>First Robot</h1>
<p className='font-medium '>12 jan 2021 - 24 jan 2030</p>
<p className='font-light  text-sky-500  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum porro libero harum, nostrum blanditiis. Numquam sit minus praesentium aperiam, doloremque, voluptate, beatae aliquid voluptates iure placeat.</p>
            </dev>
        </section>


    </div>
  )
}

export default Entry
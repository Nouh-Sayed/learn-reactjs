import React from 'react'

function Entry(props) {
   
  return (
    <div>
        <section className='flex justify-between items-center m-10 gap-5 bg-gray-300 rounded-3xl  '>
            <div className='w-38 h-60 rounded-4xl shrink-0 overflow-hidden' >
                <img className='w-4/4 h-4/4 ' src={props.img.src} alt={props.                       img.alt} />
            </div>
            <div className=' text-black '>
   <div className='flex items-center gap-2'>
        <img 
            className='w-5 h-5' 
            src="src/assets/marker.png" 
            alt="map marker" 
        />
        <span className='font-bold'>{props.country}</span>
        <a 
            className='font-light text-sky-500' 
            href={  props.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            view in the map
        </a>
    </div>

<h1 className='font-extrabold text-sky-700'>{props.title}</h1>
<p className='font-medium '>{props.dates}</p>
<p className='font-light  text-sky-500  '>{props.text}  </p>
            </div>
        </section>


    </div>
  )
}

export default Entry
import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='bg-background-color pb-12'>
    <div className="services">
          <div className="container mx-auto">
            <p className="text-5xl text-white pt-12 font-bold text-center">Gallery</p>
          </div>
        </div>
        {/* <div className="container mx-auto">
        <div className='grid grid-cols-3 gap-4 mt-12'>
            <div className='hover:bg-green '>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>
            <div className=''>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>
            <div className=''>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>
           
        </div>
        <div className='grid grid-cols-4 gap-4 mt-8'>
        <div className=''>
                <img className='rounded-lg ' src='/image/img1.jpg'/>
            </div>
            <div className=''>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>
            <div className=''>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>
            <div className=''>
                <img className='rounded-lg' src='/image/img1.jpg'/>
            </div>

        </div>
        </div> */}
<div className='grid grid-cols-4 gap-4 mt-12 overflow-x-hidden overflow-y-hidden'>
<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>
<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>
<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>
<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>

<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>

<div class="relative group">
    <img src='/image/img1.jpg' alt="Avatar" className="w-full h-auto ease-in-out opacity-100 group-hover:opacity-30  transition duration-300 transform hover:scale-105"/>
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div>
            milk 
        </div>
    </div>
</div>
</div>


        
    </div>
    </>
  )
}

export default Gallery
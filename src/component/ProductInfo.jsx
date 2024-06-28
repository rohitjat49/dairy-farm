import React from 'react'

const ProductInfo = () => {
  return (
    <div className='bg-background-color py-12 '>
        <div className="container mx-auto">
    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
        <div className='bg-white rounded-3xl text-center flex flex-col items-center py-4 px-4 transition duration-300 transform'>
            <img className='text-center rounded-3xl transition-transform duration-300 transform hover:scale-105' src='/image/image-1.jpg'/>
            <p className='text-orange text-3xl font-semibold mt-2'>Milking</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem dolore nesciunt fuga illum distinctio, amet deserunt inventore totam repellendus?</p>
        </div>

        <div className='bg-white rounded-3xl text-center flex flex-col items-center py-4  px-4 transition duration-300 transform'>
            <img className='text-center rounded-3xl transition-transform duration-300 transform hover:scale-105' src='/image/image-2.jpg'/>
            <p className='text-orange text-3xl font-semibold mt-2'>Feeding</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem dolore nesciunt fuga illum distinctio, amet deserunt inventore totam repellendus?</p>
        </div>

        <div className='bg-white rounded-3xl text-center flex flex-col items-center py-4 transition duration-300 transform px-4'>
            <img className='text-center rounded-3xl transition-transform duration-300 transform hover:scale-105' src='/image/image-3.jpg'/>
            <p className='text-orange text-3xl font-semibold mt-2'>Our Products</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem dolore nesciunt fuga illum distinctio, amet deserunt inventore totam repellendus?</p>
        </div>
    </div>
    </div>
</div>


  )
}

export default ProductInfo
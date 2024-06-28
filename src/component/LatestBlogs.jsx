import React from 'react'

const LatestBlogs = () => {
  return (
    <>
    <div className='latest-Blog relative mt-48 pt-48'>
        
        <div className='absolute  latest-mt right-0'>
            <img src='/image/sketch-3.jpg'/>
            
            </div> 
            
            

        </div>
        <div className='grid grid-cols-3 gap-4 '>
        <div className='bg-black'>
        <img src='/image/news-1.jpg'/>
        </div>

        <div className='bg-black'>
        <img src='/image/news-2.jpg'/>
        </div>

        <div className='bg-black'>
        <img src='/image/news-3.jpg'/>
        </div>
    </div>
    </>
        
  )
}

export default LatestBlogs
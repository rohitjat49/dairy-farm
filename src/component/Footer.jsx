import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className='bg-footer-background '>
    <div className="container mx-auto">
    <div className='grid md:grid-cols-3 sm:grid-cols-1 py-12 '>
        <div>
          <p className='text-3xl font-bold'>logo</p>  
        </div>
        <div>
          <p className='text-3xl font-bold '>About</p> 
          <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div className=' uppercase cursor-pointer '>
                <p className='hover:text-orange'>Home Page</p>
                 <p className='hover:text-orange'>About Page</p>
                 <p className='hover:text-orange'>Organic Milk</p>
                </div> 
                <div className=' uppercase cursor-pointer '>
                <p className='hover:text-orange'> Contact Us</p>
                 <p className='hover:text-orange'>About Page</p>
                 <p className='hover:text-orange'>Latest Blogs</p>
                </div> 
        </div>
        </div>
      <div>
          <p className='text-3xl font-bold'>Need Help??</p>  
        </div>
    </div>
    
   
    </div>
    <hr className='mt-24'/>
    <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-between">
    <p>&copy; Copyright</p>
    <p className='uppercase hover:text-green md:font-bold'>
        <a href='https://rishusinfotech.in/'> Created by  Rishus Infotech</a>
    </p>
</div>
 {/* <div className="container mx-auto mt-8 flex  justify-between">
    <p>&copy; Copyright</p>
    <p className='uppercase hover:text-green'>
        <a href='https://rishusinfotech.in/'> Created by  Rishus Infotech</a>
    </p>
</div> */}


    
    <div className='footer-img'>
    

    </div>
    

   </footer>
   </>
  )
}

export default Footer
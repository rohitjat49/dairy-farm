import React from 'react'

const OurFarm = () => {
  return (
    <>
  <div className='hero mt-5'>
  <div className="text-center pt-3">
    <h2 className='md:text-4xl sm:text-2xl font-bold hero-pattern'>
      Welcome To Our Farm!
    </h2>
    <div className="flex items-center justify-center mt-4  ">
      <div className="text-center border-t-2 border-black w-20"></div>
      <div className="mx-2">
        <img src="/image/cow-silhouette.png" alt="Cow" className='w-12 '/>
      </div>
      <div className=" border-t-2 border-black  w-20"></div>
    </div>
    <div className="mt-4 ">
      <span className=''>
        Here you will find a wide range of healthy and fresh dairy products that were proudly produced at

        our farm by our farmers and cows. Welcome to Jacksons!
      </span>
    </div>
  </div>
</div>



    </>
  )
}

export default OurFarm
import React from 'react'

const FreshMilkComponent = () => {
  return (
    <>
    <div className="relative team-bg h-auto">
        <img src='/image/bg_fresh.jpg' alt='' className='w-full min-h-screen ' />
        <div className="absolute top-16 left-0 w-full">
          {/* <div className='flex flex-col items-center text-center justify-center'>
            <p className='text-white text-4xl font-bold md:text-5xl'>Meet Our Farmers</p>
          </div>
          <div className="flex items-center justify-center mt-2 mb-4">
            <div className="border-t-2 border-orange w-20"></div>
            <div className="mx-2">
              <img src="/image/cow-silhouette.png" alt="Cow" className='w-12' />
            </div>
            <div className="border-t-2 border-orange w-20"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pb-24 md:grid-cols-5 grid-cols-3 gap-4 px-3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-24 text-center opacity-75">
              <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
              <p className="text-gray-700">Role</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-24 text-center opacity-75">
              <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
              <p className="text-gray-700">Role</p>
            </div>
          </div> */}
          <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
            <div className='text-fresh container mx-auto text-white lg:pl-40 sm:pl-20'>
                <p className='text-orange font-bold text-5xl '> What's Fresh </p>
                <div className="flex items-center text-center  mt-4 mb-4">
      <div className="text-center border-t-2 border-orange w-20"></div>
      <div className="mx-2">
        <img src="/image/cow-silhouette.png" alt="Cow" className='w-12'/>
      </div>
      <div className="border-t-2 border-orange w-20"></div>
   
    </div>
    <p className='text-2xl font-bold' >From Our Family to Yours</p>
    <p>Although any mammal can produce milk, commercial dairy farms are typically one-species enterprises. In developed countries, dairy farms typically consist of high producing dairy cows. </p>
            </div>
            <div className=' pb-40 mb-40'>
            <div className='milk-img-container text-center'>
            <img className='milk-imgs mb-40' src='/image/girl.png' alt='cow' width=""  />
        </div>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FreshMilkComponent
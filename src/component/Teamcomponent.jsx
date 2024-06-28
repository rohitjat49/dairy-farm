import React from 'react'

const Teamcomponent = () => {
  return (
   <>
      {/* <div className="relative team-bg h-auto">
          <img src='/image/big_bg.jpg' alt='' className='w-full min-h-screen ' />
          <div className="absolute top-16 left-0 w-full">
              <div className='flex flex-col items-center text-center justify-center'>
                  <p className='text-white text-4xl font-bold md:text-5xl'>Meet Our Farmers</p>
              </div>
              <div className="flex items-center justify-center mt-2 mb-4">
                  <div className="border-t-2 border-orange w-20"></div>
                  <div className="mx-2">
                      <img src="/image/cow-silhouette.png" alt="Cow" className='w-12' />
                  </div>
                  <div className="border-t-2 border-orange w-20"></div>
              </div>
              <div className="grid md:grid-cols-5 grid-cols-3  gap-4 px-3">
                  <div className='text-center'>
                      <img className='rounded-full w-full max-w-xs mx-auto' src='/image/team-2.jpg' alt='team member' />
                      <p className='text-orange text-xl mt-2 md:text-3xl'>Name</p>
                  </div>
                  <div className='text-center'>
                      <img className='rounded-full w-full max-w-xs mx-auto'src='/image/team-2.jpg' alt='team member' />
                      <p className='text-orange text-xl mt-2 md:text-3xl'>Name</p>
                  </div>
                  <div className='text-center'>
                      <img className='rounded-full w-full max-w-xs mx-auto' src='/image/team-2.jpg' alt='team member' />
                      <p className='text-orange text-xl mt-2 md:text-3xl'>Name</p>
                  </div>
                  <div className='text-center'>
                      <img className='rounded-full w-full max-w-xs mx-auto' src='/image/team-2.jpg' alt='team member' />
                      <p className='text-orange text-xl mt-2 md:text-3xl'>Name</p>
                  </div>
                  <div className='text-center'>
                      <img className='rounded-full w-full max-w-xs mx-auto' src='/image/team-2.jpg' alt='team member' />
                      <p className='text-orange text-xl mt-2 md:text-3xl'>Name</p>
                  </div>
              </div>
          </div>
      </div> */}
      {/* <div className="relative team-bg h-auto">
          <img src='/image/big_bg.jpg' alt='' className='w-full min-h-screen ' />
          <div className="absolute top-16 left-0 w-full">
              <div className='flex flex-col items-center text-center justify-center'>
                  <p className='text-white text-4xl font-bold md:text-5xl'>Meet Our Farmers</p>
              </div>
              <div className="flex items-center justify-center mt-2 mb-4">
                  <div className="border-t-2 border-orange w-20"></div>
                  <div className="mx-2">
                      <img src="/image/cow-silhouette.png" alt="Cow" className='w-12' />
                  </div>
                  <div className="border-t-2 border-orange w-20"></div>
              </div>
 
      

        <div class="grid  sm:grid-cols-2 lg:grid-cols-4  pb-24 md:grid-cols-5 grid-cols-3  gap-4 px-3">
          
            <div class="bg-white rounded-lg shadow-md p-6 mb-24 text-center opacity-75">
                <img src="/image/team-2.jpg" alt="Team Member 1" class="w-full rounded-full mb-4"/>
                <h3 class="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
                <p class="text-gray-700">Role</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 mb-24 text-center opacity-75">
                <img src="/image/team-2.jpg" alt="Team Member 1" class="w-full rounded-full mb-4"/>
                <h3 class="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
                <p class="text-gray-700">Role</p>
            </div>
            

      
        </div>
    </div>
    </div> */}

<div className="relative h-auto mt-20 bg-cover bg-center" style={{ backgroundImage: "url('/image/big_bg.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: To add a dark overlay */}
  <div className="relative z-10 w-full py-16">
    <div className='flex flex-col items-center text-center justify-center'>
      <p className='text-white text-4xl font-bold md:text-5xl'>Meet Our Farmers</p>
    </div>
    <div className="flex items-center justify-center mt-2 mb-4">
      <div className="border-t-2 border-orange w-20"></div>
      <div className="mx-2">
        <img src="/image/cow-silhouette.png" alt="Cow" className='w-12' />
      </div>
      <div className="border-t-2 border-orange w-20"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 pb-24">
      <div className="bg-white rounded-lg shadow-md p-6 text-center opacity-75">
        <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
        <p className="text-gray-700">Role</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center opacity-75">
        <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
        <p className="text-gray-700">Role</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center opacity-75">
        <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
        <p className="text-gray-700">Role</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center opacity-75">
        <img src="/image/team-2.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-orange">Farmer Name</h3>
        <p className="text-gray-700">Role</p>
      </div>
      
      {/* Add more farmer cards as needed */}
    </div>
  </div>
</div>


   </>
  )
}

export default Teamcomponent;

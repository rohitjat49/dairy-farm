// import React from 'react'

// const Products = () => {
//   return (
//    <>
//    <div className=' container mx-auto'>
//     <p className='text-5xl font-bold text-center mt-4'>Products </p>
//     <div className="flex items-center text-center justify-center mt-4  mb-4">
//       <div className="text-center border-t-2 border-black w-20"></div>
//       <div className="mx-2">
//         <img src="/image/cow-silhouette.png" alt="Cow" className='w-12 '/>
//       </div>
//       <div className=" border-t-2 border-black  w-20"></div>
//     </div>
//     <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4  cursor-pointer">
//         <div className='milk-img mt-5 '>
//             <img  className=' milk-img scale-75 hover:rotate-90 ' src='/image/ghee.jpg' alt='cow' />
//         </div>
//         <div>
//             <img src='/image/ghee.jpg' alt='cow' className='milk-img' width="100%" />
//         </div>
//         <div>
//             <img src='/image/ghee.jpg' alt='cow'  className='milk-img'/>
//         </div>
//         <div>
//             <img src='/image/ghee.jpg' alt='cow'  className='milk-img'/>
//         </div>
//     </div>
//    </div>
//    </>
//   )
// }

// export default Products

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/Order-now`);
  };
  return (
   <>
   <div className="bg-background-color">
   <div className='container mx-auto '>
    <p className='text-5xl font-bold text-center pt-8'>Products</p>
    <div className="flex items-center text-center justify-center mt-4 mb-4">
      <div className="text-center border-t-2 border-orange w-20"></div>
      <div className="mx-2">
        <img src="/image/cow-silhouette.png" alt="Cow" className='w-12'/>
      </div>
      <div className="border-t-2 border-orange w-20"></div>
    </div>
    <div className="grid md:grid-cols-3 xs:grid-cols-2  gap-4 cursor-pointer px-3">
        <div className='milk-img-container text-center '>
            <img className='milk-img' src='/image/ghee.jpg' alt='cow' />
            <p className='mt-2 font-bold text-2xl'>Ghee</p>
        </div>
        <div className='milk-img-container  text-center'>
            <img className='milk-img' src='/image/05.jpg' alt='cow'   />
            <p className='mt-2 font-bold text-2xl'>Milk</p>
        </div>
        <div className='milk-img-container text-center'>
            <img className='milk-img' src='/image/02.jpg' alt='cow'  />
            <p className='mt-2 font-bold text-2xl'>panner</p>
        </div>
        <div className='milk-img-container text-center'>
            <img className='milk-img' src='/image/ghee.jpg' alt='cow'  />
            <p className='mt-2 font-bold text-2xl'>Crud</p>
        </div>
        <div className='milk-img-container text-center'>
            <img className='milk-img' src='/image/05.jpg' alt='cow'   />
            <p className='mt-2 font-bold text-2xl'>text</p>
        </div>
    </div>
    <div className='text-center mt-8'>
    <button className="bg-orange hover:bg-white p-4  rounded-full px-8 font-bold text-xl"
                 onClick={() => handleButtonClick()}
    >
                  Order Now
                </button>
    </div>
   </div>
   </div>
   </>
  );
}

export default Products;

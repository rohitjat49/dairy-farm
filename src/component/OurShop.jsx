import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OurShop = () => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/Order-now");
  };

  return (
    <div className="bg-background-color">
      <div className='container mx-auto py-12'>
        <div className='flex flex-col items-center text-center justify-center'>
          <p className='text-black text-4xl font-bold md:text-5xl'>Our Shop</p>
        </div>
        <div className="flex items-center justify-center mt-2 mb-4">
          <div className="border-t-2 border-orange w-20"></div>
          <div className="mx-2">
            <img src="/image/cow-silhouette.png" alt="Cow" className='w-12' />
          </div>
          <div className="border-t-2 border-orange w-20"></div>
        </div>
        <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-4 '>
          <Link to="/Product/Milk">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src='/image/AllProductImage.png' className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
          <Link to="/Product/Ghee">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src='/image/cowGhee.png' className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
          <Link to="/Product/Curd">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src="/image/yogurt.png" className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
          <Link to="/Product/Paneer">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src="/image/Panner.png" className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
          <Link to="/Product/Ghee">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src="/image/yogurt.png" className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
          <Link to="/Product/Paneer">
            <div className="bg-background-color p-4 rounded-md shadow-2xl overflow-hidden cursor-pointer h-full" onClick={handleClickCard}>
              <img src="/image/sdfsdfsdfsdfsdfdsf-removebg-preview.png" className='w-full hover:scale-125' alt='all-image' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurShop;

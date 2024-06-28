
// import React from 'react';

// const OrderNowComponent = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form className="bg-white p-8 rounded shadow-md w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-6">Order Now</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
//             Phone Number
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="number"
//             type="tel"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//             Address
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="address"
//             type="text"
//             placeholder="Enter your address"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
//             Additional Information
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="notes"
//             placeholder="Enter additional information"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
//             Select Product
//           </label>
//           <select
//             className="shadow select-bg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="product"
//           >
            
//             <option value="milk">Milk</option>
//             <option value="mawa">Mawa</option>
//             <option value="paneer">Paneer</option>
//             <option value="ghee">Ghee</option>
//           </select>
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 bg-orange w-full mt-4 rounded-full px-4  focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Submit Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrderNowComponent;

// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const OrderNowComponent = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen flex items-center justify-center bg-background-color py-8 mt-32">
        
//       <form className="bg-white p-8 rounded-lg  w-full max-w-lg shadow-2xl shadow-black">
        
//         <h2 className="text-2xl font-bold pb-12">Order Now</h2> 
       
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-orange"
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//           />
//         </div>
        
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
//             Phone Number
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//             id="number"
//             type="tel"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//             Address
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//             id="address"
//             type="text"
//             placeholder="Enter your address"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
//             Select Product
//           </label>
//           <select
//             className="shadow select-bg appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange "
//             id="product"
//           >
//             <option value="" disabled selected className='bg-option bg-orange '>select product</option>
//             <option value="milk" className='bg-option bg-orange  py-2'>Milk</option>
//             <option value="mawa" className='bg-option bg-orange '>Mawa</option>
//             <option value="paneer" className='bg-option bg-orange '>Paneer</option>
//             <option value="ghee" className='bg-option bg-orange '>Ghee</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
//             Additional Information
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full min-h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//             id="notes"
//             placeholder="Enter additional information"
//           />
//         </div>
        
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 bg-gray-dark hover:bg-orange w-full mt-4 rounded-full px-4  focus:outline-none focus:shadow-outline focus:border-orange"
//             type="button"
//           >
//             Submit Order
//           </button>
//         </div>
        
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default OrderNowComponent;

// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const OrderNowComponent = () => {
//   return (
//     <>
//       <Navbar/>
//       <div 
//         className="min-h-screen flex items-center justify-center bg-cover bg-center py-8 mt-32" 
//         style={{ backgroundImage: 'url(/image/cow-2.jpg)' }} // Replace with your image path
//       >
//         <form className="bg-white p-8 rounded-lg  w-full max-w-lg md:max-w-lg  shadow-2xl shadow-black opacity-75">
//           <h2 className="text-2xl font-bold pb-12">Order Now</h2> 
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-orange"
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
//               Phone Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//               id="number"
//               type="tel"
//               placeholder="Enter your phone number"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//               Address
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//               id="address"
//               type="text"
//               placeholder="Enter your address"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
//               Select Product
//             </label>
//             <select
//               className="shadow select-bg appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//               id="product"
//             >
//               <option value="" disabled selected className='bg-option bg-orange'>Select product</option>
//               <option value="milk" className='bg-option bg-orange py-2'>Milk</option>
//               <option value="mawa" className='bg-option bg-orange'>Mawa</option>
//               <option value="paneer" className='bg-option bg-orange'>Paneer</option>
//               <option value="ghee" className='bg-option bg-orange'>Ghee</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
//               Additional Information
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full min-h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
//               id="notes"
//               placeholder="Enter additional information"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 bg-gray-dark hover:bg-orange w-full mt-4 rounded-full px-4 focus:outline-none focus:shadow-outline focus:border-orange"
//               type="button"
//             >
//               Submit Order
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default OrderNowComponent;
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const OrderNowComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    product: '',
    notes: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dairyfarm.onrender.com/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          address: formData.address,
          product: formData.product,
          information: formData.notes
        })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Order placed successfully!');
        console.log('Order placed successfully!');
        setFormData({
          name: '',
          number: '',
          address: '',
          product: '',
          notes: ''
        });
      } else {
        setMessage(data.message || 'Failed to place order');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center py-8 mt-32 bg-background-color" 
        style={{ backgroundImage: 'url(/image/cow-2.jpg)' }} // Replace with your image path
      >
        <form className="bg-white p-8 rounded-lg w-full max-w-lg md:max-w-lg shadow-2xl shadow-black opacity-75" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold pb-12">Order Now</h2> 
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
              id="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
              id="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
              Select Product
            </label>
            <select
              className="shadow select-bg appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
              id="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select product</option>
              <option value="milk">Milk</option>
              <option value="mawa">Mawa</option>
              <option value="paneer">Paneer</option>
              <option value="ghee">Ghee</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
              Additional Information
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full min-h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
              id="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter additional information"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 bg-gray-dark hover:bg-orange w-full mt-4 rounded-full px-4 focus:outline-none focus:shadow-outline focus:border-orange"
              type="submit"
            >
              Submit Order
            </button>
          </div>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
      </div>
    </>
  );
}

export default OrderNowComponent;





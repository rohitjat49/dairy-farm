
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

import React from 'react';

const OrderNowComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-color py-8">
        
      <form className="bg-white p-8 rounded-lg  w-full max-w-lg shadow-2xl shadow-black">
        
        <h2 className="text-2xl font-bold pb-12">Order Now</h2> 
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-orange"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
            id="number"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
            id="address"
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
            Select Product
          </label>
          <select
            className="shadow select-bg appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange "
            id="product"
          >
            <option value="" disabled selected className='bg-option bg-orange '>select product</option>
            <option value="milk" className='bg-option bg-orange  py-2'>Milk</option>
            <option value="mawa" className='bg-option bg-orange '>Mawa</option>
            <option value="paneer" className='bg-option bg-orange '>Paneer</option>
            <option value="ghee" className='bg-option bg-orange '>Ghee</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
            Additional Information
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full min-h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange"
            id="notes"
            placeholder="Enter additional information"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 bg-orange w-full mt-4 rounded-full px-4  focus:outline-none focus:shadow-outline focus:border-orange"
            type="button"
          >
            Submit Order
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default OrderNowComponent;


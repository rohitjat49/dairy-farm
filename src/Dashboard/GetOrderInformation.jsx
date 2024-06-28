// import React, { useEffect, useState } from 'react';

// const GetOrderInformation = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         const response = await fetch('https://dairyfarm.onrender.com/getorder', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }

//         const data = await response.json();
//         console.log('Data received:', data); // Log the data received from the API

//         // Ensure data.order is an array and not empty
//         if (!Array.isArray(data.order) || data.order.length === 0) {
//           throw new Error('No orders found or invalid data format');
//         }

//         setOrders(data.order); // Set orders from data.order
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         setError('Error fetching orders. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (orders.length === 0) {
//     return <div>No orders available.</div>;
//   }

//   return (
//     <div className='container mx-auto'>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered mt-3">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Number</th>
//               <th>Product</th>
//               <th>Information</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.name}</td>
//                 <td>{order.number}</td>
//                 <td>{order.product}</td>
//                 <td>{order.information}</td>
//                 <td>{order.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GetOrderInformation;

import React, { useEffect, useState } from 'react';

const GetOrderInformation = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('https://dairyfarm.onrender.com/getorder', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        console.log('Data received:', data);

        if (!Array.isArray(data.order) || data.order.length === 0) {
          throw new Error('No orders found or invalid data format');
        }

        setOrders(data.order);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders. Please try again later.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders available.</div>;
  }

  return (
    <div className='container mx-auto'>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Number</th>
              <th>Product</th>
              <th>Information</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td> {/* Displaying sequential number */}
                <td>{order.name}</td>
                <td>{order.number}</td>
                <td>{order.product}</td>
                <td>{order.information}</td>
                <td>{order.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetOrderInformation;


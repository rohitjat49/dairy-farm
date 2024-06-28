import React, { useEffect, useState } from 'react';

const GetContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://dairyfarm.onrender.com/get', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch data');
        }

        const data = await response.json();
        console.log('Fetched data:', data);  // Log the fetched data for inspection
        setContacts(data.order);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message || 'Failed to fetch data');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="5" className="text-center text-red-500">{error}</td>
                </tr>
              ) : contacts.length > 0 ? (
                contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No contacts found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GetContact;

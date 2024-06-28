import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    console.log(`Updated ${id}: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await fetch('https://dairyfarm.onrender.com/getintouch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Response:', await response.json());
        setFormStatus('Message sent successfully!');
        // Reset the form data
        setFormData({
          name: '',
          number: '',
          email: '',
          message: ''
        });
      } else {
        setFormStatus('Failed to send message. Please try again.');
        console.error('Failed Response:', response);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
    
    {/* <div className="bg-contact h-screen  ">
      <div className='flex items-center justify-center'>
      <div className='grid md:grid-cols-2 xm:grid-cols-2 gap-4 pt-12 '>
      <div className="col-md-6 wow fadeIn mt-12" data-wow-delay="0.1s">
            <iframe
        
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14734.458618686005!2d76.8988036316003!3d22.593511332665887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d16d049a07e11%3A0xfafab0e267077f72!2sKhategaon%2C%20Madhya%20Pradesh%20455336!5e0!3m2!1sen!2sin!4v1718940905612!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ order: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        
      <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold  text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Mobile</label>
            <input 
              type="number" 
              id="number" 
              name="number" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </div>
        </form>
        {formStatus && <p className="mt-4 text-center text-sm text-gray-700">{formStatus}</p>}
      </div>
      </div>
      </div>
    </div> */}
<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 py-36 bg-background-color">
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14734.458618686005!2d76.8988036316003!3d22.593511332665887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d16d049a07e11%3A0xfafab0e267077f72!2sKhategaon%2C%20Madhya%20Pradesh%20455336!5e0!3m2!1sen!2sin!4v1718940905612!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ order: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-center">Contact Us</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          Mobile
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
    {formStatus && <p className="mt-4 text-center text-sm text-gray-700">{formStatus}</p>}
  </div>
</div>


    </>
  );
};

export default ContactPage;



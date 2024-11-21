// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  let [ messageTemp , setMessageTemp] = useState(false)
  const [formData, setFormData] = useState({
    senderName: '' ,
    senderEmail: '' ,
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://vistara-api-mm82.vercel.app/email' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderName: formData.senderName ,
          senderEmail: formData.senderEmail ,
          message: formData.message
        }), 
      });

      const result = await response.text()
      alert(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full mt-10 mb-12 max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="senderName"
              id="name"
              value={formData.senderName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 resize-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="senderEmail"
              id="email"
              value={formData.senderEmail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <abbr title="Double to get the full view of message">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className= {`mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 resize-none ${messageTemp ? 'w-8/12 h-3/5 absolute top-10 left-10 font-normal' : ''}`}
                onDoubleClick={() => setMessageTemp(messageTemp ? false : true)}
                required
              />
            </abbr>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            onClick={() => alert('WE WILL GET BACK TO YOU SOON')}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


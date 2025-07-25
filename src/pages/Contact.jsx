import React, { useState } from 'react';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const [successMsg, setSuccessMsg] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Form Submitted:", formData);

    
    setSuccessMsg('✅ Message Sent Successfully!');

    
    setFormData({ name: '', email: '', message: '' });

    
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="bg-white px-4 py-12 md:px-16 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>

            {/* Success message */}
            {successMsg && (
              <p className="text-green-600 font-semibold">{successMsg}</p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 bg-red-50 p-6 rounded-xl shadow-md space-y-4">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-sm text-gray-700">We’d love to hear from you! Reach us via the following methods:</p>

          <div>
            <p className="font-medium">📞 Phone:</p>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div>
            <p className="font-medium">✉️ Email:</p>
            <p className="text-gray-700">support@eshop.com</p>
          </div>

          <div>
            <p className="font-medium">📍 Address:</p>
            <p className="text-gray-700">123, Main Road, Indore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

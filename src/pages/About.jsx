// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-white px-4 py-12 md:px-16 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          <strong>Samad | e-SHOP</strong> is your trusted online shopping destination offering a wide range of quality products at the best prices. From fashion to electronics, we've got everything to satisfy your lifestyle needs.
        </p>

        <p>
          Our mission is to deliver exceptional value and service by connecting customers to millions of products with fast, secure, and seamless shopping experiences.
        </p>

        <p>
          We are passionate about technology and customer satisfaction. Our team works tirelessly to keep the platform updated, secure, and user-friendly.
        </p>

        <p>
          Thank you for being part of the e-SHOP family. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;

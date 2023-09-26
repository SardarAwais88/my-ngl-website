import React from 'react';

const ContactForm = () => {
  return (
    <div className="container bg-gray-dark max-w-full max-h-full mt-8 flex justify-center">
      <div className="max-w-2xl bg-white p-8 border border-gray-300 rounded-lg shadow-lg w-full" style={{ backgroundColor: '#A822D4' }}>
        <h2 className="text-3xl font-bold mb-6 text-center font-nexaheavy">Contact Us</h2>
        <form id="contact">
          <div  className="mb-4">
            <label htmlFor="name" className="block font-nexaextra text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-nexaextra text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-nexaextra text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary h-32"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className=" font-nexaheavy min-w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

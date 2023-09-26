// components/PWASection.js
import React from 'react';

const PWASection = () => {
  return (
    <div className=" bg-red-500 p-8">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-3/5">
          <img
            src="https://bewai.com/wp-content/uploads/2022/11/bewai-multidevices-2.png"
            alt="bewai-multidevices-2"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/5 text-flwhite ">
          <h3 className="text-2xl font-nexaheavy text-center">Progressive Web App</h3>
          <h2 className="text-xl mt-4 font-nexaheavy text-[40px] text-center hover: tracking-tight ">PC, Tablet,  <br></br> Mobile</h2>
          <ul className="mt-4 font-nexaextra text-center text-flwhite">
            <li className="">
              <strong>Multi-device</strong>.
            </li>
            <li className="">
              Use via <strong>web browser</strong> or <strong>full-screen in app mode</strong>.
            </li>
            <li className="">
              <strong>Web push notifications</strong>.
            </li>
            <li className="">
              <strong>Automatic updates</strong>.
            </li>
          </ul>
          <a
            href="#"
            className="mt-4 inline-block text-center  text-flwhite bg-blue-700 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            See the demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PWASection;

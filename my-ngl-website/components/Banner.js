import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-white text-black">
      <img src="/images/Banner1.jpg" className="w-full object-cover" alt="Banner Image" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center">
        <div className="container mx-auto p-6 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight font-Nexa-Heavy text-customOrange">
            Welcome to NGL
          </h1>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-customA">
              <h2 className="text-2xl font-bold mb-2 font-Nexa-Heavy text-customN">
                About Neo Great Line
              </h2>
              <p className="text-lg mb-8">
                Neo Great Line is a company that is working on developing a new type of transportation system that is based on hyperloop technology. Hyperloop is a proposed mode of passenger and freight transportation that uses a vacuum tube or system of tubes with reduced air pressure through which a pod can travel suspended on a thin cushion of air.
              </p>
            </div>
            <div className="text-customA">
              <h2 className="text-2xl font-bold mb-2 font-Nexa-Heavy text-customN">
                Neo Great Line's Purpose
              </h2>
              <p className="text-lg mb-8">
                Neo Great Line's purpose is to make hyperloop technology a commercial reality. The company is currently developing a hyperloop system in China, and it has plans to build additional systems in other countries around the world.
              </p>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-customA">
              <h2 className="text-2xl font-bold mb-2 font-Nexa-Heavy text-customN">
                Potential Benefits
              </h2>
              <p className="text-lg mb-8">
                Faster travel times: Hyperloop systems can transport passengers and freight at speeds of up to 700 miles per hour. This is much faster than traditional transportation systems, such as airplanes and trains.
                <br />
                Lower costs: Hyperloop systems are much cheaper to build and operate than traditional transportation systems. This means that hyperloop transportation could be more affordable for everyone.
              </p>
            </div>
            <div className="text-customA">
              <h2 className="text-2xl font-bold mb-2 font-Nexa-Heavy text-customN">
                Neo Great Line's Goal
              </h2>
              <p className="text-lg">
                Neo Great Line's goal is to make hyperloop transportation accessible to everyone. The company believes that hyperloop technology can help to create a more connected and sustainable world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

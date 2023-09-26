import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-orange">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold font-nexaheavy mb-4 text-center">Welcome to Neo Great Line</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Section 1 */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold underline font-nexaheavy mb-2 ">About Us</h2>
          <p className="text-gray-600 font-nexaextra">
            Neo Great Line is a forward-thinking company dedicated to revolutionizing transportation through innovative hyperloop technology.
          </p>
        </div>

        {/* Section 2 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Our Mission</h2>
          <p className="text-gray-600 font-nexaextra">
            Our mission is to make hyperloop transportation accessible to everyone, creating a more connected and sustainable world.
          </p>
        </div>

        {/* Section 3 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Why Choose Us?</h2>
          <p className="text-gray-600 font-nexaextra">
            We offer faster travel times, lower costs, greater energy efficiency, and a reduced environmental impact with our hyperloop systems.
          </p>
        </div>

        {/* Section 4 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Our Commitment</h2>
          <p className="text-gray-600 font-nexaextra">
            We are committed to making hyperloop technology a commercial reality by developing systems worldwide.
          </p>
        </div>

        {/* Add more sections as needed */}
      

      {/* Additional sections */}
      {/* Section 5 */}
      <div className="col-span-1">
        <h2 className="text-2xl font-nexaheavy mb-2 ">Innovation</h2>
        <p className="text-gray-600 font-nexaextra">
          At Neo Great Line, we thrive on innovation, pushing the boundaries of transportation technology.
        </p>
      </div>

      {/* Section 6 */}
      <div className="col-span-1">
        <h2 className="text-2xl font-nexaheavy mb-2 ">Team</h2>
        <p className="text-gray-600 font-nexaextra">
          Our dedicated team of experts is at the forefront of hyperloop development.
        </p>
      </div>

      
        {/* Section 7 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Testimonials</h2>
          <p className="text-gray-600 font-nexaextra">
            Hear what our satisfied customers have to say about our hyperloop systems.
          </p>
        </div>

        {/* Section 8 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Contact Us</h2>
          <p className="text-gray-600 font-nexaextra">
            Get in touch with us to learn more about our innovative transportation solutions.
          </p>
        </div>

        {/* Section 9 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Join Our Team</h2>
          <p className="text-gray-600 font-nexaextra">
            We're always looking for talented individuals to join our mission in revolutionizing transportation.
          </p>
        </div>

        {/* Section 10 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-nexaheavy mb-2 ">Partnerships</h2>
          <p className="text-gray-600 font-nexaextra">
            We collaborate with industry leaders to drive the future of transportation.
          </p>
        </div>
</div>
    </div>
    </div>
  );
};

export default HomePage;

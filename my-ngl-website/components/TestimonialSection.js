import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="mb-4">
          <p className="text-lg font-bold">
            “In a context of strong growth, Bewai allows us to reinforce the 5-star service that we provide to our customers.
          </p>
          <p className="mt-2">
            By automating a large part of the documentary analysis of the financing requests entrusted to us, we accelerate projects and free up time for what is most important: supporting our clients until their real estate dream comes true.”
          </p>
        </div>
        <div className="text-left">
          <p className="text-xl font-bold">Jonathan Fitoussi</p>
          <p>President, CONNECTCREDIT</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="https://bewai.com/wp-content/uploads/2022/03/DSC06860-removebgcopie.png"
          alt="DSC06860-removebgcopy"
          className="w-full md:w-3/4 lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;

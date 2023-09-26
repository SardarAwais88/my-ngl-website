// components/Section7.js
import React from 'react';

const Section = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-blue-900 mb-4">
            We are progressing quickly...<br />with our customers
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4 mb-12">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className=" text-center">
              <em className="font-normal text-xl text-gray-800 block mb-2">
                "In a context of strong growth, Bewai allows us to reinforce
                the 5-star service that we provide to our customers."
              </em>
              <p className="font-normal text-lg text-gray-800 mb-4">
                By automating a large part of the documentary analysis of the
                financing requests entrusted to us, we accelerate projects and
                free up time for what is most important: supporting our clients
                until their real estate dream comes true.
              </p>
              <em className="font-normal text-xl text-gray-800 block mb-2">»</em>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="text-left bg-white p-8">
              <p className="font-bold text-xl text-gray-800 mb-2">
                Jonathan Fitoussi
              </p>
              <p className="font-normal text-lg text-gray-800">
                President, CONNECTCREDIT
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4">
            <div className="text-center mb-8">
              <img
                src="https://bewai.com/wp-content/uploads/2022/02/bpiFrance-logo.png"
                alt="bpiFrance-logo"
                className="w-[202px] h-[60px]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="text-center mb-8">
              <img
                src="https://bewai.com/wp-content/uploads/2022/11/LogoFranceDigitale_color.png"
                alt="LogoFranceDigital_color"
                className="w-[225px] h-[49px]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="text-center mb-8">
              <a href="https://lespepitestech.com/startup-de-la-french-tech/bewai">
                <img
                  src="https://bewai.com/wp-content/uploads/2022/12/Logo-LPT-01.svg"
                  alt="Logo-LPT-01"
                  className="w-[97px] h-[90px]"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="text-center mb-8">
              <img
                src="https://bewai.com/wp-content/uploads/2023/02/28919_HUB-LogoSeul-Couleurs.png"
                alt="28919_HUB-LogoOnly-Colors"
                className="w-[123px] h-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

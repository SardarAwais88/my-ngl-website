import React from 'react';

const FeatureCard = ({ title, imageSrc, description, note }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <img
          src={imageSrc}
          alt={title}
          className="mx-auto mb-4"
          width="100"
          height="100"
        />
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm font-semibold text-red-500">{note}</p>
      </div>
    </div>
  );
};

const FeaturesSection1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl  text-center mb-8 font-nexaheavy">
          Your documents (di)managed in the blink of an eye
        </h2>
        <div className="flex flex-wrap -mx-4 text-center">
          <FeatureCard
            title="Automatic recognition of all types of documents"
            imageSrc="https://bewai.com/wp-content/uploads/2022/01/noun-scanning-report-3316397.svg"
            description = " +30 document classes automatically recognized by AI, without predefined templates."
            note="97% recognition!"
          />
          <FeatureCard
            title="Assisted splitting and reassembly of documents"
            imageSrc="https://bewai.com/wp-content/uploads/2022/01/noun-merge-3482611.svg"
            description="Immediately identify, within the same file, pages from different documents."
            note="Your documents back in order!"
          />
          <FeatureCard title=
            "Automatic extraction of information and data" 
            imageSrc="https://bewai.com/wp-content/uploads/2022/01/noun-form-3683042.svg"
            description="Key information is automatically extracted and qualified, for instant simulations."
            note="Your self-powered CRM!"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection1;

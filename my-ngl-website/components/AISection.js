// components/AISection.js
import React from 'react';

const AISection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4 font-nexaheavy">
                High-performance Artificial Intelligence!
              </h3>
              <h2 className="text-4xl font-nexaheay text-black mb-4 ">
                Automate the analysis <br /> of supporting documents <br /> and accelerate granting
              </h2>
              <p className= " text-black font-nexaextra">
                With no template settings required, Bewai's Intelligent Document Processing solution is ready to use! Bank, Brokerage, Insurance, Community…: make the most of the documents received, instantly. Categorization and automatic control of documents, extraction and automatic control of data.
              </p>
            </div>
            <div className="flex-blocs flex items-center">
              <div className="text-center mr-8">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://cdn-icons-png.flaticon.com/128/10464/10464114.png"
                  alt=""
                  className="et-animated mx-auto"
                />
                <h3 className="text-xl font-bold text-gray-800 mt-4">AS-A-SERVICE</h3>
              </div>
              <div className="text-center mr-8">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://cdn-icons-png.flaticon.com/128/7990/7990580.png"
                  alt=""
                  className="et-animated mx-auto"
                />
                <h3 className="text-xl font-bold text-gray-800 mt-4">EASY-TO-USE</h3>
              </div>
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://cdn-icons-png.flaticon.com/128/2075/2075667.png"
                  alt=""
                  className="et-animated mx-auto"
                />
                <h3 className="text-xl font-bold text-gray-800 mt-4">READY-TO-GO</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="et_pb_image_0">
              <img
                decoding="async"
                fetchpriority="high"
                width="2184"
                height="1500"
                src="https://bewai.com/wp-content/uploads/2022/11/bewai-DF-02.png"
                alt=""
                title=""
                srcSet="https://bewai.com/wp-content/uploads/2022/11/bewai-DF-02.png, https://bewai.com/wp-content/uploads/2022/11/bewai-DF-02-1280x879.png 1280w, https://bewai.com/wp-content/uploads/2022/11/bewai-DF-02-980x673.png 980w, https://bewai.com/wp-content/uploads/2022/11/bewai-DF-02-480x330.png 480w"
                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 2184px, 100vw"
                className="wp-image-1008 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;

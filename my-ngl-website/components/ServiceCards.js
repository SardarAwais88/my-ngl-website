import React from 'react';

const ServiceCards = () => {
  return (
    <>
          <div className="et_pb_text_inner">
            <h2 className="text-3xl  font-nexaheavy text-[38px] text-center mb-8">As-a-service</h2>
          </div>
      
    <div className="flex   flex-wrap justify-center items-center">
      
        <div className="max-w-md rounded overflow-hidden shadow-lg m-4 w-[386px] h-[315px]  ">
          
            <div class="flex items-center justify-center">
  <img
    src="https://bewai.com/wp-content/uploads/2022/01/recropped-comp-cent.svg"
    alt=""
    className="w-[90px] h-[90px]"
  />
</div>

          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2 text-center ">Software as a Service</div>
            <ul className="list-disc">
              <li>No installation required.</li>
              <li>Multi-user.</li>
              <li>Usage pricing.</li>
            </ul>
            <p className="font-bold text-red-600 text-center mt-2">You are free!</p>
          </div>
        </div>

        <div className="max-w-md rounded overflow-hidden shadow-lg m-4 w-[594px] h-[315px]">
        <div class="flex items-center justify-center ">
          <img
            src="https://bewai.com/wp-content/uploads/2022/01/noun-intelligence-assistance-1870398.svg"
            alt=""
            className="w-[90px] hover: h-[90px]" />
            </div>
          <div className="px-6 py-4 text-[14px]">
            <div className="font-bold text-xl mb-2 text-center">Machine Learning as a Service</div>
            <ul className="list-disc">
              <li>In addition to the already recognized “out-of-the-box” document classes.</li>
              <li>Quick assimilation of other types of documents important to you.</li>
              <li>Without pre-defined template.</li>
            </ul>
            <p className="font-bold text-red-600 text-center mt-2">Your documents are working!</p>
          </div>
        </div>
      </div></>
  );
};

export default ServiceCards;
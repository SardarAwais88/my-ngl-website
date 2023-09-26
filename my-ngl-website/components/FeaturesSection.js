import React from 'react';

const OperationalGains = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto py-2">
        <h2 className="text-3xl text-center mb-8  font-nexaheavy">Operational gains for all</h2>
        <div className="flex flex-wrap justify-center -mx-4 ">
          <div className=" sm:w-1/2 md:w-1/3 px-4 h-[317px] w-[350px]">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 text-center ">
              <img
                src="https://bewai.com/wp-content/uploads/2022/01/noun-productivity-2323227.svg"
                alt="Productivity"
                className="mx-auto h-[90px] w-[90px] mb-1"
              />
              <h4 className="text-xl font-semibold mb-2">Productivity</h4>
              <p className="text-gray-700 mb-4">
                Document capture, qualification, reordering of pages, data capture, consistency checks, organization of the final file: free up this precious time, and make the most of it!
              </p>
              <p className="text-red-500 font-bold">Hours saved for everyone, costs drastically reduced</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 text-center">
              <img
                src="https://bewai.com/wp-content/uploads/2022/01/noun-group-2310411.svg"
                alt="Collaboration"
                className="mx-auto   h-[90px] w-[90px] mb-1"
              />
              <h4 className="text-xl  font-semibold mb-2">Collaboration</h4>
              <p className="text-gray-700 mb-4">
                All stakeholders (managers, clients, partners) contribute to the file, according to the rights associated with their area of intervention.
              </p>
              <p className="text-red-500 font-bold">More effective together, to advance common issues</p>
            </div>
          </div>
          <div className=" h-[317px] w-[358px] mb-1">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-1  text-center">
              <img
                src="https://bewai.com/wp-content/uploads/2022/01/noun-workflow-365795.svg"
                alt="Control"
                className="mx-auto h-[90px] w-[90px] mb-1 "
              />
              <h4 className="text-xl font-semibold mb-mb-1">Control</h4>
              <p className="text-gray-700 mb-4">
                Origin of documents, allocation of data, user contributions... and even: in-depth analysis of classification results, with a view to optimization.
              </p>
              <p className="text-red-500 font-bold">Traceability, auditability and continuous progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalGains;

import React from 'react';

const DocumentProcessingCard = ({ title, content }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl  text-customBlue  font-nexaheavy mb-4">{title}</h2>
        <p className="text-gray-800  ">{content}</p>
      </div>
    </div>
  );
};

const DocumentProcessingSection = () => {
  const cardData = [
    {
      title: "All formats!",
      content: (
        <>
          <strong className=' '>Native PDFs, Scans, Photos…</strong><br />
          The main file formats are taken into account!<br></br>
          <span className="font-bold">pdf</span>, <span className="font-bold">docx</span>, <span className="font-bold">xlsx</span>, <span className="font-bold">pptx</span>, <span className="font-bold">doc</span>, <span className="font-bold">png</span>, <span className="font-bold">jpg</span>, <span className="font-bold">jpeg</span>, <span className="font-bold">heic</span>, <span className="font-bold">bmp</span>, <span className="font-bold">gif</span>, <span className="font-bold">jp2</span>, <span className="font-bold">tif</span>, <span className="font-bold">txt</span>, <span className="font-bold">xml</span>, etc…
        </>
      ),
    },
    {
      title: "All types!",
      content: (
        <>
          <strong>Identity documents</strong>, <strong>proof of address</strong>, <strong>account statements</strong>, <strong>employment contracts</strong>, <strong>pay slips</strong>, <strong>savings proofs</strong>, <strong>invoices</strong>, <strong>tax notices</strong>, <strong>property titles</strong>, etc… without any template required!
        </>
      ),
    },
    {
      title: "All layouts!",
      content: (
        <>
          <strong>Returned images</strong>, in color or black & white, large or small… Files made up of <strong>several types of documents grouped together</strong>… Single pages or important documents…
        </>
      ),
    },
  ];

  return (
    <div className= "   bg-customgray py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className=" text-3xl  text-center    text-customBlue  leading-10 tracking-normal  font-nexaheavy">
            Submit ALL your documents “IN BULK”, whatever their<br></br> type or format… Bewai does its job!
          </h1>
        </div>
        <div className="flex flex-wrap">
          {cardData.map((card, index) => (
            <DocumentProcessingCard
              key={index}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentProcessingSection;

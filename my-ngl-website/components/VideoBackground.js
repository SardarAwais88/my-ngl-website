import React from 'react';



const VideoBackground= () => {
  return (
    <div className="flex justify-center items-center">
  <div className="w-[1263px] h-[540px] relative overflow-hidden">
    <video className="object-cover w-full h-full" autoPlay muted loop>
      <source src="https://bewai.com/wp-content/uploads/2022/06/1084686397-hd.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 flex md:w-1/2 ml-10 pl-8  text-center  opacity-[100%] ">
      <div className=" mb-2 text-base leading-6  tracking-normal ">
        <h2 className= "  font-nexaheavy  mt-5    leading-1/3 tracking-normal  text-customBlue p-6 mb-4" >
        INTELLIGENT <br /> DOCUMENT<br /> PROCESSING
          
        </h2>
        <p className=" fill-[#666666] text-gray-600 font-nexaextra   pl-8 text-center text-[22px] ">
        Automatisez la reconnaissance de vos<br/>
        documents et l’exploitation de vos données.
        </p>
        <p className="  font-nexaextra text-1.5vw leading-1.5  tracking-normal text-customBlue p-6 mb-4">
        100% French intelligent RAD-LAD solution , SaaS and<br />API platform, powered by high-performance AI.<br />Processing and analyzing your customer files in the<br /> blink of an
        eye! Automate. Make it reliable.<br />Accelerate.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default VideoBackground;

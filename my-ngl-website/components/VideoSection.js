import React from 'react';

const VideoBackground = () => {
  const h2Style = {
    fontFamily: '"Roboto Slab", Georgia, "Times New Roman", serif',
    fontSize: '4.5vw',
    lineHeight: '1.2',
    textAlign: 'left',
    letterSpacing: 'normal',
    color: '#00284b',
    
    padding: '1.5rem',
  };
  
  const paragraphStyle = {
    fontFamily: '"Roboto Slab", Georgia, "Times New Roman", serif',
    fontSize: '1.5vw',
    lineHeight: '1.5',
    textAlign: 'left',
    letterSpacing: 'normal',
    color: '#00284b',
    
    padding: '1.5rem',
    marginBottom: '1rem',
  };

  return (
    <div className="et_pb_section et_pb_section_0 et_pb_section_video et_pb_preload et_pb_with_background et_section_regular">
      <div className="relative">
        <span className="et_pb_section_video_bg w-auto h-auto">
          <video loop autoPlay playsInline muted>
            <source
              type="video/mp4"
              src="https://bewai.com/wp-content/uploads/2022/06/1084686397-hd.mp4"
            />
            <source
              type="video/webm"
              src="https://bewai.com/wp-content/uploads/2022/06/1084686397-hd.mp4"
            />
          </video>
        </span>
        <div className="font-nexaheavy absolute inset-0 flex flex-col justify-center items-start p-4 lg:p-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  " style={h2Style}>
            INTELLIGENT<br></br> DOCUMENT <br></br> PROCESSING
          </h2>
          <p className="font-nexaextra text-lg md:text-xl lg:text-2xl mb-4 " style={paragraphStyle}>
            Automatisez la reconnaissance de vos<br></br> documents et l’exploitation de vos données.
          </p>
          <p className="font-nexaextra text-lg md:text-xl lg:text-2xl mb-4" style={paragraphStyle}>
          100% French intelligent RAD-LAD solution , SaaS and <br></br>API platform, powered by high-performance AI.
          <br></br>Processing and analyzing your customer files in the blink of an <br></br>eye! Automate. Make it reliable.<br></br> Accelerate. </p>
          
        </div> 
      </div>
    </div>
  );
};

export default VideoBackground;

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-red p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/">
            <img src="/images/ngllogo.PNG" alt="NGl" title="red" className="w-[120px] h-[90] text-3xl ml-10" />
            </Link> </div>
            <p className="text-sm  mb-8 font-nexaheavy text-[15px] text-customA  text-customBlue ">
            Neo Great Line's purpose is to make hyperloop <br>
            </br>technology a commercial reality. The company is<br/> currently developing a hyperloop system in France,<br/>
             and it has plans to build additionalsystems in other <br/>countries around the world.
            </p>
         
          <div className="hidden md:flex space-x-4 text-sm  ">
            <div>
              <p className='font-nexaextra'>123 Main Street, Cityville, USA</p>
              <p className='font-nexaextra' >Email: info@ngl.com</p>
              <p className='font-nexaextra'>Phone: 123-456-7890</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#facebook" className=" text-lg ">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#instagram" className="text-xl">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#twitter" className="text-xl">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-4  ">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link href="/legal-notice" className="text-sm text-red-950">
                Legal Notice
              </Link>
            </li>
            <li className="list-inline-item links">
              <Link href="/data-protection-policy" className="text-sm text-red-950">
                Data Protection Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <p className="text-4xl font-nexaheavy  text-customBlue ">&copy; 2023 NGL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

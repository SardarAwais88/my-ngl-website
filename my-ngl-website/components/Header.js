import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation'; // Corrected import

const Header = () => {
  const { t } = useTranslation();

  // Function to handle smooth scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex p-4 items-center justify-center w-full max-w-full bg-cover bg-center bg-no-repeat m-auto relative border-0 outline-none text-sm text-gray-600">
    <div className="order-1 mr-0 w-full flex items-center bg-cover bg-center bg-no-repeat float-left relative z-10 min-h-1 mix-blend-normal p-0 border-0 outline-none text-sm text-gray-600">
        <div className="mb-0 text-left ml-0 flex mr-auto line-0 animate-linear animate-200 relative bg-cover bg-center bg-no-repeat p-0 border-0 outline-none text-sm text-gray-600">
            <a href="#" className="border-none text-blue-400">
                <span className="block relative    p-0 border-0 outline-none">
                    <img src="/images/ngllogo.PNG" alt="" title="red" className="w-[120px] h-[90] text-3xl ml-10  relative  p-0 border-0 outline-none" />
                </span>
            </a>
        </div><LanguageSwitcher/>
        <div className="mb-0 ml-4 animate-linear animate-200 relative bg-cover bg-center bg-no-repeat p-0 border-0 outline-none text-sm text-gray-600">
           
            <button className="transition duration-300 ease-in-out px-4 py-1 hover:rounded-full text-lg hover: bg-red-500 text-white border-0 font-serif font-semibold inline-block relative" onClick={handleContactClick}>
            
                <span className="inline-block">Contact</span>
                
            </button>
        </div>
    </div>
</div>
  );
};

export default Header;

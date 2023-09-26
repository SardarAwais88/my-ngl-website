import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
      
        <div className="row">
        
          <div className="col-md-3">
            <Link href="/">
            <img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 mr-2"/>
         </Link> 
         </div>
          
          <div className="col-md-6">
            <p>Company Description</p>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>Address</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#social-link">Social Link</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2023 Your Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

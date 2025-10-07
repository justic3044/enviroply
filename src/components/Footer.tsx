import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gray-900 flex justify-center items-center p-2">
                <img src="\img\web_log.png" alt="Enviroply Logo" className="h-12 w-auto object-contain" />
              </div>              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide an environmental health consulting services in South Africa. You can check our social media pages:
          </p>
          <div className="flex space-x-6 text-2xl">
      {/* Facebook */}
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        <FaFacebook />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 transition"
      >
        <FaXTwitter />
      </a>
    </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#food-safety" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Food Safety & Hygiene</a></li>
              <li><a href="/services#compliance" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Compliance Auditing</a></li>
              <li><a href="/services#training" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Professional Training</a></li>
              <li><a href="/services#eia" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Environmental Impact Assessments</a></li>
              <li><a href="/services#waste" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Waste Management Planning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">+27 73 737 5027</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">info@enviroply.co.za</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">50371 Selosecha street Ramokastad 0195 </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">Mon - Fri: 8:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EnviroPly (Pty) Ltd. All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">Developed & maintained by Justice</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

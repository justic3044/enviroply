import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Food Safety & Hygiene', href: '/services#food-safety' },
    { name: 'Compliance Auditing', href: '/services#compliance' },
    { name: 'Professional Training', href: '/services#training' },
    { name: 'Environmental Impact Assessments', href: '/services#eia' },
    { name: 'Waste Management Planning', href: '/services#waste' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">        
            <div>
              <img src="/img/web_log.png" alt="Enviroply Logo" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium flex items-center space-x-1 transition-colors duration-200 ${
                  location.pathname.includes('/services') ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-teal-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 ${
                  location.pathname.includes('/services') ? 'text-teal-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-teal-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

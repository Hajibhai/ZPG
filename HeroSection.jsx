import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
// Try these different import methods:
// Method 1: Direct import (most common)
import bgimage from "../assets/GalleryBackground.jpg";
// Method 2: If above doesn't work, try without file extension
// import bgimage from "../assets/GalleryBackground";
// Method 3: If in public folder, use this instead
// const bgimage = "/assets/GalleryBackground.jpg";

// Logo Component
const Logo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <div className="w-10 h-10 bg-red-600 flex items-center justify-center transform -skew-x-12">
      <span className="text-white font-bold text-xl transform skew-x-12">K</span>
    </div>
  </div>
);

// Navigation Menu Component
const NavigationMenu = ({ activeItem, onItemClick, isMobile = false }) => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => onItemClick(item.name)}
          className={`
            ${isMobile 
              ? "block w-full text-left px-6 py-3 text-base font-medium hover:text-red-600 hover:bg-gray-50" 
              : "px-4 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md"
            }
            ${activeItem === item.name 
              ? (isMobile ? "text-red-600 bg-red-50 border-l-4 border-red-600" : "bg-white bg-opacity-25 backdrop-blur-sm rounded-md") 
              : (isMobile ? "text-gray-700" : "")
            }
            transition-all duration-200
          `}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

// Header Component
const Header = ({ activeItem, onItemClick, isMobileMenuOpen, setMobileMenuOpen }) => (
  <header className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-10 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavigationMenu activeItem={activeItem} onItemClick={onItemClick} />
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="hidden sm:flex items-center justify-center w-10 h-10 text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-200 text-sm font-medium">
            EN
          </button>
          
          <button className="flex items-center justify-center w-10 h-10 text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-200">
            <Search size={18} />
          </button>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-full"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden bg-white shadow-lg border-t">
        <nav className="py-2">
          <NavigationMenu 
            activeItem={activeItem} 
            onItemClick={(item) => {
              onItemClick(item);
              setMobileMenuOpen(false);
            }} 
            isMobile={true} 
          />
        </nav>
      </div>
    )}
  </header>
);

// Main Hero Section Component
const HeroSection = ({ 
  backgroundImage = bgimage,
  title = "OUR GALLERY",
  subtitle = null,
  activeMenuItem = "GALLERY",
  className = ""
}) => {
  const [activeItem, setActiveItem] = useState(activeMenuItem);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Debug: Check if image is loading
  console.log("Background image path:", backgroundImage);
  console.log("Type of backgroundImage:", typeof backgroundImage);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Image with multiple fallback methods */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-500"
        style={{
          backgroundImage: backgroundImage ? `url("${backgroundImage}")` : undefined,
          // Fallback background color to see if div is rendering
          backgroundColor: !backgroundImage ? '#4a5568' : undefined
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Header */}
      <Header 
        activeItem={activeItem}
        onItemClick={setActiveItem}
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic mb-6 tracking-wider leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90">
              {subtitle}
            </p>
          )}
          
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full" />
        </div>
      </div>
      
      {/* Bottom Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600" />
    </div>
  );
};

export default HeroSection;
export { Logo, NavigationMenu, Header };
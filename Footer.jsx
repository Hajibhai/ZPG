import React from 'react'
import logo from "../assets/FooterImgLogo.svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-[#85090B] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3"> */}
                <div className="text-white font-bold text-xl">
                  <img src={logo} alt="logo" className="h-[98px] w-[72px]" />
                </div>
              {/* </div> */}
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Zen perfect group is a trusted expert in comprehensive building care, offering expert facility management and high-rise cradle cleaning services. We help keep your property safe, clean, and operational, so you can focus on what matters most.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-red-700 font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-red-700 font-bold text-sm">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-red-700 font-bold text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to={'/'} className="text-sm hover:text-red-200 transition-colors">Home</Link></li>
              <li><Link to={'/about'} className="text-sm hover:text-red-200 transition-colors">About</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Services</Link></li>
              <li><Link to={'/gallery'} className="text-sm hover:text-red-200 transition-colors">Gallery</Link></li>
              <li><Link to={'/contact'} className="text-sm hover:text-red-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Soft Services</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">MEP & Technical Services</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Construction & Fit-Out</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Support & Utility Services</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Design & Architecture</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">Other Value Additions</Link></li>
              <li><Link to={'/services'} className="text-sm hover:text-red-200 transition-colors">External & High-Level Services</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our news letter</h3>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-l-full bg-[#85090B] border border-red-500 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="px-4 py-2 bg-[#85090B] border border-red-500 rounded-r-full hover:bg-red-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="text-sm">
              <p className="mb-1">Send us a mail</p>
              <a href="mailto:info@zenperfectgroup.ae" className="font-semibold hover:text-red-200 transition-colors">
                info@zenperfectgroup.ae
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-red-200 mb-4 md:mb-0">
              Copyright © 2025 ZEN PERFECT GROUP | All Rights Reserved
            </p>
            <nav className="flex space-x-6">
              <Link to={'/'} className="text-sm text-red-200 hover:text-white transition-colors">HOME</Link>
              <Link to={'/about'} className="text-sm text-red-200 hover:text-white transition-colors">ABOUT US</Link>
              <Link to={'/services'} className="text-sm text-red-200 hover:text-white transition-colors">SERVICES</Link>
              <Link to={'/gallery'} className="text-sm text-red-200 hover:text-white transition-colors">GALLERY</Link>
              <Link to={'/contact'} className="text-sm text-red-200 hover:text-white transition-colors">CONTACT</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
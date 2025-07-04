import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderBgImage from "../assets/low-angle-view-built.png"
import breakimg from "../assets/Rectangle 4093.png";
import bgimage from "../assets/grey-concrete-texture.png";
import { Phone, MapPin, Mail } from 'lucide-react';
import adImage from "../assets/Group 1171275508.png"

const ContactSection = () => {

  const PageName = "CONTACT US"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
    <div className='bg-cover bg-center' style={{backgroundImage:`url(${bgimage})`}}>
    <Header backgroundImage={HeaderBgImage} PageName={PageName}/>
    <div className="w-full">
            <img src={breakimg} alt="liner" width={"100%"} />
          </div>
    <div  className="py-16 px-4">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Get in touch with us
        </h2>

        {/* Contact Cards Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
  {/* Left: Full Height People Card */}
  <div className="bg-white rounded-2xl relative p-6 shadow-lg lg:col-span-2 flex flex-col justify-between">
    <div className="w-12 h-12 bg-[#88060C] absolute top-[-30px] left-[350px] rounded-full flex items-center justify-center mb-6">
      <Phone className="w-6 h-6 text-white" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      <div>
        <h3 className="font-semibold text-[#88060C] text-lg">Abdul Rahman</h3>
        <p className="text-sm text-gray-600">CEO</p>
        <p className="text-sm text-gray-800">+971 50 781 1529</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#88060C] text-lg">Mohaideen aldhanoon</h3>
        <p className="text-sm text-gray-600">Architect & BDM</p>
        <p className="text-sm text-gray-800">+971 54 507 3773</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#88060C] text-lg">Samsudeen</h3>
        <p className="text-sm text-gray-600">General Manager</p>
        <p className="text-sm text-gray-800">+971 54 507 3773</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#88060C] text-lg">Sana Shabira</h3>
        <p className="text-sm text-gray-600">Admin</p>
        <p className="text-sm text-gray-800">+971 56 599 6938</p>
      </div>
    </div>
  </div>

  {/* Right: Location and Mail - stacked to match height of left */}
  <div className="flex flex-col gap-6 h-full">
    {/* Location */}
    <div className="bg-white relative rounded-2xl p-6 shadow-lg flex-1 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#88060C] top-[-30px] absolute rounded-full flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6 text-white  " />
      </div>
      <h3 className="font-semibold text-red-800 text-lg mb-2">Location</h3>
      <p className="text-sm text-gray-600">Abudhabi,</p>
      <p className="text-sm text-gray-600">United Arab Emirates</p>
    </div>

    {/* Mail */}
    <div className="bg-white rounded-2xl relative mt-[20px] p-6 shadow-lg flex-1 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#88060C] absolute top-[-30px] rounded-full flex items-center justify-center mb-4">
        <Mail className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold text-red-800 text-lg mb-2">Mail id</h3>
      <p className="text-sm text-gray-600">info@zenperfectgroups.com</p>
    </div>
  </div>
</div>


        {/* Contact Form */}
        <div className="bg-gray-800 rounded-3xl p-8 relative overflow-hidden">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl font-semibold mb-2">Lets Connect</h3>
              <p className="text-white text-lg">
                Have questions or ready to <span className="bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent font-semibold">get started?</span>
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-600 text-white placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-600 text-white placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-600 text-white placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-600 text-white placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
              
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-red-950 to-red-800 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Send message
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
     <div className='w-full flex pb-[50px] flex-column'>
          <img className='w-full' src={adImage} alt="" />
        </div>
        </div>
     <Footer/>
    </>
  );
};

export default ContactSection;
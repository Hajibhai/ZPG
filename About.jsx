import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderBgImage from "../assets/low-angle-view-built.png";
import breakimg from "../assets/Rectangle 4093.png";
import bgimage from "../assets/grey-concrete-texture.png";
import bgimage1 from "../assets/bgg.png";
import logoImage from "../assets/image 64.png";
import LeafletMap from "../components/LeafletMap";
import image2 from "../assets/Rectangle 4109.png";
import image3 from "../assets/happy-business-man.png";
import adImage from "../assets/Group 1171275508.png";
import layer1 from "../assets/Layer_5.svg";
import layer2 from "../assets/Layer_1.svg";
import layer3 from "../assets/Layer_2.svg";
import layer4 from "../assets/Layer_3.svg";

const About = () => {
  const PageName = "ABOUT";
  return (
    <div>
      <Header backgroundImage={HeaderBgImage} PageName={PageName} />
      <div className="w-full">
        <img src={breakimg} alt="liner" width={"100%"} />
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex justify-center py-10 px-4">
          {/* Increased max width from 5xl to screen-xl */}
          <div className="flex bg-transparent max-w-screen-xl w-full overflow-hidden">
            {/* Text Section - slightly more width */}
            <div className="w-3/5 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-6xl font-bold italic mb-4 bg-gradient-to-r from-red-950 to-red-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-base ">
                  To be the leading provider of innovative and integrated
                  facility management and cradle cleaning solutions across the
                  UAE, setting new standards in service quality, safety, and
                  client satisfaction.
                </p>
                <br />
                <p className="text-gray-700 text-base ">
                  We aim to shape smarter, cleaner, and more efficient
                  environments through professional excellence, sustainable
                  practices, and technology-driven operations.
                </p>

                <h2 className="text-6xl font-bold italic mt-8 mb-4 bg-gradient-to-r from-red-950 to-red-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-base ">
                  To deliver reliable, efficient, and customized facility
                  management and cradle cleaning services that enhance the value
                  and longevity of every property we serve. We are committed to:
                </p>

                {/* Red bullets list */}
                <div className="bg-[#ECECEC] mt-6 p-5 rounded-xl">
                  <ul className="list-none space-y-2">
                    {[
                      "Maintaining the highest safety and quality standards",
                      "Offering cost-effective and scalable service packages",
                      "Building long-term expert through trust, transparency, and results",
                      "Empowering our workforce through training and innovation",
                    ].map((text, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-900 before:rounded-full"
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Section - slightly reduced width to balance */}
            <div className="w-2/5">
              <img
                src={image2}
                alt="Facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgimage1})` }}
        className="bg-cover bg-center"
      >
        <div className="flex justify-center py-10 px-4 relative">
          <div className="flex bg-transparent max-w-5xl w-full overflow-hidden relative">
            {/* ⬅️ Second image behind the first */}
            <div className="absolute left-0 top-0 h-full w-1/2 z-0">
              <img
                src={logoImage}
                alt="Behind Image"
                className="h-full object-cover rounded-xl ml-4"
              />
            </div>

            {/* 🖼️ First image in front */}
            <div className="relative z-10 w-1/2">
              <img
                src={image3}
                alt="Facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* ✏️ Text content */}
            <div className="w-1/2 p-6 mt-[150px] flex flex-col justify-between z-10">
              <div>
                {/* 🔘 White button for Founder's message */}
                <button className="bg-white text-red-800 font-semibold px-4 py-1 rounded-full mb-24 ml-72 shadow-md w-fit">
                  Founder's Message
                </button>

                {/* 👤 Founder's name */}
                <h2 className="text-5xl italic text-white font-bold mb-2">
                  Syed Abdul Rahman
                </h2>
                <h2 className="text-2xl italic text-white font-bold mb-2">
                  Founder
                </h2>

                {/* 📝 Message text */}
                <p className="text-white text-sm leading-relaxed">
                  With a vision to empower entrepreneurs and promote growth in
                  Abu Dhabi’s dynamic business landscape, Syed Abdul Rahman
                  brings in-depth regional knowledge in business to ZEN Perfect
                  Group. His strategic oversight and strong community ties play
                  a crucial role in facilitating smooth business establishment
                  and governmental processes for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bgimage1})` }}
        className="bg-cover bg-center"
      >
        <div className="flex justify-center py-10 px-4 relative">
          <div className="flex bg-transparent max-w-5xl w-full overflow-hidden relative">
            {/* 🟦 Text content on the LEFT */}
            <div className="w-1/2 mt-[150px] p-6 flex flex-col justify-between z-10 space-y-4">
              {/* 🏷️ White shade "Founder's Message" Button */}
              <div>
                <span className="inline-block bg-white text-red-900 font-semibold px-4 py-1 rounded-full text-sm shadow-md mb-24 mr-10">
                  Admin's Message
                </span>

                {/* 🧑 Founder Name Heading */}
                <h2 className="text-5xl italic text-white text-nowrap font-bold mb-2">
                  Samsuddin
                </h2>
                <h2 className="text-2xl italic text-white font-bold mb-2">
                  Admin
                </h2>

                {/* 📝 Founder Message Content */}
                <p className="text-white text-sm leading-relaxed">
                  As the driving force behind Zen perfect group, Shamsuddin
                  brings extensive experience in company formation, legal
                  documentation, and PRO services. With his expert leadership,
                  the company has established itself as a top business setup
                  facilitator in Abu Dhabi.
                </p>
                <br />
                <p className="text-white text-sm leading-relaxed">
                  We take pride in providing clear, efficient, and professional
                  administrative services tailored to each client’s needs. Our
                  commitment ensures every customer receives expert guidance and
                  seamless service at every step.
                </p>
              </div>
            </div>

            {/* 🖼️ Main image on the RIGHT */}
            <div className="relative z-10 w-1/2">
              <img
                src={image3}
                alt="Facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* 🔳 Slightly visible logo image behind image */}
            <div className="absolute right-0 top-0 h-full w-1/2 z-0">
              <img
                src={logoImage}
                alt="Behind Logo"
                className="h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[900px]" style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-5xl italic font-bold mb-6 bg-gradient-to-r  from-red-950 to-red-800 bg-clip-text text-transparent">
            Why Choose Us
          </h1>
          <p className="max-w-[950px] px-4 text-base leading-relaxed  bg-clip-text ">
            At ZEN Perfect Group , we stand out as a trusted and 20 years
            experienced provider for business setup in Abu Dhabi. Our strength
          </p>
          <p className="max-w-[700px] px-4 text-base leading-relaxed  bg-clip-text ">
            lies in our customer-focused approach, efficient processes, and
            unmatched local expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-10 p-10">
          {/* Card 1 */}
          <div className="bg-white relative rounded-2xl p-6 shadow-lg w-full md:w-[48%] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#88060C] -top-6 absolute rounded-full flex items-center justify-center">
              <img src={layer1} alt="logo" />
            </div>
            <h3 className="font-semibold text-red-800 text-lg mt-6 mb-2">
              Location
            </h3>
            <h1 className="text-sm text-gray-600">Expert Guidance</h1>
            <p className="text-sm text-gray-600">
              20 years of industry experience, our seasoned professionals
              possess deep knowledge of Abu Dhabi’s regulatory framework. We
              offer end-to-end assistance to navigate complex business setup
              procedures with clarity and confidence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white relative rounded-2xl p-6 shadow-lg w-full md:w-[48%] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#88060C] -top-6 absolute rounded-full flex items-center justify-center">
              <img src={layer2} alt="logo" />
            </div>
            <h3 className="font-semibold text-red-800 text-lg mt-6 mb-2">
              Location
            </h3>
            <h1 className="text-sm text-gray-600">
              Seamless & Efficient Process
            </h1>
            <p className="text-sm text-gray-600">
              Backed by extensive hands-on experience, we streamline every step
              — from legal documentation to final approvals — saving you
              valuable time and effort. Our proven methods ensure a hassle-free
              and efficient journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white relative rounded-2xl p-6 shadow-lg w-full md:w-[48%] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#88060C] -top-6 absolute rounded-full flex items-center justify-center">
              <img src={layer4} alt="logo" />
            </div>
            <h3 className="font-semibold text-red-800 text-lg mt-6 mb-2">
              Location
            </h3>
            <h1 className="text-sm text-gray-600">
              {" "}
              Complete Business Setup Solutions
            </h1>
            <p className="text-sm text-gray-600">
              Drawing on years of practical expertise, we provide a
              comprehensive suite of services including PRO services, golden
              visa processing, legal translation, health and vehicle insurance,
              and more — all under one roof, customized to your needs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white relative rounded-2xl p-6 shadow-lg w-full md:w-[48%] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#88060C] -top-6 absolute rounded-full flex items-center justify-center">
              <img src={layer3} alt="logo" />
            </div>
            <h3 className="font-semibold text-red-800 text-lg mt-6 mb-2">
              Location
            </h3>
            <h1 className="text-sm text-gray-600">Personalized Support</h1>
            <p className="text-sm text-gray-600">
              Our experienced team understands that each business is unique. We
              don’t offer generic solutions; instead, we listen, analyze, and
              provide tailored services that align perfectly with your business
              goals and vision.
            </p>
          </div>
        </div>
        <div className="w-full flex   flex-column">
          <img className="w-full" src={adImage} alt="" />
        </div>
      </div>

      <LeafletMap />
      <Footer />
    </div>
  );
};

export default About;

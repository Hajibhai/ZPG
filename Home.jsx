import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/ZenLogo.png";
import HeaderBgImage from "../assets/skyscrapper.png";
import bgimage from "../assets/grey-concrete-texture.png";
import image1 from "../assets/GalleryBackground.jpg";
import image2 from "../assets/workers-washing-windows-office-building.jpg";
import image3 from "../assets/Rectangle 4098.png";
import image4 from "../assets/Rectangle 4099.png";
import image5 from "../assets/Rectangle 4102.png";
import image6 from "../assets/Rectangle 4104.png";
import image7 from "../assets/Rectangle 4103.png";
import rightIcon from "../assets/rightIcon.svg";

const Home = () => {
  const PageName = "";

  return (
    // Apply background to the main container with fixed positioning
    <div 
      className="min-h-screen bg-fixed bg-center bg-repeat"
      style={{ 
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'auto' // This prevents the zooming effect
      }}
    >
      <Header backgroundImage={HeaderBgImage} PageName={PageName} />
      
      {/* Hero Section */}
      <div className="h-[450px] mt-[100px] bg-transparent">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img className="h-32 w-24" src={logo} alt="logo" />
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-[#85090B]">Zen Perfect group</span>
          </h1>
          <h1 className="text-4xl italic font-bold ">
            Your Trusted Expert in{" "}
            <span className="bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">
              Cleaning Services
            </span>
          </h1>
          <h1 className="text-4xl italic font-bold ">
            and Building{" "}
            <span className="bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">
              {" "}
              Facility Management
            </span>
          </h1>
          <h1 className="text-center text-sm max-w-[700px] leading-relaxed">
            At ZEN Perfect Group, we take pride in offering integrated,
            reliable, and innovative building facility management and
            maintenance & cleaning services. With a commitment to excellence,
            our operations span across various industries through our strong
            network of affiliated companies.
          </h1>
        </div>
        <h1 className="text-center text-4xl pt-5 font-bold italic bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">
          Our Companies
        </h1>
      </div>

      {/* Companies Section - Remove duplicate background */}
      <div className="pb-10">
        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2">
              <img
                src={image1}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-[#85090B] font-bold mb-4">
                  Perfect Facility Management LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Perfect Facility Management LLC offers integrated and
                  comprehensive facility management solutions designed to optimize
                  the performance and longevity of commercial and residential
                  properties. Their services encompass technical maintenance,
                  security, cleaning supervision, and space management, ensuring a
                  seamless operational environment. They focus on proactive
                  management and cost-effective strategies to enhance asset value
                  and occupant comfort.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Perfect Cleaning Services LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Perfect Cleaning Services LLC delivers professional and
                  high-quality cleaning solutions tailored to meet the diverse
                  needs of residential, commercial, and industrial sectors.
                  Utilizing eco-friendly products and advanced cleaning
                  techniques, they ensure immaculate and hygienic environments.
                  Their services range from routine office cleaning and deep
                  residential cleans to specialized industrial clean-ups, all
                  performed by a trained and dedicated team committed to exceeding
                  client expectations.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={image2}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2">
              <img
                src={image3}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Perfect General Maintenance & Contracting LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Perfect General Maintenance & Contracting LLC provides a full
                  spectrum of reliable general maintenance and contracting
                  services for various properties, both large and small. This
                  includes everything from routine preventative maintenance and
                  emergency repairs to minor renovations and construction support.
                  They specialize in ensuring the structural integrity,
                  functionality, and aesthetic appeal of buildings, offering
                  timely and efficient solutions to maintain property standards
                  and prevent costly future issues.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Perfect Architecture LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Perfect Architecture LLC is a design-focused firm specializing
                  in innovative and sustainable architectural solutions for a
                  diverse range of projects. They offer comprehensive services
                  from initial conceptualization and feasibility studies to
                  detailed design, construction documentation, and project
                  supervision. Their expertise lies in creating functional,
                  aesthetically pleasing, and environmentally responsible spaces
                  that reflect the unique vision and requirements of each client,
                  transforming ideas into tangible, well-designed structures.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={image4}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2">
              <img
                src={image5}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Admin Point Business Solutions LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Admin Point Business Solutions LLC offers vital administrative
                  and operational support to businesses, enabling them to focus on
                  core competencies and strategic growth. Their services include
                  virtual assistance, data management, document processing, human
                  resources administration, and general office support. By
                  streamlining administrative tasks and implementing efficient
                  workflows, they help companies reduce overheads, improve
                  productivity, and ensure smooth day-to-day operations, becoming
                  a reliable partner for business efficiency.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Admin Tech Real Estate & Property Management LLC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Admin Tech Real Estate & Property Management LLC leverages a
                  blend of administrative expertise and technological innovation
                  to provide comprehensive real estate and property management
                  services. They specialize in efficient tenant acquisition and
                  retention, lease administration, rent collection, property
                  maintenance coordination, and financial reporting for property
                  owners. Their tech-driven approach ensures transparent
                  communication, optimized property performance, and enhanced
                  returns on real estate investments.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={image6}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-4">
          <div className="flex bg-white max-w-5xl w-full rounded-xl overflow-hidden shadow-md">
            <div className="w-1/2">
              <img
                src={image7}
                alt="Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold italic mb-4 text-[#85090B]">
                  Captain Facility Management LLC - OPC
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Captain Facility Management LLC - OPC operates as a dynamic and
                  agile single-person company (OPC) dedicated to delivering
                  personalized and highly efficient facility management services.
                  This structure allows for a focused and tailored approach to
                  property maintenance, operational management, and tenant
                  satisfaction for individual clients or specific projects. The
                  OPC model ensures direct oversight, rapid decision-making, and a
                  commitment to providing bespoke solutions that meet the precise
                  needs of each facility under its care.
                </p>
              </div>

              <div className="flex items-center justify-end mt-6 cursor-pointer gap-2">
                <p className="text-red-800 font-medium text-sm">LEARN MORE</p>
                <img src={rightIcon} alt="icon" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
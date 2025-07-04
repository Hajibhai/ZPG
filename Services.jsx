import React from "react";
import Header from "../components/Header";
import HeaderBgImage from "../assets/low-angle-view-built-structure-building 8.png";
import bgimage from "../assets/grey-concrete-texture.png";
import breakimg from "../assets/Rectangle 4093.png";
import image1 from "../assets/workers-washing-windows-office-building.jpg";
import image2 from "../assets/Rectangle 4467.png";
import image3 from "../assets/cleaner-provides-cleaning-service-network-internet.jpg";
import image4 from "../assets/Rectangle 4469.png";
import image5 from "../assets/Rectangle 4460.png";
import image6 from "../assets/Rectangle 4463.png";
import image7 from "../assets/Rectangle 4459.png";
import image8 from "../assets/Rectangle 4470.png";
import image9 from "../assets/Rectangle 4471.png";
import image10 from "../assets/Rectangle 4474.png";
import image11 from "../assets/Rectangle 4475.png";
import image12 from "../assets/Rectangle 4478.png";
import image13 from "../assets/Rectangle 4479.png";
import img1 from "../assets/Rectangle 4452.png";
import img2 from "../assets/Rectangle 4397 (1).png";
import img3 from "../assets/Rectangle 4443.png";
import img4 from "../assets/Rectangle 4442.png";
import img5 from "../assets/Rectangle 4440.png";
import img6 from "../assets/Rectangle 4426.png";
import img7 from "../assets/Rectangle 4429.png";
import img8 from "../assets/Rectangle 4427.png";
import img9 from "../assets/Rectangle 4425.png";
import img10 from "../assets/Rectangle 4415.png";
import img11 from "../assets/Rectangle 4414.png";
import img12 from "../assets/Rectangle 4413 (1).png";
import img13 from "../assets/Rectangle 4406 (3).png";
import img14 from "../assets/Rectangle 4360.png";
import img15 from "../assets/Rectangle 4398 (1).png";
import img16 from "../assets/Rectangle 4397 (1).png";
import img17 from "../assets/Rectangle 4390 (1).png";
import img18 from "../assets/Rectangle 4389 (1).png";
import img19 from "../assets/Rectangle 4388 (2).png";
import img20 from "../assets/Rectangle 4383.png";
import img21 from "../assets/Rectangle 4380 (1).png";
import img22 from "../assets/Rectangle 4377 (1).png";

import Footer from "../components/Footer";

const Services = () => {
  const PageName = "OUR SERVICES";
  const images1 = [image1, image2, image3];
  const images2 = [image5, image6, image6, image5];
  const images3 = [image8, image9, image8, image9];
  const images4 = [image10, image11, image10, image11];
  const images5 = [image12, image13, image12, image13];

  // Card data for each service section
  const buildingFacilityCards = [
    {
      image: img22,
      title: "Office Boy & Housekeeping Service",
      description:
        "Professional and courteous staff to assist with daily operations and cleanliness, ensuring your space is well-maintained and welcoming.",
      buttonText: "Avail Service",
    },
    {
      image: img21,
      title: "Cleaner Supplied Service (Monthly & Yearly)",
      description:
        "Flexible staffing options for janitorial and housekeeping personnel based on monthly or yearly contracts, ideal for continuous operations.",
      buttonText: "Avail Service",
    },
    {
      image: img20,
      title: "Carpet Shampoo Cleaning",
      description:
        "Deep cleaning of carpets using high-grade equipment and eco-friendly solutions to remove stains, allergens, and odors.",
      buttonText: "Avail Service",
    },
  ];

  const mepTechnicalCards = [
    {
      image: img19,
      title: "All Types of MEP, AC & HVAC Services",
      description:
        "From air conditioning units to mechanical, electrical, and plumbing systems, we ensure smooth operation and preventive maintenance.",
      buttonText: "Avail Service",
    },
    {
      image: img18,
      title: "All Types of Aluminium & Glass Work",
      description:
        "Design, fabrication, and installation of durable aluminium frames, windows, and decorative glass panels to enhance your building’s appearance.",
      buttonText: "Avail Service",
    },
    {
      image: img17,
      title: "All Types of Cladding & Carpentry Work",
      description:
        "Custom woodwork and cladding solutions tailored to your interiors and exteriors — merging aesthetics with durability.",
      buttonText: "Avail Service",
    },
    {
      image: img16,
      title: "All Types of Gypsum & Partition Work",
      description:
        "Installation of decorative and functional partitions using gypsum, suitable for offices, villas, and retail spaces.",
      buttonText: "Avail Service",
    },
    {
      image: img15,
      title: "Lift & Elevator Maintenance Service",
      description:
        "Regular inspection, repair, and maintenance of elevators and lifts to ensure smooth and safe operation.",
      buttonText: "Avail Service",
    },
    {
      image: img14,
      title: "ELV & FLS System",
      description:
        "Installation and maintenance of Extra-Low Voltage systems (CCTV, data, alarms) and Fire & Life Safety systems to comply with building codes and ensure protection.",
      buttonText: "Avail Service",
    },
    {
      image: img13,
      title: "Project Management",
      description:
        "Complete oversight of your project from initiation to execution — ensuring timelines, budgets, and quality standards are met.",
      buttonText: "Avail Service",
    },
  ];

  const constructionCards = [
    {
      image: img12,
      title: "Civil & Fit-Out Works",
      description:
        "Construction and renovation services that include structural modifications, custom interiors, and professional finishing solutions.",
      buttonText: "Avail Service",
    },
    {
      image: img11,
      title: "Real Estate Lease & Property Management Service",
      description:
        "Comprehensive lease management, tenant coordination, and upkeep of properties to maintain their value and rental performance.",
      buttonText: "Avail Service"
    },
    {
      image: img10,
      title: "All Kinds of Building Projects Contracting",
      description:
        "From villas to commercial complexes, we handle all aspects of construction including planning, execution, and handover.",
      buttonText: "Avail Service"
    },
  ];

  const supportUtilityCards = [
    {
      image: img9,
      title: "Water Tank Cleaning & Pest Control Service",
      description:
        "Safe and certified cleaning services for water tanks combined with pest control solutions to promote hygiene and safety.",
      buttonText: "Avail Service"
    },
    {
      image: img8,
      title: "Importing & Exporting",
      description:
        "Support for your logistical needs including product sourcing, customs clearance, and freight management — handled efficiently.",
      buttonText: "Avail Service"
    },
    {
      image: img7,
      title: "Onshore & Offshore Oil & Gas Field & Facility Service",
      description:
        "Support services tailored to the energy sector, including manpower supply and facility maintenance for oilfields and offshore operations.",
      buttonText: "Avail Service"
    },
    {
      image: img6,
      title: "Public Relation Services (PRO)",
      description:
        "Dedicated PRO solutions for documentation, license processing, visa applications, and all government-related services.",
      buttonText: "Avail Service"
    },
  ];

  const designArchitectureCards = [
    {
      image: img5,
      title: "Landscaping Design & Maintenance",
      description:
        "Creative landscaping services to design, install, and maintain gardens, green areas, and outdoor layouts that inspire.",
      buttonText: "Avail Service"
    },
    {
      image: img4,
      title: "Interior & Exterior Design",
      description:
        "Comprehensive design services to create functional, modern, and elegant interiors and exteriors — customized for every project.",
      buttonText: "Avail Service"
    },
    {
      image: img3,
      title: "3D Visualization",
      description:
        "Bring your project to life with realistic 3D renders that showcase architecture, lighting, and finishes before construction begins.",
      buttonText: "Avail Service"
    },
    {
      image: img2,
      title: "Architectural Drawing",
      description:
        "Professional CAD drawings, blueprints, and floor plans — compliant with local regulations and project needs.",
      buttonText: "Avail Service"
    },
  ];

  const valueAdditionCards = [
    {
      image: img1,
      title: "Swimming Pool & Water Feature Cleaning & Maintenance",
      description:
        "Regular cleaning and technical maintenance of pools, fountains, and water features to ensure hygiene, aesthetics, and equipment performance.",
      buttonText: "Avail Service"
    }
  ];

  // Reusable Card Component
  const ServiceCard = ({ image, title, description, buttonText }) => (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="h-[200px] w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 text-center">
        {/* Gradient Heading */}
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-red-800  to-red-950 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {/* Gradient Button */}
        <button className="bg-gradient-to-r from-red-800  to-red-950 hover:from-red-800 hover:via-red-600 hover:to-red-500 text-white text-xs px-4 py-2 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Header backgroundImage={HeaderBgImage} PageName={PageName} />
      <div className="w-full">
        <img src={breakimg} alt="liner" width={"100%"} />
      </div>

      {/* Building Facility Management */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">
            Building Facility Management
          </h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed  bg-clip-text ">
            We provide end-to-end management for all building operations,
            focusing on long-term maintenance, safety, comfort, and efficiency.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {buildingFacilityCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* MEP & Technical Services */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">MEP & Technical Services</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Comprehensive maintenance of mechanical, electrical, and plumbing
            systems, including HVAC, lighting, and fire safety solutions.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {mepTechnicalCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Construction & Fit-Out */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">Construction & Fit-Out</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Professional construction and fit-out services for commercial spaces
            with focus on quality and timely delivery.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {constructionCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Support & Utility Services */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">
            Support & Utility Services
          </h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Essential support services including cleaning, security, waste
            management, and pest control for optimal building operations.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {supportUtilityCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Design & Architecture */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">Design & Architecture</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Creative design and architectural solutions that combine
            functionality with aesthetic appeal for modern spaces.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {designArchitectureCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Other Value Additions */}
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">Other Value Additions</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Additional value-added services including technology integration,
            sustainability solutions, and quality assurance programs.
          </p>
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {valueAdditionCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

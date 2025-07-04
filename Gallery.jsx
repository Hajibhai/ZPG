import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import breakimg from "../assets/Rectangle 4093.png";
import HeaderBgImage from "../assets/GalleryBackground.jpg";
import bgimage from "../assets/grey-concrete-texture.png";
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

const Gallery = () => {
    const PageName = "OUR GALLERY"
  const images1 = [image1, image2, image3, image4];
  const images2 = [image5, image6, image6, image5];
  const images3 = [image8, image9, image8, image9];
  const images4 = [image10, image11, image10, image11];
  const images5 = [image12, image13, image12, image13];

  return (
    <div>
      <Header backgroundImage={HeaderBgImage} PageName={PageName}/>
      <div className="w-full">
        <img src={breakimg} alt="liner" width={"100%"} />
      </div>
      
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4">Soft Services</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed mb-5">
            Seamless building support with cleaning, security, waste management,
            and pest control services that ensure a safe, welcoming, and
            hygienic environment for occupants.
          </p>
        </div>

        <div className="h-[250px] w-full bg-cover bg-center flex flex-col">
          <div className="flex flex-nowrap gap-5 justify-center items-center h-[400px]">
            {images1.map((image, index) => (
              <div key={index} className="h-[300px] w-[250px] rounded-3xl">
                <img
                  src={image}
                  alt={`demoImg`}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4">MEP & Technical Services</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Comprehensive maintenance of mechanical, electrical, and plumbing
            systems, including HVAC, lighting, and fire safety solutions, to
            keep your facility running smoothly and efficiently.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 px-4 py-8">
          {/* Left side large image */}
          <div className="h-[400px] w-[400px] rounded-3xl overflow-hidden flex-shrink-0">
            <img
              src={image7}
              alt="Left Large"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right side 2x2 grid of small images */}
          <div className="grid grid-cols-2 gap-3 h-[400px] w-[400px]">
            {images2.map((img, index) => (
              <div
                key={index}
                className="h-[192px] w-[192px] rounded-3xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Small ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Construction & Fit-Out</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Expert project management, construction, and interior fit-out
            solutions that transform spaces with precision craftsmanship and
            high-quality finishes, tailored to your needs.
          </p>
        </div>

        <div className="h-[250px] w-full bg-cover bg-center flex flex-col">
          <div className="flex flex-nowrap gap-5 justify-center items-center h-[400px] pt-[20px]">
            {images3.map((image, index) => (
              <div key={index} className="h-[300px] w-[250px] rounded-3xl">
                <img
                  src={image}
                  alt={`demoImg`}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4">
            Support & Utility Services
          </h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed mb-5">
            Essential support services including water, energy, waste, and
            backup power management to maintain seamless operations and ensure
            consistent functionality across your property.
          </p>
        </div>

        <div className="h-[250px] w-full bg-cover bg-center flex flex-col">
          <div className="flex flex-nowrap gap-5 justify-center items-center h-[400px]">
            {images4.map((image, index) => (
              <div key={index} className="h-[300px] w-[250px] rounded-3xl">
                <img
                  src={image}
                  alt={`demoImg`}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-transparent text-center flex flex-col justify-center items-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4">Design & Architecture</h1>
          <p className="max-w-[700px] px-4 text-base leading-relaxed">
            Innovative design and architectural solutions that blend creativity
            with functionality, enhancing your space’s aesthetic appeal and
            optimizing its usability.
          </p>
        </div>

        <div className="h-[400px] w-full bg-cover bg-center flex flex-col">
          <div className="flex flex-nowrap gap-5 justify-center items-center h-[400px]">
            {images5.map((image, index) => (
              <div key={index} className="h-[300px] w-[250px] rounded-3xl">
                <img
                  src={image}
                  alt={`demoImg`}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

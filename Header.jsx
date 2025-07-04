import logo from "../assets/ZenLogo.png";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import bgTemplate from "../assets/grey-concrete-texture.png"

const Header = ({ backgroundImage, PageName }) => {
  const location = useLocation();
  
  // Define menu items with their corresponding routes and page names
  const menuItems = [
    { name: "HOME", route: "/", page: "HOME" },
    { name: "ABOUT US", route: "/about", page: "ABOUT US" },
    { name: "SERVICES", route: "/services", page: "SERVICES" },
    { name: "GALLERY", route: "/gallery", page: "GALLERY" },
    { name: "CONTACT", route: "/contact", page: "CONTACT" }
  ];

  // Function to check if current route is active
  const isActive = (route) => {
    return location.pathname === route;
  };

  return (
    <>
    <div style={{backgroundImage: `url(${bgTemplate})`}}>

      <header 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
        className='h-[700px] w-full bg-cover bg-center flex-column'
      >
        <div className="flex items-center justify-between w-full h-[60px] px-4 bg-transparent">
          {/* Logo */}
          <div className="w-[80px] mt-[60px] ml-[75px]">
            <Link to="/">
              <img src={logo} alt="logo" className="h-[98px] w-[72px] cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div 
            style={{backgroundColor:"oklch(0.93 0.01 360 / 0.44)"}} 
            className="flex justify-around w-[500px] gap-4 text-white border-none text-xs rounded-3xl px-4 py-3 mt-36 backdrop-blur-sm"
            >
            {menuItems.map((item) => (
              <Link
              key={item.route}
                to={item.route}
                className={`cursor-pointer px-3 py-2 rounded-full transition-all duration-300 no-underline ${
                  isActive(item.route)
                    ? 'bg-gray-300 text-gray-800 font-semibold shadow-md' 
                    : 'text-black hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-sm hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language and Search */}
          <div className="flex flex-row justify-between items-end text-sm w-[80px] mt-[60px]">
            <div className="cursor-pointer border-1 rounded-3xl text-xs text-white px-2 py-2 border-white">
              EN
            </div>
            <div className="cursor-pointer border-1 rounded-3xl text-xs font-bold px-2 py-2 border-white bg-[#85090B] text-white">
              <CiSearch size={18} />
            </div>
          </div>
        </div>
        
        {/* Page Title */}
        <div>
          <h1 className="text-white text-5xl mt-[250px] ml-[500px]">
            {PageName}
          </h1>
        </div>
      </header>
                    </div>
    </>
  );
};

export default Header;
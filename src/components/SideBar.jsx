import { useState, useEffect } from "react";
import Logo from "../assets/img/BookMarkifyLogoTransparent.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Set the initial state based on the current window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-full sm:w-[300px] overflow-y-auto text-center bg-gray-900 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="Bookmarkify Logo" width={48} height={48} />
              <h1 className="font-bold text-gray-200 text-[15px] ml-1">
                BookMarkify
              </h1>
            </div>
            <i
              className="bi bi-x cursor-pointer sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white  hover:scale-90">
          <i className="bi bi-activity"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Dashboard
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white  hover:scale-90">
          <i className="bi bi-globe"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Public
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white hover:scale-90">
          <i className="bi bi-person-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Profile
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white hover:scale-90">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
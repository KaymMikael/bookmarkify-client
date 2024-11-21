import { Link } from "react-router-dom";
import BookMarkifyLogo from "../assets/img/BookMarkifyLogo.png";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className="flex items-center justify-between"
        aria-label="large screen navigation"
      >
        <Link to={"/"} className="hover:opacity-70 flex items-center gap-2">
          <img
            src={BookMarkifyLogo}
            alt="Bookmarkify Logo"
            className="w-10 h-10 rounded"
          />
          <span className="text-xl dark:text-white">Book Markify</span>
        </Link>
        <ul className="hidden md:flex gap-5 text-md items-center dark:text-white">
          <li>
            <Link to={"/"} className="hover:opacity-70">
              About
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:opacity-70">
              Features
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:opacity-70">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:opacity-70">
              Contact Us
            </Link>
          </li>
          <li>
            <Button text={"Log in"} onClick={toggleNav} />
          </li>
        </ul>
        <GiHamburgerMenu
          role="button"
          aria-label="Responsive button"
          className="block md:hidden text-2xl text-primary active:opacity-50"
          onClick={toggleNav}
        />
      </nav>
      {isOpen && (
        <nav aria-label="mobile navigation" className="md:hidden mt-3">
          <ul className="flex flex-col gap-2 text-lg dark:text-white">
            <li>
              <Link to={"/"} className="hover:opacity-70" onClick={toggleNav}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:opacity-70" onClick={toggleNav}>
                Features
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:opacity-70" onClick={toggleNav}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:opacity-70" onClick={toggleNav}>
                Contact Us
              </Link>
            </li>
            <li>
              <Button text={"Log in"} onClick={toggleNav} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;

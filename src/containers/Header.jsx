import React, { useState } from "react";
import logo_bookmark from "../assets/images/logo-bookmark.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className="flex items-center justify-between mx-auto max-w-[73.375rem] p-5 md:py-[2.9375rem] md:px-8">
      <Logo isMenuOpen={isMenuOpen}/>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
}

function Logo({ isMenuOpen }) {
  return (
    <a href="#" className="z-50 ml-[.375rem]">
      <img
        src={logo_bookmark}
        alt="Bookmark"
        width={148}
        height={25}
        className={`transition duration-300 ease-in-out md:filter-none ${
          isMenuOpen ? "filter-logo-white" : ""
        }`}
      />
    </a>
  );
}

function Navbar({ toggleMenu, isMenuOpen }) {
  const links = ["features", "pricing", "contact"];

  return (
    <nav>
      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        id="navbar-menu"
        className={`transition-visibility invisible absolute top-0 left-0 z-40 flex h-full w-full flex-col items-center justify-between bg-very-dark-blue/90 tracking-widest opacity-0 md:visible md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-start md:gap-[3rem] md:bg-transparent md:p-0 md:text-[.8125rem] md:opacity-100 ${
          isMenuOpen ? "!visible px-8  pt-24 pb-8 opacity-100" : ""
        }`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="block border-soft-red uppercase text-white transition duration-300 hover:text-soft-red md:rounded-md md:border-[.188rem] md:bg-soft-red md:py-[.4995rem] md:px-[1.8745rem] md:hover:bg-white"
          >
            login
          </a>
        </li>
        <li className="md:hidden">
          <ul className="flex items-center gap-8 ">
            <li>
              <a
                href="#"
                className="block text-2xl uppercase text-slate-900"
                aria-label="facebook"
              >
                <img
                  src={facebook}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xluppercase block text-slate-900"
                aria-label="twitter"
              >
                <img
                  src={twitter}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function HamburgerMenu({ toggleMenu, isMenuOpen }) {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="pointer z-50 flex h-[1.15rem] w-7 flex-col justify-between md:hidden"
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`z-50 h-0.5 w-7 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-2 rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 bg-slate-900 transition duration-300 ease-in-out ${
          isMenuOpen ? " opacity-0" : ""
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "-translate-y-2 -rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
    </button>
  );
}

export default Header;

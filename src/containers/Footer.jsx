import React from "react";
import logo_bookmark_light from "../assets/images/logo-bookmark-light.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center md:items-start gap-[2rem] md:gap-0 md:flex-row px-[2rem] pt-[2.0625rem] pb-[1.875rem] bg-very-dark-blue">
      <Logo />
      <Navbar />
      <SocialMedia />
    </footer>
  );
}

function Logo() {
  return (
    <a href="#" className="z-50 ml-[.375rem]">
      <img
        src={logo_bookmark_light}
        alt="Bookmark"
        width={148}
        height={25}
        className={`transition duration-300 ease-in-out`}
      />
    </a>
  );
}

function Navbar() {
  const links = ["features", "pricing", "contact"];

  return (
    <nav className="md:ml-[4rem] ">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-[2.75rem] ">
        {links.map((link, i) => (
          <li key={i} className="">
            <a
              href="#"
              className="uppercase text-white transition duration-300 hover:text-soft-red text-[.875rem]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialMedia() {
  return (
    <div className="flex flex-1 items-center justify-center md:justify-end gap-[2.5rem]">
      <a href="#" className="hover:cursor-pointer hover:filter-orange">
        <img src={facebook} alt="facebook-logo" />
      </a>
      <a
        href="https://twitter.com/Fabrizio_Ortiz0"
        className="hover:cursor-pointer hover:filter-orange"
        target="_blank"
      >
        <img src={twitter} alt="twitter-logo" />
      </a>
    </div>
  );
}

export default Footer;

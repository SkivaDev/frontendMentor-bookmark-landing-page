import React from "react";
import hero from '../assets/images/illustration-hero.svg'

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-between md:flex-row-reverse mx-auto mt-[3.5625rem] max-w-[73.375rem] md:gap-16 md:px-8">
      <div className="banner-1 flex-[1.08] width-fill-available">
      <img
          src={hero}
          alt="hero-image"
          aria-hidden="true"
          width={657}
          height={466}
          className="mx-auto rwd:max-w-[125%]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[1.625rem] text-center md:text-left">
        <h1 className="mt-8 text-[1.5rem] font-[500] leading-[1.05] text-very-dark-blue md:mt-0 md:text-[3rem]">A Simple Bookmark Manager</h1>
        <p className="text-[1.125rem] text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex gap-[1.25rem] justify-center md:justify-start">
          <button className="rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.655rem] px-[1.521rem] text-[0.875rem] font-medium text-white transition duration-300 hover:bg-white hover:text-soft-blue">Get it on Chrome</button>
          <button className="rounded-md border-[0.188rem] border-white bg-white py-[0.655rem] px-[1.521rem] text-[0.875rem] font-med text-gray-700 shadow-2xl transition duration-300 hover:border-very-dark-blue">Get it on Firefox</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

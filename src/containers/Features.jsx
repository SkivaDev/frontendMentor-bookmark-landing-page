import React, { useState } from "react";
import { features } from "../data/features.json";

function Features() {
  const featuresButtons = [
    "Simple Bookmarking",
    "Speedy Searching",
    "Easy Sharing",
  ];

  const [featureNum, setFeatureNum] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center max-w-[73.375rem] mx-auto mt-[6.875rem] px-[1.25rem] gap-[2.875rem] md:px-8">
      <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
        <h2 className="text-[1.5rem] md:text-[2rem] font-medium">Features</h2>
        <p className="text-center md:text-[1.125rem] text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-0">
          {featuresButtons.map((btn, i) => (
            <button
              key={i}
              onClick={() => setFeatureNum(i + 1)}
              className={`border-tab relative min-w-[15.2325rem] border-b-2 px-6 py-4 tracking-[0.04em] text-very-dark-blue/50 transition duration-300 hover:text-soft-red md:px-[2.6875rem] md:py-[1.625rem] 
              ${(featureNum === i + 1) ? "border-selected" : ""}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center md:justify-between lg:items-start md:flex-row mx-auto max-w-[73.375rem]   gap-16 py-[4.3125rem] banner-2">
          <div className="flex-[1.15] width-fill-available max-w-[33.625rem] md:max-w-full">
            <img
              src={features[featureNum - 1].imageUrl}
              alt="feature-image"
              aria-hidden="true"
              width={538}
              height={347}
              className=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-[1.5625rem] md:items-start lg:pl-[4.5rem] lg:pt-[3.25rem] text-center md:text-left">
            <h3 className="text-[1.5rem] md:text-[2rem] font-medium ">{features[featureNum - 1].title}</h3>
            <p className="text-[1.125rem] text-grayish-blue">{features[featureNum - 1].description}</p>
            <button className="text-[.875rem] rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.655rem] px-[1.521rem] font-medium text-white transition duration-300 hover:bg-white hover:text-soft-blue mx-auto md:mx-0">{features[featureNum - 1].buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

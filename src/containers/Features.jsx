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
    <div className="flex flex-col items-center justify-center max-w-[73.375rem] mx-auto mt-[6.875rem]  md:gap-16 md:px-8">
      <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
        <h2 className="text-[2rem] font-bold">Features</h2>
        <p className="text-center text-[1.125rem] text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full">
          {featuresButtons.map((btn, i) => (
            <button
              key={i}
              onClick={() => setFeatureNum(i + 1)}
              // className=" px-[2.6875rem] py-[1.625rem] text-very-dark-blue/50"
              className={`border-tab relative min-w-[15.2325rem] border-b-2 px-6 py-4 tracking-[0.04em] text-very-dark-blue/50 transition duration-300 hover:text-soft-red md:px-[2.6875rem] md:py-[1.625rem] 
              ${(featureNum === i + 1) ? "border-selected" : ""}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center md:justify-between md:flex-row mx-auto mt-[3.5625rem] max-w-[73.375rem] md:gap-16 md:px-8">
          <div>
            <img
              src={features[featureNum - 1].imageUrl}
              alt="feature-image"
              aria-hidden="true"
              width={657}
              height={466}
              className="mx-auto rwd:max-w-[125%]"
            />
          </div>
          <div>
            <h3>{features[featureNum - 1].title}</h3>
            <p>{features[featureNum - 1].description}</p>
            <button>{features[featureNum - 1].buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

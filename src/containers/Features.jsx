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
    <div className="">
      <div>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <div>
          {featuresButtons.map((btn, i) => (
            <button key={i} onClick={() => setFeatureNum(i + 1)}>{btn}</button>
          ))}
        </div>
        <div>
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

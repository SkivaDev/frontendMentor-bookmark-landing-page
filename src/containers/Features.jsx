import React from "react";

function Features() {

  const featuresButtons = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

  return (
    <div className="">
      <div>
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div>
          <div>
            <img
              src={hero}
              alt="hero-image"
              aria-hidden="true"
              width={657}
              height={466}
              className="mx-auto rwd:max-w-[125%]"
            />
          </div>
          <div>
            <h3></h3>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

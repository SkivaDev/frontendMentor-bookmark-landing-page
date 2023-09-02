import React from "react";

function ExtensionCard({
  title,
  description,
  imageUrl,
  buttonText,
  width,
  height,
  index,
}) {
  // const xd = `mt-[${((index * 43) / 16).toString()}rem]`;

  // const wtf = (index * 43).toString();

  // console.log(xd);
  // console.log(typeof xd);

  return (
    <div className={`bg-dots flex flex-col items-center w-full p-[1.5rem] pt-[2rem] gap-[1.875rem] border rounded-2xl max-w-[17.75rem] extension-card-${(index+1)}`}>
      <div className="w-[6.25rem]">
        <img
          src={imageUrl}
          alt=""
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      <div className="text-center mt-[0.1875rem] mb-[1.875rem]">
        <h3 className="text-[1.125rem] font-medium tracking-[0.09em] text-very-dark-blue">{title}</h3>
        <p className="text-[1.125rem] mt-[0.3125rem] text-normal tracking-[-0.07em] text-very-dark-blue/50">{description}</p>
      </div>
      <button className="w-full rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.6558rem] px-[1.437rem] text-center text-[0.875rem] text-white transition  duration-300 hover:bg-white hover:text-soft-blue">{buttonText}</button>
    </div>
  );
}

export default ExtensionCard;

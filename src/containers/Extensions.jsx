import React from "react";
import Extention from "../components/Extention";

function Extensions() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[73.375rem] mx-auto mt-[6.875rem] px-[1.25rem] gap-[2.875rem] md:px-8">
      <ContainerText />
      <div className="flex flex-col items-center justify-center w-full md:justify-between lg:items-start md:flex-row gap-16 py-[4.3125rem]">
        <Extention />
      </div>
    </div>
  );
}

function ContainerText() {
  return (
    <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-medium">
        Download the extension
      </h2>
      <p className="text-center md:text-[1.125rem] text-grayish-blue">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </div>
  );
}

export default Extensions;

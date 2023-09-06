import React from "react";

function FormSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-[2.25rem] w-full bg-soft-blue pt-[4.625rem] pb-[4.5rem] px-[2rem]">
      <FormText />
      <Form />
    </section>
  );
}

function FormText() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.5rem]">
      <p className="text-xs text-white">35,000+ already joined</p>
      <h2 className="text-[2rem] text-white font-medium max-w-[22ch] text-center">
        Stay up-to-date with what we’re doing
      </h2>
    </div>
  );
}

function Form() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[27.625rem] w-full">
      <form action="" className="w-full">
        <div className="grid items-center gap-8 md:grid-cols-[2.4fr_1fr] md:flex-row md:justify-between md:gap-4">
          <div className="w-full relative">
            <input type="email" className=" h-[3rem] w-full relative z-[4] rounded-lg border-2 border-very-dark-blue/10 px-4 py-3 text-very-dark-blue focus:border-very-dark-blue/50 bg-white" placeholder="Enter your email address" name="mail"/>
            <label className="sr-only">Input your email</label>
          </div>
          <button
            type="submit"
            className="flex-1 rounded-lg border-[0.188rem] border-soft-red bg-soft-red py-[0.6558rem] text-white transition duration-300 hover:bg-white hover:text-soft-red"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSection;

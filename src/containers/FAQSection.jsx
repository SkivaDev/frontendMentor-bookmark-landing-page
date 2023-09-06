import React from "react";
import FAQCard from "../components/FAQCard";
import { faqs } from '../data/faqs.json';

function FAQSection() {
  return (
    <section className="flex flex-col items-center justify-center mt-[6.875rem] mb-[9.3125rem] px-[1.25rem] gap-[2.875rem] md:px-8">

      <ContainerText />
      <FAQs/>
      <FAQsButton/>

    </section>
  );
}

function ContainerText() {
  return (
    <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
      <h2 className="text-center text-[1.5rem] md:text-[2rem] font-medium">
        Frequently Asked Questions
      </h2>
      <p className="text-center md:text-[1.125rem] text-grayish-blue">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
    </div>
  );
}

function FAQs() {

  let isLastChild = false;

  return (
    <div className="flex flex-col max-w-[32.4375rem] w-full">
      {faqs.map((faq, i) => {

        (i === faqs.length - 1) ? isLastChild = true : isLastChild = false;

        return <FAQCard key={i} {...faq} isLastChild={isLastChild}/>
        
      })}
    </div>
  )
}


function FAQsButton () {
  return (
    <button type="button" className="p-[.9375rem] border-soft-blue bg-soft-blue text-white rounded-md border-[0.188rem]  py-[0.6558rem] px-[1.5201rem] text-[0.875rem] transition duration-300 hover:bg-white hover:text-soft-blue">
      More info
    </button>
  )
}
export default FAQSection;

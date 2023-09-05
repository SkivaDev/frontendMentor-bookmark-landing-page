import React from "react";
import FAQCard from "../components/FAQCard";

function FAQSection() {
  return (
    <section>
      <ContainerText />

    </section>
  );
}

function ContainerText() {
  return (
    <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-medium">
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
  return (
    <div>
      <FAQCard/>
    </div>
  )
}
export default FAQSection;

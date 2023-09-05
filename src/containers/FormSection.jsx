import React from "react";

function FormSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-[2.875rem] px-[1.25rem] md:px-8">
      <FormText />
      <Form/>
    </section>
  );
}

function FormText() {
  return (
    <>
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>
    </>
  );
}

function Form() {
  return (
    <div>
      <form action="">
        <div>
          <div>
            <input type="text" />
            <label className="sr-only">Input your email</label>
          </div>
          <button type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
}

export default FormSection;

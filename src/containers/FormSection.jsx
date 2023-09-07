import React from "react";
import { useForm, Controller } from "react-hook-form";
import error_icon from "../assets/images/icon-error.svg";

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
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '', // Aquí establece un valor inicial vacío para el campo de correo electrónico
    },
  });

  const onSubmit = (data) => {};



  return (
    <div className="flex flex-col items-center mx-auto max-w-[27.625rem] w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid items-center gap-8 md:grid-cols-[2.4fr_1fr] md:flex-row md:justify-between md:gap-4">
          <div className="w-full relative">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "The email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Whoops, make sure it's an valid email",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  className={`h-[3rem] w-full relative z-[4] rounded-lg border-2 border-very-dark-blue/10 px-4 py-3 text-very-dark-blue focus:border-very-dark-blue/50 bg-white ${
                    errors.email
                      ? "!border-red-500 focus-visible:!outline-red-500"
                      : ""
                  }`}
                  placeholder="Enter your email address"
                  name="mail"
                />
              )}
            />
            <label className="sr-only">Input your email</label>
            {errors.email && (
              <>
                <img
                  src={error_icon}
                  alt="error-icon"
                  className="absolute right-3 top-1/2 z-[4] -translate-y-1/2 transform"
                />
                <div className="w-full">
                  <span className="z-1 absolute -bottom-[1.75rem] left-0 w-full rounded-md bg-red-500 px-2 pb-1 pt-3 text-sm text-white transition-all duration-300 ease-in-out italic">{errors.email.message}</span>
                </div>
              </>
            )}
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

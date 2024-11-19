import React from "react";

const Form = () => {
  return (
    <>
      <div className="bg-white shadow-custom p-6 md:p-10 rounded-lg flex-col flex gap-4 lg:gap-5">
        <input
          className="border outline-none   text-sm focus:border-accent  font-semibold p-4 rounded-md text-darkBlue placeholder-form "
          type="text"
          placeholder="First Name"
        />
        <input
          className="border outline-none text-sm focus:border-accent  font-semibold p-4 rounded-md text-darkBlue placeholder-form"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="border outline-none text-sm focus:border-accent  font-semibold p-4 rounded-md text-darkBlue placeholder-form"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="border outline-none text-sm focus:border-accent  font-semibold p-4 rounded-md text-darkBlue placeholder-form"
          type="text"
          placeholder="Password"
        />
        <button
          className="uppercase pt-4 pb-[12px] bg-secondary hover:bg-secondaryLight text-white shadow-customTwo rounded-md font-medium"
          type="submit"
        >
          claim your free trial
        </button>
        <p className="text-xs leading-6 text-grayishBlue text-center px-6">
          By clicking the button, you agreeing to our{" "}
          <span className="text-primary font-bold">Terms and Services</span>
        </p>
      </div>
    </>
  );
};

export default Form;

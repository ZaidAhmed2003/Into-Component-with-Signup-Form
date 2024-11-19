import { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear specific field error
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name cannot be empty";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true); // Open modal with form data
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-custom p-6 md:p-10 rounded-lg flex-col flex gap-4 lg:gap-5"
      >
        <div className="flex relative flex-col gap-2">
          <input
            className={`border text-sm font-semibold p-4 rounded-md placeholder-form outline-none text-darkBlue ${
              errors.firstName
                ? "border-primary border-2"
                : "focus:border-accent"
            }`}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <>
              <p className="text-xs text-end text-primary font-medium italic">
                {errors.firstName}
              </p>
              <img
                src="/images/icon-error.svg"
                alt="Error Icon"
                className="absolute right-4 top-7 transform -translate-y-1/2 w-5 h-5"
              />
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 relative">
          <input
            className={`border text-sm font-semibold p-4 rounded-md placeholder-form outline-none text-darkBlue ${
              errors.lastName
                ? "border-primary border-2 text-primary"
                : "focus:border-accent"
            }`}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <>
              <p className="text-xs text-end text-primary font-medium italic">
                {errors.lastName}
              </p>
              <img
                src="/images/icon-error.svg"
                alt="Error Icon"
                className="absolute right-4 top-7 transform -translate-y-1/2 w-5 h-5"
              />
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <input
            className={`border text-sm font-semibold p-4 rounded-md placeholder-form outline-none text-darkBlue ${
              errors.email ? "border-primary border-2" : "focus:border-accent"
            }`}
            type="text"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <>
              <p className="text-xs text-end text-primary font-medium italic">
                {errors.email}
              </p>
              <img
                src="/images/icon-error.svg"
                alt="Error Icon"
                className="absolute right-4 top-7 transform -translate-y-1/2 w-5 h-5"
              />
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <input
            className={`border text-sm font-semibold p-4 rounded-md placeholder-form outline-none text-darkBlue ${
              errors.password
                ? "border-primary border-2"
                : "focus:border-accent"
            }`}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <>
              <p className="text-xs text-end text-primary font-medium italic">
                {errors.password}
              </p>
              <img
                src="/images/icon-error.svg"
                alt="Error Icon"
                className="absolute right-4 top-7 transform -translate-y-1/2 w-5 h-5"
              />
            </>
          )}
        </div>
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
      </form>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
      />
    </>
  );
};

export default Form;

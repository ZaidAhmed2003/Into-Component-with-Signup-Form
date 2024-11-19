import React from "react";

const Modal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-80 md:w-80">
        <h2 className="text-lg font-bold text-darkBlue mb-4">
          Form Validation Successful
        </h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">First Name:</span>{" "}
            {formData.firstName}
          </li>
          <li>
            <span className="font-semibold">Last Name:</span>{" "}
            {formData.lastName}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {formData.email}
          </li>
          <li>
            <span className="font-semibold">Password:</span> {formData.password}
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primaryLight"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

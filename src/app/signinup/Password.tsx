import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const courseStatus = [
  {
    icon: FaEye,
    isActive: true,
  },
  {
    icon: FaEyeSlash,
    isActive: false,
  },
];

const Password = () => {
  const [passwordVisible, setPasswordVisible];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <input
        type={passwordVisible ? "text" : "password"}
        className="rounded border p-2"
        placeholder="Enter your password"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-2"
      >
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default Password;

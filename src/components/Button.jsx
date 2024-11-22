import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 text-white font-medium bg-primary hover:opacity-70 active:opacity-60 rounded-lg duration-150"
    >
      {text}
    </button>
  );
};

export default Button;

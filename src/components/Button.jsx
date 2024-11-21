import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary px-3 py-1 rounded hover:opacity-70 active:opacity-50"
    >
      {text}
    </button>
  );
};

export default Button;

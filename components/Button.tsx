import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
  const buttonColor = color ? color : "bg-red-700";

  return (
    <button
      className={`${buttonColor} text-white  px-4 py-3 rounded-lg mt-8 hover:bg-red-500 w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import "./button.css";

const Button = ({
  children,
  onClick,
  ...others
}: {
  children: any;
  onClick?: any;
  others?: any;
}) => {
  return (
    <button {...others} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export default Button;

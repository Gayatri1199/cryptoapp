import React from "react";

const SelectButton = ({ children, onClick, selected }) => {
  return (
    <span onClick={onClick} className={`${selected ? "selected" : ""}`}>
      {children}
    </span>
  );
};

export default SelectButton;

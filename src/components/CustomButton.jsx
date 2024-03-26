import React from "react";

export const CustomButton = ({ cls, label, getButtonValue }) => {
  return (
    <div
      className={cls}
      onClick={() => {
        getButtonValue(label);
      }}
    >
      {label}
    </div>
  );
};

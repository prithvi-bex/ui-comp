import React from "react";

export interface ButtonProps {
  label: string;
}

const BlueRoundButton = ({label} :ButtonProps) => {
  return (
    <div className="bg-blue font-vietnampro rounded-full px-9 py-2 text-sm font-medium text-white ">
      <p>{label}</p>
    </div>
  );
};



export default BlueRoundButton;

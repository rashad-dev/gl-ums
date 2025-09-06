import React from "react";

export const Input = ({ type, label, labelClass, inputClass,error, ...props }) => {
 
    
    
  return (
    <div className="mb-4">
      <label htmlFor="" className={`block  font-medium mb-2 ${labelClass}`}>
        {label}
      </label>
      <input
        className={`w-full  px-3 py-2 rounded-2xl border border-baseGray ${inputClass}`}
        type={type}
        {...props}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

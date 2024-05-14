import React from "react";

const FormInput = ({ labelText, inputType, inputPlaceholder, required , value, onChange, name}) => {
  return (
    <div className="my-5">
      <div>
        <label htmlFor="" className="font-bold text-[12px]">{labelText}</label>
        {
            required ? <sup className="text-red-500 text-[12px]">*</sup> : ""
         }
      </div>
      <div className="my-1">
        <input type={inputType} placeholder={inputPlaceholder} className="border rounded-md px-3 py-1 w-[80%]" required={required} name={name} value={value} onChange={onChange}/>
      </div>
    </div>
  );
};

export default FormInput;

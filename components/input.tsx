
import React from "react";

interface InputProps{
  id:string;
  onChange:any;
  value:string;
  lable:string;
  type?:string
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  lable,
  type
}) => {
  return (
    <div className="relative">
    <input id={id} onChange={onChange} type={type} value={value} className="block w-full px-6 pt-5 pb-5 text-white rounded-md appearance-none text-md bg-neutral-700 focus:outline-none focus:right-0 peer"  placeholder="" />
    <label className="absolute z-10 duration-150 scale-75 text-zinc-400 text-md transform-translate-y-3 top-4 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"  htmlFor={id} >
        {lable}
    </label >
    </div>
  );
};

export default Input;

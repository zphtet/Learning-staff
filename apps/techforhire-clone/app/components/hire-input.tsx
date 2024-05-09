import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

const HireInput: React.FC<InputProps> = ({ label, ...other }) => {
  return (
    <div className="group relative z-0 mb-5 w-full font-sans">
      <input
        className=" peer block w-full appearance-none border-0 border-b-[1px] border-black bg-transparent px-0 py-1.5 text-base text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white "
        placeholder=" "
        {...other}
      />
      <label className="peer-focus:font-base absolute top-3 -z-10 origin-[0] -translate-y-6  transform text-[12px] text-gray-500 duration-300 peer-placeholder-shown:-translate-y-2  peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-100  rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 ">
        {label}
      </label>
    </div>
  );
};

export default HireInput;

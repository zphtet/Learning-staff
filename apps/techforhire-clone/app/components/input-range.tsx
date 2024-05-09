"use client";

import { useState } from "react";

const RangeSector = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="space-y-4">
      <div className="text-theme flex items-center justify-between text-[12px] font-bold uppercase">
        <p>Preferred team size</p>
        <p>1-{value}</p>
      </div>
      <input
        type="range"
        min={1}
        max={50}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        step={1}
        className="accent-theme focus-within:accent-theme hover:accent-theme w-full cursor-pointer border-none  bg-slate-100 outline-none"
      />
    </div>
  );
};

export default RangeSector;

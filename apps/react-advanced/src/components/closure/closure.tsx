import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const HeavyComponent: React.FC<{
  onClick: () => void;
  label: string;
}> = ({ label, onClick }) => {
  console.count("rendering heavy component ...");
  return (
    <div>
      <p>Heavy component</p>
      <p>label : {label}</p>
      <button onClick={onClick} className="border border-red-500 px-5 py-2">
        Click Me
      </button>
    </div>
  );
};
// const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
//   return before.label === after.label;
// });

const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.label === after.label;
});
const ClosureReact = () => {
  const ref = useRef(() => {});
  const [value, setValue] = useState("");

  useEffect(() => {
    ref.current = () => {
      console.log("onclick invoking ...");
      console.log(value);
    };
  }, [value]);

  const onClick = useCallback(() => {
    ref.current();
  }, []);

  return (
    <div>
      Hello Closure
      <input
        type="text"
        value={value}
        className="border border-green-300 px-5 py-2"
        onChange={(e) => setValue(e.target.value)}
      />
      <HeavyComponentMemo label="this is label" onClick={onClick} />
    </div>
  );
};

export default ClosureReact;

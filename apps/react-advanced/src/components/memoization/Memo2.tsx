import React, { PropsWithChildren, useMemo, useState } from "react";

// React check React.isSame(Before , After)
const ChildOne: React.FC<{ count: { value: number } }> = ({ count }) => {
  console.count("rendering childone ");
  return <div>Child ONe {count.value}</div>;
};
const ChildOneMemo = React.memo(ChildOne);

const ChildTwo: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("rendering children two ");
  return (
    <div>
      <p>Child Two</p>
      {children}
    </div>
  );
};
const ChildTwoMemo = React.memo(ChildTwo);
const Memo2 = () => {
  const [count, setCount] = useState(0);
  const countProp = useMemo(() => {
    return {
      value: 1,
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <ChildOneMemo count={countProp} />
      <ChildTwoMemo>
        {useMemo(() => {
          return <div>Children prop passed to ChildTwo</div>;
        }, [])}
      </ChildTwoMemo>
    </div>
  );
};

export default Memo2;

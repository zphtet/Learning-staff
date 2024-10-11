import { useCallback, useEffect, useState } from "react";

const Memoization = () => {
  const [count, setCount] = useState(0);
  const submit = useCallback(() => {
    console.log("submitting...");
  }, []);
  useEffect(() => {
    submit();
  }, [submit]);
  return (
    <div>
      <p>Hello this is memoization</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count {count}
      </button>
    </div>
  );
};

export default Memoization;

import { ReactNode, useState } from "react";

const Button: React.FC<{ icon: ReactNode }> = ({ icon }) => {
  const [count, setCount] = useState(0);
  console.count("button rendering");
  return (
    <button onClick={() => setCount(count + 1)} className="block border-none">
      Click Me #{count} {icon}
    </button>
  );
};

const IconComponent = () => {
  console.count("rendering icon");
  return <p>Icon component</p>;
};

const ChildrenAsProps = () => {
  return (
    <div>
      <Button icon={<IconComponent />} />
    </div>
  );
};

export default ChildrenAsProps;

import { useContext } from "react";
import { ContextApi } from "./LayoutProvider2";

const MainPart: React.FC<{ className?: string }> = ({ className }) => {
  const { open } = useContext(ContextApi);
  console.log("main part rendring");
  return (
    <div className={`${className}`}>
      <button onClick={open} className="bg-white px-5 py-2 text-black">
        open
      </button>
    </div>
  );
};
export default MainPart;

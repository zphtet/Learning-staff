import { useContext } from "react";
import { ContextApi, ContextData } from "./LayoutProvider2";

const SideBar: React.FC<{ className?: string }> = ({ className }) => {
  const { isExpand } = useContext(ContextData);
  const { toggle } = useContext(ContextApi);
  return (
    <div className={`${className} ${isExpand && "w-[100px]"}`}>
      <button
        onClick={toggle}
        className="cursor-pointer rounded-md bg-orange-200 px-5 py-2"
      >
        {isExpand ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};
export default SideBar;

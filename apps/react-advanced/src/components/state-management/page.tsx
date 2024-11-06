import LayoutProvider from "./LayoutProvider2";
import MainPart from "./main";
import SideBar from "./sidebar";

const MainPage = () => {
  return (
    <LayoutProvider>
      <div className="flex h-[500px] px-5 ">
        <SideBar className="h-full w-[200px] bg-teal-300" />
        <MainPart className="h-full flex-1  bg-red-400" />
      </div>
    </LayoutProvider>
  );
};

export default MainPage;

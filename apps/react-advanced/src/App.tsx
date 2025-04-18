import ChildrenAsProps from "./components/childrenasprops";
import ClosureReact from "./components/closure/closure";
import ImperativeHandleForm from "./components/imperativehandle/imperativehandle";
import Memo2 from "./components/memoization/Memo2";
import Memoization from "./components/memoization/Memoization";
import FormRef from "./components/ref/ref";
import RenderProps from "./components/renderprops/renderporps";
import MainPage from "./components/state-management/page";

function App() {
  return (
    <div>
      <p>Hello World</p>
      <ChildrenAsProps />
      <RenderProps />
      <Memoization />
      <Memo2 />
      <FormRef />
      <ImperativeHandleForm />
      <ClosureReact />
      <MainPage />
    </div>
  );
}

export default App;

import ChildrenAsProps from "./components/childrenasprops";
import Memo2 from "./components/memoization/Memo2";
import Memoization from "./components/memoization/Memoization";
import RenderProps from "./components/renderprops/renderporps";

function App() {
  return (
    <div>
      <p>Hello World</p>
      <ChildrenAsProps />
      <RenderProps />
      <Memoization />
      <Memo2 />
    </div>
  );
}

export default App;

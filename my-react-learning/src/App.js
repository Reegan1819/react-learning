import ClickCounter from "./Components/HOC/ClickCounter";
import DataFetch from "./Components/HOC/DataFetch";
import HoverCounter from "./Components/HOC/HoverCounter";
import WithCounter from "./Components/HOC/WithCounter";
import MyParentComponent from "./Components/Hooks/MyParentComponents";
import ParentComponent from "./Components/Hooks/UseCallbackHooks";
import UseEffectHooks from "./Components/Hooks/UseEffectHooks";
import UseStateHook from "./Components/Hooks/UseStatesHook";
import UseMemoComp from "./Components/UseMemo/UseMemoComp";

function App() {

  const ClickCounterWithCounter = WithCounter(ClickCounter);
  const HoverCounterWithCounter = WithCounter(HoverCounter);
  return (
    <div className="App">
      <h2>Home</h2>
      {/* <UseStateHook />
     <UseEffectHooks />
     <ParentComponent /> */}
      {/* <MyParentComponent /> */}
      {/* <ClickCounter />
     <HoverCounter  /> */}

      {/* <ClickCounterWithCounter />
      <HoverCounterWithCounter /> */}
      {/* <DataFetch /> */}
      <UseMemoComp />
    </div>
  );
}

export default App;

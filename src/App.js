import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCountertwo from "./components/HookCountertwo";
import HookCounterthree from "./components/HookCounterthree";
import HookCounterfour from "./components/HookCounterfour";
import ClassCounterone from "./components/ClassCounterone";
import HookEffectone from "./components/HookEffectone";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCount from "./components/IntervalHookCount";
import DataFetching from "./components/DataFetching";
import ComponentA from "./components/ComponentA";
import React from "react";
import ReducerOne from "./components/ReducerOne";
import ReducerTwo from "./components/ReducerTwo";
import ReducerThree from "./components/ReducerThree";
import DataFetchingone from "./components/DataFetchingone";
import DataFetchingTwo from "./components/DataFetchingTwo";

export const UserContext = React.createContext();
export const UserContext1 = React.createContext(); //here we are create a usercontext variable and export it
function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCountertwo/> */}
      {/* <HookCounterthree/> */}
      {/* <HookCounterfour/> */}
      {/* <ClassCounterone/> */}
      {/* <HookEffectone/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/>   */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCount/> */}
      {/* <DataFetching/> */}

      {/* <UserContext.Provider value="Himanshu">
        <UserContext1.Provider value={"Software Engineer"}>
          <ComponentA />
        </UserContext1.Provider>
      </UserContext.Provider> */}

      {/* <ReducerOne/> */}
      {/* <ReducerTwo/> */}
      {/* <ReducerThree/> */}
      {/* <DataFetchingone/> */}
      <DataFetchingTwo/>

    </div>
  );
}

export default App;

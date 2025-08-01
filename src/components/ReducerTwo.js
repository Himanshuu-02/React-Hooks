//here we use the {useReducer }method of hook with simple perfroming switch action of three button .
//Practice question two of useReduce

import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state ,secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {...state, secondCounter: state. secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Count-{count.firstCounter}</div>
      
      <div className="counter1"><button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button></div>
      <div>Second Count-{count.secondCounter}</div>
      <div className="counter2">
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement counter2
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
export default ReducerTwo;

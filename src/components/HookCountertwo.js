import React, { useState } from "react";

function HookCountertwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count+5)
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={IncrementFive}>Increment 5</button>
    </div>
  );
}
export default HookCountertwo;

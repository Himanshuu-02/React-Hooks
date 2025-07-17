//Here we are discussing about the context with help of fuctional component by hook react method:useContext

import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, UserContext1 } from "../App";

function ComponentB() {
  const user = useContext(UserContext);
  const id = useContext(UserContext1);

  return (
    <div>
      <h1>Hey there is {user}</h1>
      <h2>That is my qualification: {id}</h2>
    </div>
  );
}
export default ComponentB;

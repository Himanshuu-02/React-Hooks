//IN component B there is the very simplest method of this code by using the useContext

import React from "react";
import { UserContext, UserContext1 } from "../App";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
            return(
          <UserContext1.Consumer>
            {
            (id) => {
              return (
                <div>
                 <h1> Hey my name is {user} </h1>
                  <h2>I am a {id}</h2> 
                </div>
              );
            }
            }
          </UserContext1.Consumer>
            )
        }}
      </UserContext.Consumer>
    </div>
  );
}
export default ComponentC;

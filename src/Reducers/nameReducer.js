// import React from "react";
// const istate = {
//   name: "hayat",
//   lastname:'safi',
//   email:'hayatkhan1196@gmail.com',

// };
function nameReducer(currentState = "", action) {
  console.log(action, "========================");
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  }
  return currentState;
}

export default nameReducer;

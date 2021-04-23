// import React from "react";
const istate = {
  name: "hayat",
  lastname:'safi',
  email:'hayatkhan1196@gmail.com',
  
};
function Reducer(currentState = istate, action) {
  console.log(action,'========================');
  if(action.type==='CHANGE_NAME'){
    return{
      ...currentState,
      name:action.payload
    }
  }
  return currentState;
}

export default Reducer;

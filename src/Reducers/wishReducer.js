function wishReducer(currentState = [], action) {
  console.log(action, "========================");
  if (action.type === "ADD_WISH") {
    return [...currentState, action.payload];
  }
  return currentState;
}

export default wishReducer;

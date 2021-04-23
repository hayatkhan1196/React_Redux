export  const anotherName=(name)=>{
    return {
        type:'CHANGE_NAME',
        payload:name,
    }
}

export const addWish = () => {
  return {
    type: "ADD_WISH",
    payload: "code",
  };
};

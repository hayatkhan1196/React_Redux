// export  const anotherName=(name)=>{
//     return {
//         type:'CHANGE_NAME',
//         payload:name,
//     }
// }
export const anotherName = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
        .then((response) => {
        dispatch({ type:"CHANGE_NAME",payload: response[0].name });
      });
  };
};

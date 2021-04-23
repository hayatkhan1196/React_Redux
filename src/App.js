import "./App.css";
import { connect } from "react-redux";
import { anotherName, addWish } from "./Actions/action";

function App(props) {
  console.log(props);
  const myWish = props.mywish.map((items) => {
    return <h2>{items}</h2>;
  });
  return (
    <div className="App">
      <ul>
        <h1>myname is:{props.myname}</h1>
        {myWish}
      </ul>
      <button
        onClick={() => {
          props.changeName(
            "hayat"
            //   (dispatch) => {
            //   fetch("https://jsonplaceholder.typicode.com/users/")
            //     .then((res) => res.json())
            //       .then((response) => {
            //       dispatch({ type:"CHANGE_NAME",payload:response[0].name});
            //     });
            // }
          );
        }}
      >
        update{" "}
      </button>
      <button
        onClick={() => {
          props.addWish();
        }}
      >
        add wish
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(
        anotherName(name)
        // { type: "CHANGE_NAME", payload: name }
      );
    },
    addWish: () => {
      dispatch(addWish());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(App);

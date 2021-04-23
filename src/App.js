
import "./App.css";
import { connect } from "react-redux";
import {anotherName} from './Actions/action'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <ul >
      <h1>myname is:{props.myname}</h1>
      
      </ul>
      <button onClick={()=>{props.changeName()}}>update </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname:state.name,
    
  };
};
 const mapDispatchToprops=(dispatch)=>{
   return {
    changeName:()=>{dispatch (anotherName())}
   }
 }

export default connect(mapStateToProps,mapDispatchToprops)(App);

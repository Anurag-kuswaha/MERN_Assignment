import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
export default class Conditon extends React.Component {
constructor(){
   super();
   state={
       var:"value is true"
   }
}
  changeButton =() =>{
        this.setState({var: "value is false "})
  }
 render(){
 return(
   <>
    <button onClick={this.changeButton}>click to change </button>




   </>


 );


}
}


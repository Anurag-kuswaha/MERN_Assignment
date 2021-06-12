import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Child extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "Anurag",
      color: "purple",
      post: "ASE",
      temp: "coming from child temp state",
    };
  }
  change_name = (e) => {
    let val = e.target.value;
    this.setState({ name: val }); /* async call */
  };
  change_color = (e) => {
    let val = e.target.value;
    this.setState({ color: val }); /* async call */
  };
  render() {
    return (
      <div>
        <h1> my name is {this.state.name}</h1>
        <h1> my fav color is {this.state.color}</h1>
        <h1> my post is {this.state.post}</h1>
        {/* changing the name of child atrribute */}
        enter the Name:
        <input type="text" onChange={this.change_name} value={this.name} />
        {/* changing the color of child atrribute */}
        <div>
          enter your fav color :
          <input type="text" onChange={this.change_color} value={this.color} />
        </div>
        <div>
          enter the parent attribute :
          <input
            type="text"
            onChange={(e)=> this.props.changeParent(e.target.value)}
            value={this.props.parentVar}
          />
        </div>
        <h1>{this.state.temp} </h1>
      </div>
    );
  }
}
export default Child;

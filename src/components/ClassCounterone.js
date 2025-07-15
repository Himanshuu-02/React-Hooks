//Here we can do work in class components and then we do same work as frunctional component by the hook method with easier way in every class file we do different works then do same works with the help of hooks
import React, { Component } from "react";

class ClassCounterone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, preState) {
    
    if(preState.count !== this.state.count){
      console.log('Updating document title')

    }
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterone;

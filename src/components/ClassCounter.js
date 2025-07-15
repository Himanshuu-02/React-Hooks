//Here we can do work in class components and then we do same work as frunctional component by the hook method with easier way in every class file we do different works then do same works with the help of hooks
import React, { Component } from 'react'

 class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div><button onClick={this.incrementcount}>Count:{this.state.count} times</button></div>
    )
  }
}

export default ClassCounter
//Here we can do work in class components and then we do same work as functional component by the hook method with easier way in every class file we do different works then we do same works with the help of hooks method in react

import React, { Component } from 'react'

 class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y:0
      }
    }
    logMousePosition=(e)=>{
        this.setState({x:e.clientX, y:e.clientY})
        // console.log('mouse moves')
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
        // console.log('mouse updates')
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }
  render() {
    return (
      <div><h1>
        X.cordinates-{this.state.x} </h1>
        <h1>Y.cordinates - {this.state.y}</h1></div>
    )
  }
}

export default ClassMouse
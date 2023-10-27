import React, { Component } from 'react'

export default class Countt1 extends Component {
    
    constructor(){
        super()
        this.state ={count:0,color:'yellow'}
    }
    change(){
        this.setState({count:this.state.count+1})
    }
    color(){
        this.setState({color:"pink"})
    }

  render() {
    return (
      <div>
        <h1 style={{color:`${this.state.color}`}}>{this.state.count}</h1>
        <button onClick={()=>this.change()}>+</button>
        <button onClick={()=>this.color()}>change count color</button>
      </div>
    )
  }
}

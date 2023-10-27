import React, { Component } from 'react'

export default class Count extends Component {

  

    constructor(){
        super()
        this.state = {count:0,color:'blue'}
   
    }

    change(){
        this.setState({count:this.state.count+1})
       
    }
    color(){
        this.setState({color:"green"})
    }

  render() {
    return (
      <div>
        <h1 style={{color:`${this.state.color}`}}> {this.state.count}</h1>
        <button onClick={()=>this.change()}> + clic</button>
        <button onClick={()=>this.color()}>  color</button>
       
        
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ClassCompo extends Component {
  render() {
    return (
      <div>

        <h1> my name is {this.props.name} and age is {this.props.age}</h1>
        
      </div>
    )
  }
}
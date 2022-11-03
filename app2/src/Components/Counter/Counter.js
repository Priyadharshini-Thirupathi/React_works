import React from 'react';
import './Counter.css'
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.increment =this.increment.bind(this);
    this.decrement =this.decrement.bind(this);
    this.reset =this.reset.bind(this);
  }
  
  increment(){
    this.setState(state => ({
      count: state.count+1
    }));
  }
  decrement(){
    this.setState(state =>({
      count: state.count-1
    }));
  }
  reset(){
    this.setState({ 
      count: 0
    });
  }
  render(){
    return (
      <div>
        <h1> React Counter </h1>
        <h1> {this.state.count}</h1>
        <button className = 'inc' onClick = {this.increment}> + </button>
        <button className = 'dec' onClick = {this.decrement} disabled ={this.state.count < 1}> - </button>
        <br />
        <button className = 'res' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
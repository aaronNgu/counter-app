import React, {Component} from 'react';

class Counter extends Component{



  constructor(props){
    super(props);
  }

  render(){
    const {counter, onIncrement, onDelete} = this.props;
    return (
      <div>
        <span className = {this.getBadgeClasses()} >{this.formatCount()}</span>
        <button onClick = {() => onIncrement(counter)} className = "btn btn-secondary btn-sm">Increment</button>
        <button onClick = {()=>onDelete(counter.id )} className = "btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount(){
    const {value} = this.props.counter;
    return value === 0 ? 'zero' : value;
  }
}

export default Counter;

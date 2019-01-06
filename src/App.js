import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state ={
    counters: [
      {id: 1 ,value: 0},
      {id: 2 ,value: 0},
      {id: 3 ,value: 0},
      {id: 4 ,value: 0}
    ]
  }

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    console.log('App - Constructor');
  }

    handleIncrement(counter){
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
    }

    handleReset(){
      const counters = this.state.counters.map(
        c => {c.value = 0; return c});
      this.setState({counters}) ;
    }

    handleDelete(counterID){
      const counters = this.state.counters.filter(c => c.id!== counterID);
      this.setState({counters });
    }

    handleAdd(){
      const counters = [...this.state.counters];
      const newObj = {id : counters.length + 1 , value: 0};
      counters.push(newObj);
      this.setState({counters});
    }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
          <main className = "container">
            <Counters
              onReset = {this.handleReset}
              onIncrement = {this.handleIncrement}
              onDelete = {this.handleDelete}
              counters = {this.state.counters}
              onAdd = {this.handleAdd}/>
            </main>
       </React.Fragment>
    );
  }
}

export default App;

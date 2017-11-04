import React, { Component } from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      stopwatch: 0,
      newStopwatch: ''
    };
  }

  changeDeadline(){
    this.setState({ deadline: this.state.newDeadline });
  }

  changeStopwatch(){
    this.setState({ stopwatch: this.state.newStopwatch });
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl className="Deadline-input" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
        <br />
        <div className="App-title">Stopwatch</div>
        <Stopwatch stopwatch={this.state.stopwatch} />
        <Form inline>
          <FormControl className="Stopwatch-input" placeholder="time in minutes" onChange={event => this.setState({newStopwatch: event.target.value})} />
          <Button onClick={() => this.changeStopwatch()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: -1,
      start: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
    setInterval(() => this.getTimeFrom(this.props.stopwatch), 1000);
  }

  leading0(num){
    return (num < 10) ? '0' + num : num;
  }

  getTimeFrom(stopwatch){
    let timer;
    if (stopwatch !== this.state.start){
      let start = stopwatch;
      timer = stopwatch * 60;
      this.setState({start});
    }else{
      timer = this.state.timer;
    }
    if (timer >= 0){
      const minutes = parseInt(timer / 60, 10);
      const seconds = parseInt(timer % 60, 10);
      timer -= 1;
      this.setState({timer, minutes, seconds});
      if(timer < 0){ alert('DING DING DING!'); }
    }
  }

  render(){
    return (
      <div>
        <div className="Stopwatch">{this.leading0(this.state.minutes)}:{this.leading0(this.state.seconds)}</div>
      </div>
    )
  }
}

export default Stopwatch;
import React from 'react';

interface IClockState {

  counter: number;
}

class Clock extends React.Component<{}, IClockState>{

  constructor(props){
    super(props)
    this.state ={
      counter: 0,
    }
    }

public componentDidMount() {
  this.timerID = window.setInterval(
    () => this.updateCounter(),
    1000,

  )
}

 private updateCounter = () => {
   this.setState({counter: this.state.counter +1})
 }
 private componentWillUnmount() {
   window.clearInterval(this.timerID);
 }

  public render() {

    let dateNow = new Date();
    return (

    <div>
      <button onClick={this.updateCounter}>Increase</button>
      clock, counter: {this.state.counter}
      {`tänään on  ${dateNow.getHours()}.${dateNow.getMinutes()}.${dateNow.getSeconds()}.`}

      {typeof window !== 'undefined' && window.toString()}
    </div>
    )
  }
}

export default Clock;

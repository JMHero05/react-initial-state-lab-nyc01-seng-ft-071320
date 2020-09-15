import React from 'react';

class Bomb extends React.Component {
  
  constructor(props){
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  goBoom = () => {
    if (this.state.secondsLeft === 0){
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render(){
    return(
    <h3>{this.goBoom()}</h3>
    )
  }
}

export default Bomb;
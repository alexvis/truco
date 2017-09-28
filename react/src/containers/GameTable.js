import React from 'react'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: 'hello from GameTable'
    }
  }
  render(){
    debugger
    return(


      <div>
      <h1> {this.state.game}</h1>
      </div>

    )
  }
}

export default GameTable;

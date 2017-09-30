import React from 'react'
import Card from '../components/Cards'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: 'hello from GameTable'
    }
  }
  render(){

    return(

      <div>
      <Card/>
      <h1> {this.state.game}</h1>
      </div>

    )
  }
}

export default GameTable;

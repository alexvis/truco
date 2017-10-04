import React from 'react'
import { Link } from 'react-router'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rock: null,
      paper: null,
      scissors: null,
      userInput: null,
      computerInput: null,

    }
    this.handleRockClick = this.handleRockClick.bind(this);
    this.handlePaperClick = this.handlePaperClick.bind(this);
    this.handleScissorsClick = this.handleScissorsClick.bind(this);
    this.cleanOnClick = this.cleanOnClick.bind(this);
  }

  handleRockClick(){
    this.setState({userInput: "r"})
    this.setState({computerInput: Math.floor((Math.random() * 3) + 1)})
    this.setState({rock: "Rock"})
    this.setState({paper: null})
    this.setState({scissors: null})

  }

  handlePaperClick(){
    this.setState({userInput: "p"})
    this.setState({computerInput: Math.floor((Math.random() * 3) + 1)})
    this.setState({paper: "Paper"})
    this.setState({rock: null})
    this.setState({scissors: null})

  }

  handleScissorsClick(){
    this.setState({userInput: "s"})
    this.setState({computerInput: Math.floor((Math.random() * 3) + 1)})
    this.setState({scissors: "Scissors"})
    this.setState({rock: null})
    this.setState({paper: null})

  }

  cleanOnClick(){
    this.setState({userInput: null});
    this.setState({computerInput: null});
    this.setState({rock: null})
    this.setState({paper: null})
    this.setState({scissors: null})
  }

  render(){

    let response
    if (this.state.computerInput === 1 && this.state.userInput === "r"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="rock"></div>
            <h3>Tie!</h3>
        </div>
    } else if (this.state.computerInput === 1 && this.state.userInput === "p"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="rock"></div>
            <h3>You Win!</h3>
          </div>
    } else if (this.state.computerInput === 1 && this.state.userInput === "s"){
      response =
        <div className="panel">
          <h3>Computer Choose</h3>
          <div className="rock"></div>
          <h3>You Lose!</h3>
        </div>
    } else if (this.state.computerInput === 2 && this.state.userInput === "r"){
      response =
        <div className="panel">
          <h3>Computer Choose</h3>
          <div className="paper"></div>
          <h3>You Lose!</h3>
        </div>
    } else if (this.state.computerInput === 2 && this.state.userInput === "p"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="paper"></div>
            <h3>Tie!</h3>
          </div>
    } else if (this.state.computerInput === 2 && this.state.userInput === "s"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="paper"></div>
            <h3>You Win!</h3>
          </div>
    } else if (this.state.computerInput === 3 && this.state.userInput === "r"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="scissors"></div>
            <h3>You Win!</h3>
          </div>
    } else if (this.state.computerInput === 3 && this.state.userInput === "p"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="scissors"></div>
            <h3>You Lose!</h3>
          </div>
    } else if (this.state.computerInput === 3 && this.state.userInput === "s"){
        response =
          <div className="panel">
            <h3>Computer Choose</h3>
            <div className="scissors"></div>
            <h3>Tie!</h3>
          </div>
    } else {
      response = null
    }

    return(
      <div>
        <div className="userInputBox large-6 columns">
          <div className="rock large-12 columns" onClick={this.handleRockClick}>{this.state.rock}</div>
          <div className="paper large-12 columns" onClick={this.handlePaperClick}>{this.state.paper}</div>
          <div className="scissors large-12 columns" onClick={this.handleScissorsClick}>{this.state.scissors}</div>
        </div>
        <div className="button-group">
          <button className="button" onClick={this.cleanOnClick}>Start Over</button>
          <Link to='/users/:id/friend' className="button">Frendly Game</Link>
        </div>
        {response}
      </div>

    )
  }
}

export default GameTable;

import React from 'react'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: 'hello from GameTable',
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
  }

  handlePaperClick(){
    this.setState({userInput: "p"})
    this.setState({computerInput: Math.floor((Math.random() * 3) + 1)})
  }

  handleScissorsClick(){
    this.setState({userInput: "s"})
    this.setState({computerInput: Math.floor((Math.random() * 3) + 1)})
  }

  cleanOnClick(){
    this.setState({userInput: null});
    this.setState({computerInput: null})
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
          <div className="rock large-12 columns" onClick={this.handleRockClick}></div>
          <div className="paper large-12 columns" onClick={this.handlePaperClick}></div>
          <div className="scissors large-12 columns" onClick={this.handleScissorsClick}></div>
        </div>
        <div className="button-group">
          <button className="button" onClick={this.cleanOnClick}>Start Over</button>
        </div>
        {response}
      </div>

    )
  }
}

export default GameTable;

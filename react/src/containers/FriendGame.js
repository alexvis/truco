import React from 'react';
import FriendGameUserTwo from '../components/FriendGameUserTwo'
import FriendGameUserOne from '../components/FriendGameUserOne'

class FriendGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rockOne: null,
      paperOne: null,
      scissorsOne: null,
      rockTwo: null,
      paperTwo: null,
      scissorsTwo: null,
      showGameOne: null,
      showGameTwo: null,
      userTwo: null,
      userOne: null,
      showOne: null,
      showTwo: null,
      showAll: null,
      resultGame: null,
    };
    this.handleRockClickOne = this.handleRockClickOne.bind(this);
    this.handlePaperClickOne = this.handlePaperClickOne.bind(this);
    this.handleScissorsClickOne = this.handleScissorsClickOne.bind(this);
    this.handleRockClickTwo = this.handleRockClickTwo.bind(this);
    this.handlePaperClickTwo = this.handlePaperClickTwo.bind(this);
    this.handleScissorsClickTwo = this.handleScissorsClickTwo.bind(this);
    this.cleanOnClick = this.cleanOnClick.bind(this);

  }

  handleRockClickOne(){
    this.setState({userOne: "r"});
    this.setState({showGameOne: "hide"});
    this.setState({showGameTwo: "show"});
    this.setState({rockOne: "Rock"});
  }

  handlePaperClickOne(){
    this.setState({userOne: "p"});
    this.setState({showGameOne: "hide"});
    this.setState({showGameTwo: "show"});
    this.setState({paperOne: "Paper"});
  }

  handleScissorsClickOne(){
    this.setState({userOne: "s"});
    this.setState({showGameOne: "hide"});
    this.setState({showGameTwo: "show"});
    this.setState({scissorsOne: "Scissors"});
  }

  handleRockClickTwo(){
    this.setState({userTwo: "r"});
    this.setState({showAll: null});
    this.setState({showGameOne: null});
    this.setState({showGameTwo: "show"});
    this.setState({rockTwo: "Rock"});
    this.setState({resultGame: "stop"});


  }

  handlePaperClickTwo(){
    this.setState({userTwo: "p"});
    this.setState({showAll: null});
    this.setState({showGameOne: null});
    this.setState({showGameTwo: "show"});
    this.setState({paperTwo: "Paper"});
    this.setState({resultGame: "stop"});

  }

  handleScissorsClickTwo(){
    this.setState({userTwo: "s"});
    this.setState({showAll: null});
    this.setState({showGameOne: null});
    this.setState({showGameTwo: "show"});
    this.setState({scissorsTwo: "Scissors"});
    this.setState({resultGame: "stop"});

  }

  cleanOnClick(){
    this.setState({rockOne: null});
    this.setState({paperOne: null});
    this.setState({scissorsOne: null});
    this.setState({rockTwo: null});
    this.setState({paperTwo: null});
    this.setState({scissorsTwo: null});
    this.setState({showGameOne: null});
    this.setState({showGameTwo: null});
    this.setState({userTwo: null});
    this.setState({userOne: null});
    this.setState({showAll: null});
    this.setState({resultGame: null});
  }



  render(){
    let response
    if (this.state.userOne === "r" && this.state.userTwo === "r"){
        response =
          <div className="panel">
            <h3>Tie Game!</h3>
        </div>
    } else if (this.state.userOne === "r" && this.state.userTwo === "p"){
        response =
          <div className="panel">
            <h3>Player Two Win!</h3>
          </div>
    } else if (this.state.userOne === "r" && this.state.userTwo === "s"){
      response =
        <div className="panel">
          <h3>Player One Win!</h3>
        </div>
    } else if (this.state.userOne === "p" && this.state.userTwo === "r"){
      response =
        <div className="panel">
          <h3>Player One Win!</h3>
        </div>
    } else if (this.state.userOne === "p" && this.state.userTwo === "p"){
        response =
          <div className="panel">
            <h3>Tie!</h3>
          </div>
    } else if (this.state.userOne === "p" && this.state.userTwo === "s"){
        response =
          <div className="panel">
            <h3>Player Two Win!</h3>
          </div>
    } else if (this.state.userOne === "s" && this.state.userTwo === "r"){
        response =
          <div className="panel">
            <h3>Player Two Win!</h3>
          </div>
    } else if (this.state.userOne === "s" && this.state.userTwo === "p"){
        response =
          <div className="panel">
            <h3>Player One Win!</h3>
          </div>
    } else if (this.state.userOne === "s" && this.state.userTwo === "s"){
        response =
          <div className="panel">
            <h3>Tie!</h3>
          </div>
    } else {
      response = null
    }

    let showGameTwo
    let showGameOne

    if(this.state.showAll === null){
      if(this.state.showGameTwo){
        showGameTwo =
          <FriendGameUserTwo
            handleRockClickTwo={this.handleRockClickTwo}
            handlePaperClickTwo={this.handlePaperClickTwo}
            handleScissorsClickTwo={this.handleScissorsClickTwo}
            rock={this.state.rockTwo}
            paper={this.state.paperTwo}
            scissors={this.state.scissorsTwo}
            resultGame={this.state.resultGame}
          />

      }

      if(this.state.showGameOne === null){
        showGameOne =
          <FriendGameUserOne
          handleRockClickOne={this.handleRockClickOne}
          handlePaperClickOne={this.handlePaperClickOne}
          handleScissorsClickOne={this.handleScissorsClickOne}
          rock={this.state.rockOne}
          paper={this.state.paperOne}
          scissors={this.state.scissorsOne}
          resultGame={this.state.resultGame}

          />

      }
    } else {
      <h1>hello</h1>
    }
    return(
      <div>
      {showGameOne}
      {showGameTwo}
      {response}
      <button className="button" onClick={this.cleanOnClick}>Start New Game</button>
      </div>

    )
  }
}

export default FriendGame;

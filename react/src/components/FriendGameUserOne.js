import React from 'react';

class FrienGameUserOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }


  render(){
    return(
      <div>
        <h3>Player One</h3>
        <div className="userInputBox large-6 columns">
          <div className="rock large-12 columns" onClick={this.props.handleRockClickOne}>{this.props.rock}</div>
          <div className="paper large-12 columns" onClick={this.props.handlePaperClickOne}>{this.props.paper}</div>
          <div className="scissors large-12 columns" onClick={this.props.handleScissorsClickOne}>{this.props.scissors}</div>
        </div>
        <div className="button-group">
        </div>
      </div>

    )
  }
}

export default FrienGameUserOne;

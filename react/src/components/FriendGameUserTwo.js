import React from 'react';

class FriendGameUserTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h3>PLayer Two</h3>
        <div className="userInputBox large-6 columns">
          <div className="rock large-12 columns" onClick={this.props.handleRockClickTwo}>{this.props.rock}</div>
          <div className="paper large-12 columns" onClick={this.props.handlePaperClickTwo}>{this.props.paper}</div>
          <div className="scissors large-12 columns" onClick={this.props.handleScissorsClickTwo}>{this.props.scissors}</div>
        </div>
        <div className="button-group">
        </div>
      </div>

    )
  }
}

export default FriendGameUserTwo;

import React from 'react';

const FriendGameUserTwo = (props) => {

  let result

  if(props.resultGame === null){
    result =
      <div className="row">
        <div className="userInputBox large-6 medium-12 small-12 columns">
        <h3 className="playerTwo">Player Two</h3>
          <div className="rock one large-4 medium-4 small-4 columns" onClick={props.handleRockClickTwo}></div>
          <div className="paper one large-4 medium-4 small-4 columns" onClick={props.handlePaperClickTwo}></div>
          <div className="scissors one large-4 medium-4 small-4 columns" onClick={props.handleScissorsClickTwo}></div>
        </div>
      </div>

  } else {
    result =
      <div className="row">
        <div className="userInputBox large-6 medium-12 small-12 columns">
        <h3 className="playerTwo">Player Two</h3>
          <div className="rock large-4 medium-4 small-4 columns" >{props.rock}</div>
          <div className="paper large-4 medium-4 small-4 columns" >{props.paper}</div>
          <div className="scissors large-4 medium-4 small-4 columns" >{props.scissors}</div>
        </div>
      </div>

  }

  return(
    <div>
      {result}
    </div>
  )
}

export default FriendGameUserTwo;

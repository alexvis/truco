import React from 'react';
import FriendGameUserTwo from '../components/FriendGameUserTwo'
import FriendGameUserOne from '../components/FriendGameUserOne'

class FriendGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userOne: null,
      userTwo: null,


    }

  }


  render(){
    return(
      <div>
      <FriendGameUserOne/>
      <FriendGameUserTwo/>
      </div>

    )
  }
}

export default FriendGame;

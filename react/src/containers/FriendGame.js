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
    this.handelUserOne = this.handelUserOne.bind(this)
  }

  handelUserOne(){
    this.setState({userOne: "active"})
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

import React from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'

class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    return(
      <div>
        <h1>Hello from friendly game</h1>
        <BackButton/>{' '}
        <Link to='/computer'>Cumputer Game</Link>{' | '}
        <Link to='/friend'>Friend Game</Link>

      </div>
    )
  }
}

export default Layout;

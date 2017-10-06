import React from 'react'
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <button onClick={browserHistory.goBack}>Back</button>
  )
}

export default BackButton;

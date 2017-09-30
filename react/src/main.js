import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import GameTable from './containers/GameTable';



ReactDOM.render(
  <div>
  <GameTable/>
  </div>,
  document.getElementById('app')
);

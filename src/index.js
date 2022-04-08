import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data';
import './index.css';

// console.log(<Beers list={data.cards} />);

ReactDOM.render(
  <React.StrictMode>
      <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);
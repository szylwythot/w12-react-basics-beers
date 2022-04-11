import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data';
import './reset.css';
import './index.css';

// console.log(<Beers list={data.cards} />);

ReactDOM.render( //ez felel azért, hogy html legyen belőle
  <React.StrictMode>
      <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);
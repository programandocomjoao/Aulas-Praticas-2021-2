import React from 'react';
import ReactDOM from 'react-dom';

const times = ['Flamengo', 'Fluminense', 'Botafogo'];

const listaTimes = times.map(
  (item) => <h2>{item}</h2>
)

ReactDOM.render(
  listaTimes,
  document.getElementById('root')
);
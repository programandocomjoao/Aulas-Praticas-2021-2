import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Titulo extends React.Component {
  render() {
    return <h1>Aula de FDSAW</h1>
  }
}

ReactDOM.render(
  <Titulo />,
  document.getElementById('root')
);
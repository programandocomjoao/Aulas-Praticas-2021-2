import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Titulo extends React.Component {
  render() {
    return <h1>Aula de FDSAW</h1>
  }
}

function SubTitulo() {
  return <h2>Componentes React</h2>;
}

ReactDOM.render(
  <>
    <Titulo />
    <SubTitulo />
  </>,
  document.getElementById('root')
);
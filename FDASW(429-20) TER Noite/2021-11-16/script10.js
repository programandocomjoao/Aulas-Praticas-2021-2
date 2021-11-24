import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Titulo extends React.Component {
  render() {
    return <h1>Saudação</h1>
  }
}

function Mensagem(props) {
  return <p>Seja bem-vindo(a) {props.nome} {props.sobrenome}</p>;
}

ReactDOM.render(
  <>
    <Titulo />
    <Mensagem nome="Danilo" sobrenome="Targino" />
    <Mensagem nome="Yago" sobrenome="Lorran" />
    <Mensagem nome="Leonardo" sobrenome="Meneguelli" />
    <Mensagem nome="Ludmila" sobrenome="Cavalcanti" />
    <Mensagem nome="Felipe" sobrenome="Felix" />
  </>,
  document.getElementById('root')
);
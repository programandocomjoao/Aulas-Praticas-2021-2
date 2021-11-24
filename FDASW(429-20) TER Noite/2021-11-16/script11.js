import React from 'react';
import ReactDOM from 'react-dom';

function Titulo() {
  return <h1>Alunos</h1>;
}

function Linha() {
  return <hr />;
}

function Mensagem(props) {
  return (
    <>
      <p>Seja bem-vindo(a) {props.nome} {props.sobrenome}</p>
      <Linha />
    </>
  );
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
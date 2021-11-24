import React from 'react';
import ReactDOM from 'react-dom';
import Carro from './Carro.js';

ReactDOM.render(
  <>
    <Carro marca="Fiat" modelo="Palio" ano="1997" cor="azul" />
    <Carro marca="Chevrolet" modelo="Celta" ano="2001" cor="preto" />
    <Carro marca="Fiat" modelo="Palio" ano="2007" cor="vermelho" />
    <Carro marca="Ford" modelo="Ka" ano="2012" cor="branco" />
  </>,
  document.getElementById('root')
);
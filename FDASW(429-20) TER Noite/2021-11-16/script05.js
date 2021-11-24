import React from 'react';
import ReactDOM from 'react-dom';

const tabela = (
  <table border='1'>
    <tr>
      <th>Time</th>
    </tr>

    <tr>
      <td>Flamengo</td>
    </tr>

    <tr>
      <td>Botafogo</td>
    </tr>
  </table>
);

ReactDOM.render(
  tabela,
  document.getElementById('root')
);
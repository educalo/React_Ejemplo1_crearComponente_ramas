import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//elemento creado en la renderización
const contenido =
  <div>
    <h1>Titulo</h1>
    <div>Hola desde React</div>
  </div>;
  
ReactDOM.render(
  contenido, document.getElementById("root")
  );
  

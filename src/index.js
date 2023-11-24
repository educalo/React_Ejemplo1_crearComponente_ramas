import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



  function Componente(){
    return ( <div>
    <h1>Titulo</h1>
    <div>Hola desde React</div>
    </div>
  );
  }
  
  //ahora para utilizar los componentes lo pongo de la siguiente manera
  //al componente podemos pasarle atributos, en nuestro ejemplo seria Titulo y Contenido
  ReactDOM.render(
    <Componente />, document.getElementById("root")
    );
  


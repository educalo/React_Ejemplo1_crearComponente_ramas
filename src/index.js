import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//3.- Añado props para pasarle datos al componente
//paso las propiedades como expresiones props.Titulo y props.Contenido

function Componente(props){
    //contiene un objeto, que tiene como atributos contenido y titulo
    console.log(props);
    const titulo = props.titulo;
    const contenido =props.contenido;
      return ( <div>
      
      <h1>{titulo}</h1>
      <div>{contenido}</div>
      </div>
    );
    }
    //ahora para utilizar los componentes lo pongo de la siguiente manera
    //al componente podemos pasarle atributos, en nuestro ejemplo seria Titulo y Contenido
    ReactDOM.render(
      <Componente titulo="Titulo" contenido="Contenido" />, document.getElementById("root")
    );


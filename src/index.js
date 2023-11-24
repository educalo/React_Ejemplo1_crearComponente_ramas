import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//4.- Podemos simplicarlo utilizando desectructuracion
//si utilizo esta forma es exactamente lo mismo que lo comentado dos lineas anteriores

//function Componente ({titulo, contenido}) para desectructurar directamente en el paso de la props, si es asi sobraria la linea const {titulo, contenido}= props

function Componente(props){
  //contiene un objeto, que tiene como atributos contenido y titulo
  console.log(props);
    //const titulo = props.titulo;
    //const contenido =props.contenido;
    const {titulo, contenido} = props;
    
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

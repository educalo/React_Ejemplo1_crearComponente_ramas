import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//5.- Si queremos mejorar el codigo del punto 4 podriamos hacer lo siguiente
//children son los hijos de mi componente
function Componente({ titulo, children }){
  //contiene un objeto, que tiene como atributos contenido y titulo
  //console.log(props);
    //const titulo = props.titulo;
    //const contenido =props.contenido;
    //const {titulo, contenido} = props;
    
    return ( <div>
    <h1>{titulo}</h1>
    <div>{children}</div>
    </div>
  );
  }
  //ahora para utilizar los componentes lo pongo de la siguiente manera
  //al componente podemos pasarle atributos, en nuestro ejemplo seria Titulo y Contenido
  ReactDOM.render(
    <Componente titulo="Titulo1">Hola desde React</Componente>, document.getElementById("root")
    );
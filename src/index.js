import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//Por defecto me añade este codigo donde estoy añadiendo el componente App en el id root
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//1.- añado este codigo por mi cuenta, y voy a renderizar es siguiente codigo
//div es un elemento de React en formato jsx, si queremos ver como se traduce este codigo a html utilizar babel.io
//lo lógico dentro de la renderizacion que quiero hacer es añadir un componente
/*
const contenido = (
  <div>
    <h1>Titulo</h1>
    <div>Hola desde React</div>
  </div>
)

ReactDOM.render(
  contenido, document.getElementById("root")
  );
*/

//2.- si lo que queremos es añadir un componente debemos crear una funcion que retorne todo lo que anteriormente hemos añadido en la constante contenido
//un compente te devuelve contenido jsx
//Los componentes debe empezar en mayusculas, los que no empiezan por mayusculas son componentes propios de React
/*
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
  <Componente titulo="Titulo" contenido="Contenido" />, document.getElementById("root")
  );

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
  */


//3.- Añado props para pasarle datos al componente
//paso las propiedades como expresiones props.Titulo y props.Contenido
 
/*
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

*/

//4.- Podemos simplicarlo utilizando desectructuracion
//si utilizo esta forma es exactamente lo mismo que lo comentado dos lineas anteriores

//function Componente ({titulo, contenido}) para desectructurar directamente en el paso de la props, si es asi sobraria la linea const {titulo, contenido}= props
/*
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
*/

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
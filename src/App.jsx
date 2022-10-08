import React from 'react';
import './App.css';
import UserProvider from './components/context/UserContext';
import ListaUsuarios from './components/ListaUsuarios';
//import Props from "./components/Props";
//import PrimerComponente from "./components/PrimerComponente";
//import State from './components/State';
//import EstilosTradicionales from './components/EstilosTradicionales';
//import EstilosEnLinea from './components/EstilosEnLinea'; 
//import EstilosEnModulo from './components/EstilosEnModulo/EstilosEnModulo.jsx';
// EstilosconStyled from './components/EstilosconStyled';
//import Refs from './components/EstilosEnModulo/Refs';
//import CicloVidaComponentes from './components/CicloVidaComponentes';
//import Hooks from './components/Hooks.jsx';
//import Formularios from './components/Formularios.jsx'
//import Eventos from './components/Eventos';
//import RenderizadoCondicional from './components/RenderizadoCondicional';
// import SpreadOperator from './components/SpreadOperator';
//import IterandoArrays from './components/IterandoArrays';
//import Iterarkeys from './components/Iterarkeys';
//import Padre from './components/IterandoComponentes/Padre';
//import ComunicacionComponentes1 from './components/ComunicacionComponentes1';
//import ComunicacionComponentes2 from './components/ComunicacionComponentes2';
//import Fetch from './components/Fetch';
//import Axios from './components/Axios';
//import Padre from './components/Rutas/Padre.jsx'
//import UseCounts, { useCount } from './components/hooks/UseCounts.jsx'

function App() {

  //const[contador]=useCount(0)
  
  //const lista=['platano,','mango,','naranja.']
  //{useState} 
  //const [estado,setEstado] = useState(false)

  /*
  const estadoComponente=()=>{
     setEstado(true)
  }

  const hijoLlamaPadre=()=>{
    console.log('llamando a padre desde el compnente hijo')
  }

  const llamandoaHermano=()=>{
    setEstado(false)
  }*/

  return (
  <>
  {/* <PrimerComponente> */}
  {/*<Props frutas={lista}/>*/}
  {/*<State/>*/}
  {/*<EstilosTradicionales/>*/}
  {/*<EstilosEnLinea/>*/}
  {/*<EstilosEnModulo/>*/}
  {/*<EstilosconStyled  />*/}
  {/*<Refs/>*/}
  {/*<CicloVidaComponentes/>*/}
  {/*<Hooks/>*/}
  {/*<Formularios/>*/}
  {/*<Eventos/>*/}
  {/*<RenderizadoCondicional/>*/}
  {/*<SpreadOperator/>*/}
  {/*<IterandoArrays/>*/}
  {/*<Iterarkeys/>*/}
  {/*<Padre />*/}
  {/*<ComunicacionComponentes1 llamaHermano2={llamandoaHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado} />*/}
  {/*<ComunicacionComponentes2  nuevoEstado={estado}/>*/}
  {/*<button onClick={estadoComponente}>Pulsa</button>*/}
  {/*<Fetch />*/}
  {/*<Axios />*/}
  {/*<Padre />*/}
   {/*<h1>{contador}</h1>*/}
   <UserProvider>
           <ListaUsuarios/>
   </UserProvider>
  </>
  );
}
export default App;

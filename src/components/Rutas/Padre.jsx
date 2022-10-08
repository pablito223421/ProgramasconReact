import React from 'react'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom'


const Padre = () => {
  return (
  
    <BrowserRouter>
    
    {/*<Route path="/" exact  component={Componente1}></Route>
    <Route path="/pagina2" component={Componente2}></Route>
    <Route path="/pagina3" component={Componente3}></Route>
    <Route path="/pagina4"component={()=><h2>Hola estamon en el componente 4</h2>}></Route>*/}
    
    <Route exacct path='/'>
      <Componente1 />
    </Route>

    <Route exacct path='/pagina2'>
      <Componente2 />
    </Route>

    <Route exacct path='/pagina3'>
      <Componente3 />
    </Route>

    <Link to="/pagina2">A componente 2</Link><br/>
    <Link to="/pagina3">A componente 3</Link><br/>
    </BrowserRouter>
  )
}

export default Padre
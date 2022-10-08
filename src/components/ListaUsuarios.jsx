import React,{useContext} from 'react'
import { UserContext } from './context/UserContext'

const ListaUsuarios = () => {
    const{users}=useContext(UserContext)

    const usuarios=users.data
  
    
    return (
    <>
    
    <ul>
        {usuarios.map(usuario=>(

           <li key={usuario.id}>
            {usuario.id}<br/>
            {usuario.name}<br/>
            {usuario.phone}<br/>
            {usuario.username}
            </li>
           

        ))}
    </ul>

    </>
  )
}

export default ListaUsuarios;
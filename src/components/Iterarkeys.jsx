import React from 'react'

const Iterarkeys = () => {

    const animal ={
        nombre: 'Fidulais',
        especie: 'perro',
        edad:'4',
        lugar:'casa',
        cuidador: 'Pablo'
    } 

 const key = Object.keys(animal)

  return (
    <>
     <ul>
      {key.map(k=>(
        <li>{k}:{animal[k]}</li>
      ))}
     </ul>
    </>
  )
}

export default Iterarkeys
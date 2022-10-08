import React from 'react'

const IterandoArrays = () => {

const animales= ['perro','gato','pato','loro']

const personas =[

    {
      id:0,
      nombre:'Felipe',
      puesto:'Mecanico'
    },

    {
        id:1,
        nombre:'Paco',
        puesto:'Chofer'
      },

    {
        id:2,
        nombre:'María',
        puesto:'Cocninera'
      }

]

  return (
    <>
    
    <ul>
      {animales.map(animal=>(
        <li>
        {animal}
        </li>
      ))}
    </ul>

    <ul>
    {personas.map(persona=>(
     <li key={persona.id}>
      Id:{persona.id}<br/>
      Nombre:{persona.nombre}<br/>
      Puesto:{persona.puesto}
     </li>
    ))}
    </ul>

    </>
  )
}

export default IterandoArrays
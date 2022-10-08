import React from 'react'

const ComunicacionComponentes1 = (props) => {

 if(props.cambioEstado===true){
    console.log('El estado es verdadero')
 }

 const llama=()=>{
    props.llamaPadre()
 }

 const llamaHermano=()=>{
    props.llamaHermano2()
 }

  return (
    <>
    <button onClick={llama}>Llama Padre</button>
    <button onClick={llamaHermano}>Llama Hermano</button>
    </>
  )
}

export default ComunicacionComponentes1
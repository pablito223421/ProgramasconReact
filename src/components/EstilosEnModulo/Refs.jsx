import React,{createRef} from 'react';

const Refs = () => {

const cambioColor=createRef()

const cambioColorTexto=()=>{
    cambioColor.current.style.color= 'blue'
}

  return (
    <>
     <h1 ref={cambioColor}>Soy un título y cambio de color</h1>
     <button onClick={cambioColorTexto}>Cambiar de Color</button>
    </>
  )
}

export default Refs;
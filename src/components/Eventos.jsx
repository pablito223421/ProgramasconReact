import React from 'react'

const focus=()=>console.log('estoy en el foco')
const blur =()=>console.log('No estoy en ese foco')
const change=()=>console.log('me ando cambiando')
const click=()=> console.log('le he dado click')
const dobleclick=()=>alert('esto es doble click')
const pulsarTecla=()=>console.log('me estas apretando')

const Eventos = () => {
  return (
    <>
    <form>
        <input onBlur={blur} 
        onFocus={focus} type="text"
        onChange={change}
        onKeyDown={pulsarTecla} />
    <button onClick={click}
            onDoubleClick={dobleclick}>Pulse este boton</button>
    </form>
    </>
  )
}

export default Eventos
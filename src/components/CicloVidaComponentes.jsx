import React, { Component } from "react";

class CicloVidaComponentes extends Component {
constructor(props){
    super(props);
    this.state = {   
        nombre:'Juan Pablo',
        evento:null
    }
}

cambiarNombre(){
    this.setState({nombre:'Carlos'});
}

componentDidMount(){

}

componentDidUpdate(prevProps, prevState){
    if(prevState===this.state.nombre){
        console.log('Mi estado no ha cambiado')
    }else{
        console.log('Mi estado ha cambiado y ahora me llamo',this.state.nombre)
    }

}

componentWillUnmount(){

}

render() {
    return(
        <>
        <h1>{this.state.nombre}</h1>
       <button onClick={this.cambiarNombrebind(this)}>Cambiar Nombre</button>
        </>
    );
}
}

export default CicloVidaComponentes;
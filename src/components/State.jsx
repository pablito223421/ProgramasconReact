import React,{Component} from "react";

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombres: "Juan Pablo",
            apellidos:"Hernández Hernández"
        }
    }

    cambiarDatos(){
       if(this.state.nombres==="Juan Pablo" &&
          this.state.apellidos==="Hernández Hernández")
       this.setState({nombres:"Ana Paola",apellidos:"Juarez Hinojosa"})

       else
       this.setState({nombres:"Juan Pablo",apellidos:"Hernández Hernández"})
    }

    render(){
        return(
          <>
          <h2>Mi nombre es {this.state.nombres} {this.state.apellidos}</h2>
          <button onClick={this.cambiarDatos.bind(this)}>PULSAR</button>
          </>
        );
    }
} 

export default State;
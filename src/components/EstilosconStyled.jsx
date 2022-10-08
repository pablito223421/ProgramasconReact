import React, {Component} from 'react';
import styled from 'styled-components';
import './variables.css';
class EstilosconStyled extends Component{

    constructor(props){
        super(props);
        this.state= { }
    }
    render(){

        const Titulo = styled.h1`
        color:green;
        font-size:29px;
        `

        const Cabecera = styled.header `
        height:var(--altoHeader);
        background-color:var(--colorHeader);
        width:var(--anchoHeader);
        `

        return(
        <>
        <Cabecera>
         <Titulo>
          Estamos en StyledCode
         </Titulo>
        </Cabecera>
        </>
        );
    }
}

export default EstilosconStyled;
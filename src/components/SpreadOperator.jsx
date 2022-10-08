import React from 'react';

const SpreadOperator = () =>{

    const animalesSalvajes = ['ciervo','lobo','jabalí','vivora']
    const animalesDomesticos= ['perro','gato','hamster','canario']

    const animales = [...animalesSalvajes , ...animalesDomesticos]

    console.log(animales)

    const modelosEuropeas={
        España:'Carmen',
        Alemania:'Dina',
        Francia: 'Cristine',
        Mexico: 'Claudia'
    }

    const modelosAfricanas={
        Senegal:'Sonia',
        Sudafrica:'Carmele',
        Tunez:'Sandra'
    }

    const modelos= [ ...modelosEuropeas, ...modelosAfricanas]
    console.log(modelos)

    return (
      <>
      <h1>{}</h1>
      </>
    )

}

export default SpreadOperator;
import React from 'react'

export default function Product({product}) {
 
    const {id, description, amount, unit} = product;

    return(
        <div>
            <p>Id: {id}</p>
            <p>Produto: {description}</p>
            <p>Quantidade: {amount}</p>
            <p>Unidade: {unit}</p>            
        </div>
    )
}

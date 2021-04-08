import React from 'react'
import Filter from "../filter/Filter"
import Product from './Product'

export default function ProductList({products}) {
    products = [{
        id: 1,
        description: "Etiqueta 6288",
        amount: 5,
        unit: "caixas"
    }, {
        id: 1,
        description: "Folhas A4",
        amount: 2,
        unit: "resmas"
    }];

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Relatório de Produtos</h1>
            <br/>
            <Filter/>
            <br/>
            {products.map((product, index) => {
                return <Product key={index} product={product} />
            })}
        </div>
    )
}

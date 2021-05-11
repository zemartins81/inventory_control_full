import React from 'react'
import Products from '../compoents/content/products/Products'
import Header from '../compoents/header/Header'

export default function ProductList() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <Header>Controle de Estoque</Header>  
         <Products/> 
        </div>
    )
}

import React from 'react'
import Card from './Card'

export default function Products({ products }) {

    return <div className="container bg-gray-200 p-1 rounded-xl flex-grow">
        <h1 className="text-center font-semibold text-4xl text-white my-8">Produtos</h1>
        <div className=" mx-auto flex flex-wrap content-center my-8">
          {products.map(product => <Card product={product} key={product._id}/>)}

        </div>
    </div>
}

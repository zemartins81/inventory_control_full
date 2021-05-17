import React from 'react'
import Card from './Card'

export default function Products({products}) {
    return (
    <div className="container bg-gray-200 p-2 my-4 rounded-xl center flex-grow">
        <h1 className="text-center font-semibold text-4xl text-black my-8">Produtos</h1>
        <div className=" grid lg:grid-cols-3 gap-2 place-content-center md:grid-cols-2 sm:grid-cols-1 ">
            {products.map(product => <Card product={product} key={product._id}/>)}
        </div>
    </div>
    )
}

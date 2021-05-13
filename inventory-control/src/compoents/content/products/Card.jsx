import React from 'react'

export default function Card({product}) {

  const { name, description, amount, unit } = product

    return (
        <div className="bg-white rounded-xl lg:w-1/3 w-full lg:p-6 mx-auto my-2 bd">
            <div className="md:w-9/10 w-full">
                <img src="./img/eu.jpg" alt="eu.jpg" className="rounded-lg shadow-lg antialiased p-1"/>
            </div>
            <div className="px-2 m-1">
                <h1 className="text-2xl text-black font-semibold leading-tight text-center">{name}</h1>
                <p className="m-1"><b>Descrição:</b> {description}</p>
                <p className="m-1"><b>Quantidade:</b> {amount} {unit} </p>
            </div>
        </div>
    )
}

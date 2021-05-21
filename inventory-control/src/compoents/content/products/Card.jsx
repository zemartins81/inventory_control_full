import React from 'react'

export default function Card({product}) {

  const { name, description, amount, unit } = product

  const handleEditClick = (event) => {
      console.log("Fui clicado " + product._id)
  }

    return (
        <div className="bg-white rounded-xl shadow-md">
            <div className="md:w-9/10 w-full shadow-md">
                <img src="./img/embreve.jpg" alt="embreve.jpg" className="rounded-lg shadow-lg antialiased p-1"/>
            </div>
            <div className="px-2 m-1 ">
                <div className="container grid place-items-end">
                    <img src="./img/edit.png" className="w-6" onClick={handleEditClick}></img>
                </div>
                <h1 className="text-2xl text-black font-semibold leading-tight text-center">{name}</h1>
                <p className="m-1"><b>Descrição:</b> {description}</p>
                <p className="m-1"><b>Quantidade:</b> {amount} {unit} </p>
            </div>
            <div className="grid lg:grid-cols-2  place-items-center md:grid-cols-1 sm:grid-cols-1 p-4">
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" type="button"> + </button>
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button"> - </button>                
            </div>
        </div>
    )
}

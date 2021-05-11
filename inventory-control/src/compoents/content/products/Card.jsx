import React from 'react'

export default function Card() {
    return (
        <div className="bg-white rounded-xl md:w-1/3 sm:w-9/10  px-3 relative items-center m-2">
            <div class="md:w-9/10 w-full">
                <img src="./img/eu.jpg" alt="eu.jpg" className="rounded-lg shadow-lg antialiased p-1"/>
            </div>
            <div className="px-2 m-1">
                <h1 className="text-2xl text-black font-semibold leading-tight text-center">Name</h1>
                <p className="m-1"><b>Descrição:</b> Lindo</p>
                <p className="m-1"><b>Quantidade:</b> 40 anos </p>
            </div>
        </div>
    )
}

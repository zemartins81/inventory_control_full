import React  from 'react'
import {Link} from 'react-router-dom'
import properties from "../Components/Button/properties.json"
import Button from "../Components/Button/Button"

export default function Card({product, handleShowModal}) {

    const { _id, name, description, quantity, unit, amount } = product


    const formatValues = (value) => {
        let valor = value
        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        return valor
    }

    return (

        <div className="bg-white rounded-xl shadow-md">
            <div className="md:w-9/10 w-full shadow-md">
                <img src="./img/embreve.jpg" alt="embreve.jpg" className="rounded-lg shadow-lg antialiased p-1"/>
            </div>
            <div className="px-2 m-1 ">
                <div className="container grid place-items-end">
                  <Link to={{
                      pathname: `/produtos/${_id}`,
                      state: {product: product}
                    }}>
                      <img src="./img/edit.png" alt="edit.png" className="w-6"/>
                  </Link>
                </div>
                <h1 className="text-2xl text-black font-semibold leading-tight text-center">{name}</h1>
                <p className="m-1"><b>Descrição: </b>{description}</p>
                <p className="m-1"><b>Quantidade: </b>{quantity} {unit} </p>
                <p className="m-1"><b>Valor: </b>R$ {formatValues(amount)}</p>
            </div>
            <div className="place-items-center grid lg:grid-cols-0 md:grid-cols-0 sm:grid-cols-0 p-4">
                <Button onClick={ () => handleShowModal(product)} properties={properties.success} text="Lançar Transação" />
            </div>
        </div>
    )
}

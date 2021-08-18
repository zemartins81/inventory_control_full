/* eslint-disable react/prop-types */
import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import embreve from '../../assets/img/embreve.png'
import edit from '../../assets/img/edit.png'
import Button from '../button/Button'

export default function Card({ product, setInsertProduct }) {
  const {
    _id,
    name,
    description,
    quantity,
    unit,
    unitPrice,
    amount,
    movements = {},
  } = product

  return (
    <div className="card">
      <img src={embreve} alt="Em breve" />

      <div className="title-product">
        <strong>{name}</strong>
        <Link
          to={{
            pathname: `/produtos/${_id}`,
            state: { product },
          }}
          onClick={() => setInsertProduct(true)}
        >
          <img src={edit} alt="Editar Produto" id="edit" />
        </Link>
      </div>
      <p>Descrição: {description}</p>
      <p>
        Quantidade: {quantity} {unit}
      </p>
      <p>
        Preço Unitário:{' '}
        {unitPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <p>
        Saldo:{' '}
        {amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <div className="inOut">
        <Button classname="button incoming">+</Button>
        <Button classname="button outgoing">-</Button>
      </div>
      {movements}
    </div>
  )
}

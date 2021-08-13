/* eslint-disable react/prop-types */
import React from 'react'
import './card.css'
import embreve from '../../assets/img/embreve.png'

export default function Card({ product }) {
  const { name, description, quantity, unit, unitPrice, amount } = product

  return (
    <div className="card">
      <img src={embreve} alt="embreve" />
      <strong>{name}</strong>
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
    </div>
  )
}

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
    movements,
  } = product

  const handleClick = () => {
    movements.push({
      transactionType: 'incoming',
      vendor: 'Aquimpel',
      quantityMovement: 1,
      unityValue: unit,
      date: Date.now(),
    })
  }

  return (
    <div className="card">
      <Link
        to={{
          pathname: `/produtos/${_id}`,
          state: { product },
        }}
        className="card-link"
        onClick={() => setInsertProduct(true)}
      >
        <img src={edit} alt="Editar Produto" id="edit" />
      </Link>

      <img src={embreve} alt="Em breve" />

      <div className="title-product">
        <strong>{name}</strong>
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
        <Button className="button incoming" onClick={handleClick}>
          +
        </Button>
        <Button className="button outgoing">-</Button>
      </div>
      {movements.length > 0 && (
        <div className="movements">
          <h3>Movimentações</h3>
          <table>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Vendor</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Valor</th>
            </tr>

            {movements.map((movement) => {
              const {
                transactionType,
                vendor,
                quantityMovement,
                unityValue,
                date,
              } = movement
              return (
                // eslint-disable-next-line no-underscore-dangle
                <tr key={movement._id}>
                  <td>{date}</td>
                  <td>{transactionType}</td>
                  <td>{vendor}</td>
                  <td>{quantityMovement}</td>
                  <td>{unityValue}</td>
                  <td>{quantityMovement * unityValue}</td>
                </tr>
              )
            })}
          </table>
        </div>
      )}
    </div>
  )
}

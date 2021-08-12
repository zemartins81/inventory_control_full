/* eslint-disable react/prop-types */
import React from 'react'
import './card.css'

export default function Card({ product }) {
  const { name } = product
  console.log(product)
  return (
    <div className="card">
      <h1>{name}</h1>
    </div>
  )
}

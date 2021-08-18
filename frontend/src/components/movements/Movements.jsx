import React from 'react'

export default function Movements({ product }) {
  const { name } = product
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

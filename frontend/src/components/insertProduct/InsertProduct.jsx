/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Button from '../button/Button'
import { postNewProduct, patchUpdateProduct } from '../../services/apiService'
import './insertProduct.css'

export default function InsertProduct({
  setRefreshList,
  setInsertProduct,
  setSelectedProduct,
}) {
  const location = useLocation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unit, setUnit] = useState('')
  const [unitPrice, setUnitPrice] = useState(0)
  const [movements, setMovements] = useState([])
  const [amount, setAmount] = useState(0)
  const [alertVisible, setAlertVisible] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)
  const [editProduct, setEditProduct] = useState(location.state.product)

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name)
      setDescription(editProduct.description)
      setQuantity(editProduct.quantity)
      setUnit(editProduct.unit)
      setUnitPrice(editProduct.unitPrice)
      setMovements(editProduct.movements)
      setAmount(editProduct.amount)
    }
  }, [editProduct])

  useEffect(() => {
    const value = Number(quantity) * Number(unitPrice)

    setEditProduct({ ...editProduct, amount: value })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, unitPrice])

  const handleClick = async (event) => {
    event.preventDefault()

    try {
      let result

      editProduct._id
        ? (result = await patchUpdateProduct({ ...editProduct }))
        : (result = await postNewProduct({ ...editProduct }))

      if (result.status === 200) {
        setAlertVisible(false)
        setSuccessVisible(true)
        setRefreshList(true)
        setInsertProduct(false)
        setEditProduct(null)
        setSelectedProduct({})
      }
    } catch (e) {
      setAlertVisible(true)
      setSuccessVisible(false)
    }
  }

  const handleInputChange = (event) => {
    const target = event.currentTarget

    setAlertVisible(false)
    setSuccessVisible(false)
    if (target.value || target.selected) {
      const value = target.type === 'select' ? target.selected : target.value
      // eslint-disable-next-line no-shadow
      const { name } = target

      setEditProduct({ ...editProduct, [name]: value })
    }
  }

  const Alert = () => (
    <div className="alert">
      <p>Não foi possível Salvar o Produto!</p>
      <p>Verifique se todos os campos estão preenchidos e tente novamente!</p>
    </div>
  )

  const Success = () => (
    <div className="sucess">
      <p>Produto cadastrado com successo!</p>
    </div>
  )

  return (
    <>
      {alertVisible ? <Alert /> : null}
      {successVisible ? <Success /> : null}
      <div className="insert-product">
        <h1>InsertProduct</h1>
        <form action="">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            required
            name="name"
            id="name"
            onChange={handleInputChange}
            value={name}
          />

          <label htmlFor="name">Descrição: </label>
          <input
            type="text"
            required
            name="description"
            id="description"
            onChange={handleInputChange}
            value={description}
          />

          <label htmlFor="quantity">Quantidade: </label>
          <input
            type="number"
            required
            name="quantity"
            id="quantity"
            onChange={handleInputChange}
            value={quantity}
          />

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="unit" className="lg:w-1/2 w-full lg:p-2">
              Unidade:
            </label>
            <select
              name="unit"
              id="unit"
              className="lg:w-1/2 w-full lg:p-2"
              onChange={handleInputChange}
              required
              value={unit}
            >
              <option value="" disabled>
                Selecione a unidade
              </option>
              <option value="cx's">Caixa(s)</option>
              <option value="fl's">Folha(s)</option>
              <option value="lt">Litro(s)</option>
              <option value="resmas">Resma(s)</option>
              <option value="un">Unidade(s)</option>
            </select>
          </div>

          <label htmlFor="unitPrice">Preço Unitário: </label>
          <input
            type="number"
            required
            name="unitPrice"
            id="unitPrice"
            onChange={handleInputChange}
            value={unitPrice}
          />

          <label htmlFor="amount">Saldo: </label>
          <input
            type="text"
            disabled
            name="amount"
            id="amount"
            value={amount.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          />

          <label htmlFor="movements">Movimentações: </label>
          <input
            type="textBox"
            disabled
            name="movements"
            id="movements"
            value={movements}
          />

          <Button onClick={handleClick}>Salvar</Button>
        </form>
      </div>
    </>
  )
}

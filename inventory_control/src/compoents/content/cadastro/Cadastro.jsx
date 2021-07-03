import React, { useState, useEffect} from "react";
import { useLocation, Redirect } from "react-router";
import {patchUpdateProduct, postNewProduct} from "../../../services/apiService";
import properties from "../Components/Button/properties.json";
import Button from "../Components/Button/Button";

export default function Cadastro(props) {

  const location = useLocation()

  const [alertVisible, setAlertVisible] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)
  const [editProduct, setEditProduct] = useState(location.state.product)
  const [redirect, setRedirect] = useState(false)
  const [name, setName] = useState(editProduct.name)
  const [description, setDescription] = useState(editProduct.description)
  const [quantity, setQuantity] = useState(editProduct.quantity)
  const [unit, setUnit] = useState(editProduct.unit)
  const [amount, setAmount] = useState(editProduct.amount)
  const [unityValue, setUnityValue] = useState(editProduct.unityValue)


  const handleClick = async (event) => {
    event.preventDefault()

    try{

      let result;

      editProduct._id
        ? result = await patchProduct({...editProduct})
        : result = await postProduct({...editProduct})

      if (result.status === 200) {
        setAlertVisible(false)
        setSuccessVisible(true)
        props.atualizaListaDeProdutos(true)
        setRedirect(true)
      }

    }catch (e) {
      setAlertVisible(true)
      setSuccessVisible(false)
    }
  }

  useEffect(() => {
    setName(editProduct.name)
    setDescription(editProduct.description)
    setQuantity(editProduct.quantity)
    setUnit(editProduct.unit)
    setUnityValue(editProduct.unityValue)
  }, [editProduct, quantity, unityValue])

  function setAmountInEditProduct() {
     setEditProduct({...editProduct, amount})
  }

  useEffect(() => {
    const newAmount = Number(quantity) * (unityValue)
    setAmount(newAmount.toFixed(2));
    setAmountInEditProduct()
  }, [quantity, unityValue])

  const handleInputChange = (event) => {

    const target = event.currentTarget

    setAlertVisible(false)
    setSuccessVisible(false)
    if (target.value || target.selected) {
      const value = target.type === "select" ? target.selected : target.value
      const name = target.name;

      setEditProduct({...editProduct, [name]: value})
    }
  }


  const postProduct = async (editProduct) => {
    return await postNewProduct(editProduct);
  }

  const patchProduct = async (editProduct) => {
    return await patchUpdateProduct(editProduct)
  }

  const Alert = () => (
      <div className=" container bg-red-200 relative text-center text-red-500 py-3 px-3 rounded-lg">
        <p>Não foi possível Salvar o Produto!</p>
          <p>Verifique se todos os campos estão preenchidos e tente novamente!</p>
      </div>
  )

  const Success = () => (
    <div className=" container bg-green-200 relative text-center text-green-500 py-3 px-3 rounded-lg">
      <p>Produto cadastrado com successo!</p>
    </div>
  )


  const formatValues = (value) => {
    let valor = value
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    if(valor === 'NaN') setAmount(0);

    return valor
  }


  return (
    <>
      {redirect? <Redirect to="/" />: null}
      {alertVisible? <Alert/> : null}
      {successVisible? <Success /> : null}
      <div className="container bg-gray-200 p-2 my-4 rounded-xl flex-grow">
        <h1 className="text-center font-semibold text-4xl text-black my-8">Cadastro de Produtos</h1>

        <form id="form" className="grid lg:grid-cols-1 gap-2 md:grid-cols-1 sm:grid-cols-1">

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="name" className="lg:w-1/2 w-full lg:p-2">Nome: </label>
            <input type="text" name="name" id="name" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                   required={true} value={name}/>
          </div>

          <div className="rounded-xl w-full lg:p-6 text-center my-1">
            <label htmlFor="description" className="lg:w-1/2 w-full lg:p-2">Descrição: </label>
            <input type="text" name="description" id="description" className="lg:w-1/2 w-full lg:p-2"
                   onChange={handleInputChange} required={true} value={description}/>
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="quantity" className="lg:w-1/2 w-full lg:p-2">Quantidade: </label>
            <input type="number" name="quantity" id="quantity" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                   required={true} value={quantity}/>
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="unityValue" className="lg:w-1/2 w-full lg:p-2">Preço unitário: </label>
            <input type="number" name="unityValue" id="unityValue" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                   required={true} value={unityValue}/>
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="amount" className="lg:w-1/2 w-full lg:p-2">Valor: </label>
            <input type="text" name="amount" id="amount" className="lg:w-1/2 w-full lg:p-2"
              required={true} value={formatValues(amount)} disabled/>
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="unit" className="lg:w-1/2 w-full lg:p-2">Unidade: </label>
            <select name="unit" id="unit" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                    required={true} value={unit}>
              <option value="" disabled={true}>Selecione a unidade</option>
              <option value="cx's">Caixa(s)</option>
              <option value="fl's">Folha(s)</option>
              <option value="lt">Litro(s)</option>
              <option value="resmas">Resma(s)</option>
              <option value="un">Unidade(s)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Imagem do Produto
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                     aria-hidden="true">
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload"
                         className="relative cursor-pointer bg-white rounded-md font-medium text-green-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 text-right sm:px-6">
            <Button onClick={handleClick} properties={properties.success} text="Salvar" />
          </div>

        </form>
      </div>
    </>
  )
}
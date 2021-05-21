import React, { useState } from "react";
import {postNewProduct} from "../../../services/apiService";



export default function Cadastro({atualizaListaDeProdutos}) {

  const [alertVisible, setAlertVisible] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)
  const [editProduct, setEditProduct] = useState({})


  const handleClick = async (event) => {
    event.preventDefault()
    
    try{
      
      const result = await postProduct({...editProduct})

      if (result.status === 200) {
        document.getElementById("form").reset()
        setEditProduct({})
        setAlertVisible(false)
        setSuccessVisible(true)
        atualizaListaDeProdutos(true)
      }

    }catch (e) {
      setAlertVisible(true)
      setSuccessVisible(false)
    }

  }

  

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

  const postProduct = async (newProduct) => {
    return await postNewProduct(editProduct);
  }

const Alert = () => (
      <div className=" container bg-red-200 relative text-center text-red-500 py-3 px-3 rounded-lg">
        <p>Não foi possível Salvar o Produto!</p>
          <p>Verifique se todos os campos estão preenchidos e tente novamente!</p>
      </div>
)

const Success = () => (
    <div className=" container bg-green-200 relative text-center text-green-500 py-3 px-3 rounded-lg">
    <p>Produto cadastrado com sucesso!</p>
  </div>
)


  return (
    <>
      {alertVisible? <Alert/> : null}
      {successVisible? <Success /> : null}
      <div className="container bg-gray-200 p-2 my-4 rounded-xl flex-grow">
        <h1 className="text-center font-semibold text-4xl text-black my-8">Cadastro de Produtos</h1>

        <form id="form" className="grid lg:grid-cols-1 gap-2 md:grid-cols-1 sm:grid-cols-1">

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="name" className="lg:w-1/2 w-full lg:p-2">Nome: </label>
            <input type="text" name="name" id="name" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                   required={true} />
          </div>

          <div className="rounded-xl w-full lg:p-6 text-center my-1">
            <label htmlFor="description" className="lg:w-1/2 w-full lg:p-2">Descrição: </label>
            <input type="text" name="description" id="name" className="lg:w-1/2 w-full lg:p-2"
                   onChange={handleInputChange} required={true} />
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="amount" className="lg:w-1/2 w-full lg:p-2">Quantidade: </label>
            <input type="text" name="amount" id="name" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                   required={true} />
          </div>

          <div className="rounded-xl w-full lg:p-6  text-center my-1">
            <label htmlFor="unit" className="lg:w-1/2 w-full lg:p-2">Unidade: </label>
            <select name="unit" id="unit" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                    required={true} >
              <option value="" readOnly={true}>Selecione a unidade</option>
              <option value="cx's">Caixa(s)</option>
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
                         className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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

          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" onClick={handleClick}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>

        </form>
      </div>
    </>
  )
}
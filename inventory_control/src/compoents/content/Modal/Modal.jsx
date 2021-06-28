import React, { useState, useEffect } from 'react';
import properties from '../Components/Button/properties.json';
import Button from '../Components/Button/Button';
import { patchUpdateProduct } from '../../../services/apiService';


export default function Modal({
  product, onCancel, atualizaListaDeProdutos, 
}) {
  const [movement, setmovement] = useState({});
  const [transactionType, setTransactionType] = useState("")
  const [vendor, setVendor] = useState(" ")
  const [quantity, setQuantity] = useState(" ")
  //const [unitValue, setUnitValue] = useState(" ")



  const handleInputChange = (event) => {
    const target = event.currentTarget;
    if (target.value || target.selected) {
      const value = target.type === "select" ? target.selected : target.value
      const name = target.name;
      setmovement({ ...movement, [name]: value });
    }
  };

  useEffect(() => {
    setTransactionType(movement.transactionType)
    setVendor(movement.vendor)
    setQuantity(movement.quantity)
    //setUnitValue(movement.unitValue)
  }, [movement])

   const patchProduct = async (product) => {
    product.movements.unshift(movement);

    if (!transactionType.localeCompare('incoming')) {
      product.quantity += Number(movement.quantity);
      product.amount = (Number(product.unityValue) * product.quantity).toFixed(2)
      //+ (Number(movement.quantity) * Number(movement.unitValue));
    } else {
        if(product.quantity >= movement.quantity) {
            product.quantity -= Number(movement.quantity);
            product.amount = (Number(product.unityValue) * product.quantity).toFixed(2)
            //     - (Number(movement.quantity) * Number(movement.unitValue));
        }else {
            alert("O valor de saída é maior que o de entrada!")
            return
        }
    }

    if (product.quantity <= 0) {
      product.quantity = 0;
      product.amount = 0;
    } 

    const result = await patchUpdateProduct(product);
    if (result.status === 200) {
      atualizaListaDeProdutos(true);
      onCancel()
    }
  };

  return (
    <div className="inset-0 z-50 overflow-auto bg-smoke-light flex ">
      <div className="bg-black opacity-50 w-full h-full absolute z-10 inset-0" />
      <div className="bg-gray-200 rounded-lg md:max-w-md md:mx-auto p-4 inset-x-0 bottom-0 z-50 mb-4 mx-4 xl:relative">
        <div className="md:flex-grow">
          <h1 className="text-center font-semibold text-4xl text-black">
            Cadastrar Transação
          </h1>

           <div className="rounded-xl w-full lg:p-6  text-center">
              <h3 className="text-center font-semibold text-4xl text-black ">
                Nome: {product.name}
              </h3>

            </div>

          <form id="form" className="flex-col ">

            <div className="rounded-xl w-full lg:p-6  text-center">
              <label htmlFor="transactionType" className="lg:w-1/2 w-full lg:p-2">Tipo de Transação: </label>
              <select name="transactionType" id="transactionType" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                      required={true} value={transactionType}>
                <option value="" readOnly={true}>Selecione o tipo</option>
                <option value="incoming">Entrada</option>
                <option value="outgoing">Saída</option>
              </select>
            </div>

            <div className="rounded-xl w-full lg:p-6  text-center">
              <label htmlFor="vendor" className="lg:w-1/2 w-full lg:p-2">
                  {transactionType === 'incoming' ? 'Fornecedor' : 'Projeto'}
              </label>
              <input
                type="text"
                name= {transactionType === 'incoming' ? 'Fornecedor' : 'Projeto'}
                id="vendor"
                className="lg:w-1/2 w-full lg:p-2"
                onChange={handleInputChange}
                required
                value={vendor}
              />
            </div>

            <div className="rounded-xl w-full lg:p-6  text-center">
              <label htmlFor="quantity" className="lg:w-1/2 w-full lg:p-2">
                Quantidade:
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                className="lg:w-1/2 w-full lg:p-2"
                onChange={handleInputChange}
                required
                value={quantity}
              />
            </div>
            {/*{quantity? (<div className="rounded-xl w-full lg:p-6  text-center">*/}
            {/*  <label htmlFor="unitValue" className="lg:w-1/2 w-full lg:p-2">*/}
            {/*    Preço Unitário:*/}
            {/*  </label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    name="unitValue"*/}
            {/*    id="unitValue"*/}
            {/*    className="lg:w-1/2 w-full lg:p-2"*/}
            {/*    onChange={handleInputChange}*/}
            {/*    required*/}
            {/*    value={unitValue}*/}
            {/*  />*/}
            {/*</div>)*/}
            {/*: null }*/}

          </form>

        </div>
        <div className="grid lg:grid-cols-2  place-items-center md:grid-cols-1 sm:grid-cols-1 p-4">
          <Button onClick={onCancel} properties={properties.cancel} text="Cancelar" />
          <Button onClick={() => patchProduct(product)} properties={properties.success} text="Salvar"/>
        </div>
      </div>
    </div>

  );
}

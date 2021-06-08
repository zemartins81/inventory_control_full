import React, {useEffect, useState} from 'react';
import properties from "../Components/Button/properties.json";
import Button from "../Components/Button/Button";
import {patchUpdateProduct} from "../../../services/apiService";

export default function Modal({ productModal, onCancel, atualizaListaDeProdutos, type }) {

    const [movement, setmovement] = useState({type})

        useEffect(() => {});

    const handleInputChange = (event) => {
        const target = event.currentTarget
        if (target.value) {
            const value = target.value
            const name = target.name;
            setmovement({...movement, [name]: value})
        }
    }

    const patchProduct = async (productModal) => {
        console.log({...productModal})
        productModal.movements.add(movement)
        const result = await patchUpdateProduct({...productModal})
        if (result.status === 200) {
            atualizaListaDeProdutos(true)
        }
    }


    return (
        <div className="inset-0 z-50 overflow-auto bg-smoke-light flex ">
            <div className="bg-black opacity-50 w-full h-full absolute z-10 inset-0"/>
            <div className="bg-gray-200 rounded-lg md:max-w-md md:mx-auto p-4 inset-x-0 bottom-0 z-50 mb-4 mx-4 xl:relative">
                <div className="md:flex-grow">
                    <h1 className="text-center font-semibold text-4xl text-black my-8">Cadastro de Produtos</h1>

                    <form id="form" className="grid lg:grid-cols-1 gap-2 md:grid-cols-1 sm:grid-cols-1">

                        <div className="rounded-xl w-full lg:p-6  text-center my-1">
                            <label htmlFor="name" className="lg:w-1/2 w-full lg:p-2">Nome: </label>
                            <input type="text" name="name" id="name" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                                   disabled={true} value={productModal.name}/>
                        </div>

                        <div className="rounded-xl w-full lg:p-6  text-center my-1">
                            <label htmlFor="vendor" className="lg:w-1/2 w-full lg:p-2">Fornecedor: </label>
                            <input type="text" name="vendor" id="vendor" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                                   required={true} value={movement.vendor} />
                        </div>

                        <div className="rounded-xl w-full lg:p-6  text-center my-1">
                            <label htmlFor="quantity" className="lg:w-1/2 w-full lg:p-2">Quantidade: </label>
                            <input type="text" name="quantity" id="quantity" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                                   required={true} value={movement.quantity} />
                        </div>

                        <div className="rounded-xl w-full lg:p-6  text-center my-1">
                            <label htmlFor="unitValue" className="lg:w-1/2 w-full lg:p-2">Preço Unitário: </label>
                            <input type="text" name="unitValue" id="unitValue" className="lg:w-1/2 w-full lg:p-2" onChange={handleInputChange}
                                   required={true} value={movement.unitValue}/>
                        </div>

                    </form>

                </div>
                <div className="grid lg:grid-cols-2  place-items-center md:grid-cols-1 sm:grid-cols-1 p-4">
                    <Button onClick={onCancel} properties={properties.cancel} text="Cancelar" />
                    <Button onClick={patchProduct} properties={properties.success} text="Salvar" />
                </div>
            </div>
        </div>

    );
};
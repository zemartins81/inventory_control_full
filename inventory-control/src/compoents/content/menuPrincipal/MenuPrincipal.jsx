import React from "react";
import {Link} from "react-router-dom";

export default function MenuPrincipal(atualizaListaDeProdutos) {

  

  return (
  <div className="container bg-green-400 p-4 my-4 rounded-xl flex-grow shadow-md">
    <h1 className="text-center font-semibold text-4xl text-white mb-8">Controle de Estoque</h1>

    <div className="grid lg:grid-cols-2  place-items-center md:grid-cols-1 sm:grid-cols-1">
      <div>
        <Link to="/" className=" text-white px-16 py-2 text-xl font-medium hover:text-green-600 " >
          Produtos
        </Link>
      </div>
      <div>
        <Link to="/cadastrar_produtos" className=" text-white px-16 py-2 text-xl font-medium hover:text-green-600">
          Cadastrar Produto
        </Link>
      </div>
    </div>
  </div>
  )
}


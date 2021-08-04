import React from 'react'
import './home.css'
import estoque from '../../assets/img/estoque.png'

export default function Home() {
  return (
    <>
      <div className="home">
        <aside>
          <img src={estoque} alt="Imagem de uma prateleira cheia de produtos" />
          <strong>Controle de Estoque - IESES</strong>
        </aside>
        <main>
          <div className="main-content">
            <h2>
              Ja possui cadastro? <br />
              Entre Aqui
            </h2>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="acessar">Acessar</button>
          </div>
        </main>
      </div>
    </>
  )
}

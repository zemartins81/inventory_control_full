import React, { useContext, useState } from 'react'
import './home.css'
import estoque from '../../assets/img/estoque.png'
import Button from '../../components/button/Button'
import { Context } from '../../context/AuthContext'

export default function Home() {
  const [accessLogin, setAccessLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin } = useContext(Context)

  const handleClick = () => {
    setAccessLogin(true)
  }

  const handleSession = async (event) => {
    event.preventDefault()
    await handleLogin(email, password)
  }
  const data = !accessLogin ? (
    <div className="main-content">
      <h2>
        Ja possui cadastro? <br />
      </h2>
      {/* eslint-disable-next-line react/button-has-type */}
      <Button className="button" onClick={handleClick}>
        Acessar
      </Button>
    </div>
  ) : (
    <div className="main-content">
      <form>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Digite seu e-mail"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <br />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          className="password"
          id="password"
          placeholder="Digite sua senha"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <Button type="submit" className="button" onClick={handleSession}>
          Entrar
        </Button>
      </form>
      <form action="" />
    </div>
  )

  return (
    <>
      <div className="home">
        <aside>
          <img src={estoque} alt="Imagem de uma prateleira cheia de produtos" />
          <strong>Controle de Estoque - IESES</strong>
        </aside>
        <main>{data}</main>
      </div>
    </>
  )
}

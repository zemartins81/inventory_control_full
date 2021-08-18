import { useContext } from 'react'
import './header.css'
import Button from '../button/Button'
import { Context } from '../../context/AuthContext'
import estoque from '../../assets/img/estoque.png'

// eslint-disable-next-line react/prop-types
export default function Header({ insertProduct }) {
  const { handleLogout } = useContext(Context)
  return (
    <header>
      <div className="header_left">
        <img src={estoque} alt="" />
        <h1>Controle de Estoque</h1>
      </div>
      <div className="header-right">
        <Button
          type="submit"
          className="button_header"
          onClick={() => insertProduct(false)}
        >
          Início
        </Button>
        <Button
          type="submit"
          className="button_header"
          onClick={() => insertProduct(true)}
        >
          Cadastrar um Produto
        </Button>
        <Button type="submit" className="button_header" onClick={handleLogout}>
          Relatórios
        </Button>
        <Button
          type="submit"
          className="button_header sair"
          onClick={handleLogout}
        >
          Sair
        </Button>
      </div>
    </header>
  )
}

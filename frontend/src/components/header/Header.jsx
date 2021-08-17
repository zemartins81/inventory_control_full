import { useContext } from 'react'
import { Link } from 'react-router-dom'
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
          className="button"
          onClick={() => insertProduct(false)}
        >
          Início
        </Button>

        <Button type="button" className="button">
          <Link
            to={{
              pathname: `/produtos`,
              state: {
                product: {
                  name: '',
                  description: '',
                  price: 0,
                  quantity: 0,
                  amount: 0,
                },
              },
            }}
            className="linkInsert"
            onClick={() => insertProduct(true)}
          >
            Cadastrar um Produto
          </Link>
        </Button>

        <Button type="submit" className="button" onClick={handleLogout}>
          Relatórios
        </Button>
        <Button type="submit" className="button sair" onClick={handleLogout}>
          Sair
        </Button>
      </div>
    </header>
  )
}

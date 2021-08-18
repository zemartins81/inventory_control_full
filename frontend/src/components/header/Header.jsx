import { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
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

        <Link
          to={{
            pathname: `/produtos`,
            state: {
              product: {
                name: '',
                description: '',
                quantity: 0,
                unit: '',
                unitPrice: 0,
                movements: [],
                amount: 0,
              },
            },
          }}
        >
          <Button
            type="submit"
            className="button"
            onClick={() => insertProduct(true)}
          >
            Cadastrar um Produto
          </Button>
        </Link>

        <Button type="submit" className="button" onClick={handleLogout}>
          Relatórios
        </Button>
        <Button type="submit" className="logout button" onClick={handleLogout}>
          Sair
        </Button>
      </div>
    </header>
  )
}

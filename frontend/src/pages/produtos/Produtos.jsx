import { useContext } from 'react'
import Button from '../../components/button/Button'
import { Context } from '../../context/AuthContext'

export default function Produtos() {
  const { handleLogout } = useContext(Context)
  return (
    <div>
      <h1>Produtos</h1>
      <Button type="submit" onClick={handleLogout}>
        Sair
      </Button>
    </div>
  )
}

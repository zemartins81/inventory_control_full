import { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import { Context } from '../../context/AuthContext'
import { getProducts } from '../../services/databaseService'

export default function Produtos() {
  const { handleLogout } = useContext(Context)
  const [products, setProducts] = useState([])

  useEffect(async () => {
    await setProducts(getProducts())
    console.log(products)
  }, [])

  return (
    <div>
      <h1>Produtos</h1>

      <Button type="submit" onClick={handleLogout}>
        Sair
      </Button>
    </div>
  )
}

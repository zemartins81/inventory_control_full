import React, {useEffect, useState} from 'react'
import Products from '../compoents/content/products/Products'
import {getProductList} from '../services/apiService'
import Loading from "../compoents/content/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cadastro from "../compoents/content/cadastro/Cadastro";
import MenuPrincipal from "../compoents/content/menuPrincipal/MenuPrincipal";
import Card from '../compoents/content/products/Card'

export default function ProductList( ) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshList, setRefreshList] = useState(false)
  const [filterValue, setFilterValue] = useState("")
  //const [editProduct, setEditProduct] = useState([])

  useEffect(() => {
    const getAllProducts = async() => {
      const productsList = await getProductList()
      const orderedList = await productsList.data.sort(function (a, b) {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      })
      setProducts(orderedList);
    }

    getAllProducts()
      .then(() => {
        setLoading(false)
        setRefreshList(false)
      })
      .catch(() => alert("Não foi possível conectar ao Servidor!"));

  }, [refreshList]);


const newListProducts = filterValue.trim() === '' ? [...products] : products.filter(product => product.name.toLowerCase().includes(filterValue.toLowerCase()))


const atualizaListaDeProdutos = (value) => {
  setRefreshList(value)
}

const handleFilterChange = (event) => {
  setFilterValue(event.currentTarget.value)
}


  let data = (
    <div className="flex flex-row items-center justify-center">
      <Loading/>
    </div>
  )

  if (!loading) data = (
      <Switch>
        <Route path={`/produtos/:id`}>
          <Cadastro atualizaListaDeProdutos={atualizaListaDeProdutos} />
        </Route>
        <Route path="/">
        <div>
            <input
               type="text"
               name="findProducts"
               className="container my-2 text-xl px-3 py-3 bg-gray-50 rounded shadow-md outline-none focus:outline-none focus:shadow-outline "
               placeholder="Busca Produtos"
               value={filterValue}
               onChange={handleFilterChange}
               />  
        </div>
          <Products>
            {newListProducts.map(product => <Card product={product} key={product._id} />)}
          </Products>
        </Route>
      </Switch>
  )


  return (
        <Router>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <MenuPrincipal />
          </div>

          <div className="container  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {data}
          </div>
        </Router>
    )
}

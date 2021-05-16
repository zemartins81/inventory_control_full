import React, {useEffect, useState} from 'react'
import Products from '../compoents/content/products/Products'
import {getProductList} from '../services/apiService'
import Loading from "../compoents/content/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cadastro from "../compoents/content/cadastro/Cadastro";
import MenuPrincipal from "../compoents/content/menuPrincipal/MenuPrincipal";

export default function ProductList() {
  const [allProducts, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAllProducts = async() => {
      const productsList = await getProductList()
      setProducts(productsList.data);

      setTimeout(() => {
        setLoading(false)
      }, 500)
    }

    getAllProducts();

  }, [allProducts]);

  let data = (
    <div className="flex flex-row items-center justify-center">
      <Loading/>
    </div>
  )

  if (!loading) data = (
      <Switch>
        <Route path="/projetos">
          <Cadastro />
        </Route>
        <Route path="/">
          <Products products={allProducts}/>
        </Route>
      </Switch>
  )

  return (
        <Router>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuPrincipal/>
        </div>

        <div className="container  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {data}
        </div>

        </Router>
    )
}

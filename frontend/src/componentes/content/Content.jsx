import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from './products/ProductList'
import PG2 from './PG2'

export default function Content(props) {
    const {productList} = props
    return (
        <main className="Content">
        <Switch>
            <Route exact path="/">
                <ProductList products={productList}/>
            </Route>
            <Route  path="/pg2">
                <PG2 />
            </Route>
            </Switch>
        </main>
    )
}
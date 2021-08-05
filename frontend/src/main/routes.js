import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../context/AuthContext'

import Home from '../pages/home/Home'
import Produtos from '../pages/produtos/Produtos'

// eslint-disable-next-line react/prop-types
function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context)

  if (loading) {
    return <h1>Loading....</h1>
  }

  if (isPrivate && !authenticated) return <Redirect to="/" />

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute isPrivate exact path="/produtos" component={Produtos} />
    </Switch>
  )
}

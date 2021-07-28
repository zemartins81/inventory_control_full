import './App.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Produtos from '../pages/produtos/Produtos'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/produtos" exact component={Produtos} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from "react";
import Header from './componentes/header/Header'
import Content from './componentes/content/Content'
import "./App.css";
import { BrowserRouter as Router } from  'react-router-dom'
import Container from '@material-ui/core/Container';


function App() {

  return <Container maxWidth="lg" align="center">
    <Router>
          <Header/>
          <Content/>
    </Router>
  </Container>;
}

export default App;

import React from 'react';
import 'materialize-css';
import { Icon, Navbar, NavItem } from 'react-materialize';



export default function Menu() {

  return (

    <Navbar className="teal lighten-2"
  alignLinks="left"
  brand={<a className="brand-logo right" href="/">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
<NavItem href="/" className="waves-effect waves-light">
            Home
        </NavItem>
    
        <NavItem href="/pg2"  className="waves-effect waves-light">
              Pg2
        </NavItem>
        <NavItem href="/" className="waves-effect waves-light" >
            Home
        </NavItem>
        <NavItem href="/pg2"  className="waves-effect waves-light">
              Pg2
        </NavItem>

    </Navbar>

  )
}
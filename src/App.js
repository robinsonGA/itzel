import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Error from './components/Error';
import Blog from './components/Blog';
import Tienda from './components/Tienda';
const App = () => {
  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
      <Switch>
        <Route path="/" exact={true} component={Inicio} />
        <Route path="/blog" component={Blog} />
        <Route path="/tienda" component={Tienda}/>
        <Route component={Error} />
      </Switch>
      </main>
    </Contenedor >
  );
}

const Contenedor = styled.div`
    max-width: 100%;
    padding: 40px;
    width: 90%;
    display: grid;
    grid-template-columns: (2fr 1fr);
    grid-template-rows: (0.5fr,1fr);
    gap: 10px;
    // background:#FEB4DE;
    margin: 40px 0;
    // border-radius: 10px;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    
`;

const Menu = styled.nav`
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    max-height: 100%;
    height:300px;
    text-align: center;
    background-color: #FB85C8;
    grid-column: span 2;
    grid-row: 1;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #F55CB3;
        text-decoration: none;
    }
`;
export default App;
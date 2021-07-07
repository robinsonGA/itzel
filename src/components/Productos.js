import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import productosPinata from '../data/productos';
import Paginacion from './Paginacion';
const Productos = () => {
    const [productos, setProductos] = useState(productosPinata);
    const [cargando, setCargando] = useState(false);
    const [paginaActual, setPaginaActual] = useState(1);
    const [productosPorPagina] = useState(3);

    useEffect(() => {
        setCargando(true);
        if (productos.length > 0) {
            setCargando(false);
        }
    }, []);
    const indiceDelUltimoProducto = paginaActual * productosPorPagina;
    const indiceDelPrimerProducto = indiceDelUltimoProducto - productosPorPagina;
    const productoActuales = productos.slice(indiceDelPrimerProducto, indiceDelUltimoProducto)
    console.log(indiceDelPrimerProducto, indiceDelUltimoProducto);
    const paginar = (numeroDepagina) => setPaginaActual(numeroDepagina);

    if (cargando) {
        return <h2>...cargando</h2>;
    }

    return (
        <ContenedorProductos>
            {
                productoActuales.map((producto, index) => {
                    return (
                        <Producto key={index}>
                            <img src={producto.img} />
                            <Descripcion>
                                <h1>{producto.nombre}</h1>
                                <p>a filosofía (del griego antiguo φιλοσοφία</p>
                            </Descripcion>
                        </Producto>
                    );
                })
            }
            <div>
            <Paginacion productosPorPagina={productosPorPagina} productosTotales={productos.length} paginar={paginar}></Paginacion>
           
            </div>
            
        </ContenedorProductos>
    );
}
const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 4px;
    padding: 0;
    @media (max-width: 900px) {
        grid-template-columns:repeat(2, 1fr);
        justify-items: center;
        gap: 5px 4px;
        padding: 0;
    }
    
`;
const Descripcion = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  p {
	    color:black;
    }
    @media only screen and (max-width: 600px) {
        p {
            color:black;
            font-size:15px;
        }
    }
`;
const Producto = styled.div`
    display: flex;
    position:relative;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    border-radius: 8px;
    text-align: center;
    background:#FFF1F9;
    width:330px;
    height:430px;
    margin:10px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    transition: all 0.25s;
 
    img{
        width:330px;
        height:400px;
    }
    h1{
        padding:0;
        font-size:20px;
        text-align: center;
        letter-spacing:3px;
        color:#6a6a6a;
    }
    &:hover {
        transform:translateY(-15px);
        box-shadow:0 12px 16px rgba(0,0,0,0,0.2);
    }
    @media (max-width: 600px) {
        width:170px;
        height:230px;
        //overflow:hidden;
        img{
            width:170px;
            height:220px;
        }
        h1{
            font-size:15px;
            text-align: center;
            letter-spacing:3px;
        }
    }
    @media (max-width: 1166px) {
        width:250px;
        height:250px;
        overflow:hidden;
        img{
            width:250px;
            height:240px;
        }
        h1{
            font-size:15px;
            text-align: center;
            letter-spacing:3px;
        }
    }
`;
export default Productos;
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import productos from '../data/productos';
const Productos = () => {
    return (
        <div>
            <Titulo> productos</Titulo>
            <ContenedorProductos>
                {
                    productos.map((producto, index) => {
                        return (
                            <Producto key={index}>
                                <img src={producto.img} />
                               <Descripcion>
                               <h2>{producto.nombre}</h2>
                                <p>a filosofía (del griego antiguo φιλοσοφία</p>
                               </Descripcion>
                                {/* <Aumentar>
                                    <Botones izquierdo>
                                        <FontAwesomeIcon icon={faMinus} className="formulario-tareas__icon-btn"></FontAwesomeIcon>
                                    </Botones>
                                    <Cantidad type="number"></Cantidad>
                                    <Botones derecho>
                                        <FontAwesomeIcon icon={faPlus} className="formulario-tareas__icon-btn"></FontAwesomeIcon>
                                    </Botones>
                                </Aumentar>
                                <Boton
                                    onClick={()=>{agregarProductoAlCarrito(producto.id,producto.nombre)}}
                                >Agregar al carrito</Boton> */}
                            </Producto>
                        );
                    })
                }
            </ContenedorProductos>
        </div>
    );
}
const Titulo = styled.h1`
    text-align:center;
    margin-bottom:10px;
    color:#FFF1F9;
`;
const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 0;
  justify-items: center;
    
`;
const Descripcion = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  p{
	color:black;
    width:60%;
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
    margin:20px;
    overflow:hidden;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    transition: all 0.25s;
 
    img{
        width:330px;
        height:400px;
    }
    h2{
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
`;

const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;
const Aumentar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
    margin-bottom:10px;
    margin-top:10px;
`;
const Botones = styled.button`
    width:100%;
	background-color:#1c85e8;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    ${props => props.izquierdo && css`
        border-radius:30px 5px 5px 30px;
    `}
    ${props => props.derecho && css`
        border-radius:5px 30px 30px 5px;
    `}
`;
const Cantidad = styled.input`
    width:100%;
	display:inline-block;
    border: 0;
	cursor:pointer;
`;

export default Productos;
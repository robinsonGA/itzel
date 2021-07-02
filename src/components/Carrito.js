import React, { useState } from 'react';
import styled from 'styled-components';
const Carrito = ({ carrito }) => {
    return (
        <div>
            <h3>hola como estas</h3>
            {
                carrito.length > 0 ?
                    carrito.map((producto, index) => {
                        return (
                            <Producto key={index}>
                                <NombreProducto>
                                    {producto.nombre}
                                </NombreProducto>
                                cantidad:{producto.cantidad}
                            </Producto>
                        )

                    })
                    :
                    <p>por ahora no hy nada</p>
            }
        </div>

    );
}

const Producto = styled.div`
padding:10px;
border-bottom: 1px solid #ebebf3;
font-size: 14px;
`;
const NombreProducto = styled.p`
font-weight:bold;
font-size:16px;
color:#000;
`;
export default Carrito;
import React from 'react';
import Productos from './Productos';


const Tienda = ({ productos, agregarProductoAlCarrito }) => {
    return (
            <Productos
                productos={productos}
                agregarProductoAlCarrito={agregarProductoAlCarrito}
            ></Productos>
    );
}

export default Tienda;
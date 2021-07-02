import React from 'react';
import Productos from './Productos';


const Tienda = ({ productos, agregarProductoAlCarrito }) => {
    return (
        <div>
            <Productos
                productos={productos}
                agregarProductoAlCarrito={agregarProductoAlCarrito}
            ></Productos>
        </div>
    );
}

export default Tienda;
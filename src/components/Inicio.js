import React from 'react';
import styled, { css } from 'styled-components';
import vision from "./../assets/img/vision.jpg";
import mision from "./../assets/img/mision.jpg";
const Inicio = () => {
    return (
        <Contenedor>
            <ContenedorImagen>
                <img src={mision} alt="piñata" />
                <Texto>
                    <h1>visión</h1>
                    <p>Nos comprometemos a que las piñatas sean seguras y estén libres de productos que dañen al consumidor. Nuestra visión es la ambiciosa meta que nos impulsa a ser la Piñatería que mayor satisfaga las necesidades de los clientes. Deseamos crear satisfacción total para nuestros clientes y sus invitados en sus celebraciones. </p>
                </Texto>
            </ContenedorImagen>
            <ContenedorImagen>
                <img src={vision} alt="pinata" />
                <Texto>
                    <h1>misión</h1>
                    <p>Trabajamos por nuestros clientes para brindarles productos de buena calidad. Aplicamos el compromiso para la venta de piñatas libre de productos tóxicos, y nos apegamos a las necesidades de los consumidores, nuestra misión es convertirnos en la empresa de piñatas más popular de Altamirano, porque brindamos a los clientes productos de alta calidad y somos reconocidos por su innovación y durabilidad. Esperamos expandir nuestra Área de Influencia por el estado de Chiapas y lograr un alto crecimiento empresarial.</p>
                </Texto>
            </ContenedorImagen>
        </Contenedor>


    );
}
const Contenedor = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 1145px) {
        grid-template-columns:1fr;
      }
`;
const ContenedorImagen = styled.div`
    width:100%;
    max-width:800px;
    margin:50px auto;
    position:relative;
    display:flex;
    align-items:center;
    overflow:hidden;
    
    &:before, &:after {
        content:"";
        position:absolute;
        width:90%;
        height:4px;
        background:#fff;
        transition:all .3s;
    }
    &:before{
        left:-100%; 
        top:10px;
    }
    &:after{
        left:100%;
        bottom:10px
    }
    &:hover:before , &:hover:after{
        left:15px;
    }
    img{
    width:700px;
    height:350px;
    }
    
`;
const Texto = styled.div`
   text-align: center;
   position:absolute;
   h1{
    color:#ffff;
    position:relative;
   }
    p{
        color:#ffff;
        font-size:15px;
        font-weight: 900;
        padding:10px 20px;
    }
    @media only screen and (max-width: 600px) {
        p{
            font-size:13px;
            font-weight: 700;
        }
      }
`;
const Aumentar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
`;
const Boton = styled.button`
    width:100%;
    box-shadow: 0px 10px 14px -7px #276873;
	background-color:#599bb3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;

    ${props => props.izquierdo && css`
        border-radius:40px 10px 10px 40px;
    `}
    ${props => props.derecho && css`
    border-radius:10px 40px 40px 10px;
    `}
`;
const Cantidad = styled.input`
    width:100%;
	display:inline-block;
	cursor:pointer;
`;
export default Inicio;
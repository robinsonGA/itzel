import React from 'react';
import facebook from '../assets/img/facebook.png';
import styled from 'styled-components';

const Pie = () => {
    return (
        <PiePagina>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram-square"></i></a>
            <a href="#"><i className="fab fa-facebook-square"></i></a>
        </PiePagina>
    );
}

const PiePagina = styled.div`
   display:flex;
   justify-content:space-around;
   a{
    color: #fff;
    text-align: center;
    transition: all 0.3s ease;
   }
    a i{
        color:#000;
        font-size: 100px;
    }
    a:hover{
        color:#494c46;
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
`;

export default Pie;
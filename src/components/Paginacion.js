import styled from 'styled-components';
const Paginacion = ({ productosPorPagina, productosTotales, paginar }) => {
    const numeroDePagina = [];
    for (let index = 1; index <= Math.ceil(productosTotales / productosPorPagina); index++) {
        numeroDePagina.push(index);

    }
    console.log(Math.ceil(productosTotales / productosPorPagina));
    return (
        <Pagination>
            <ul>
                {numeroDePagina.map(numero => (
                    <li key={numero}>
                        <a onClick={() => paginar(numero)} href='#'>
                            {numero}
                        </a>
                    </li>
                ))}
            </ul>
        </Pagination>);
}
const Pagination = styled.nav`
    grid-column: span 3;
    @media only screen and (max-width: 900px) {
        grid-column: span 2;
    }
    @media only screen and (max-width: 450px) {
        grid-column: span 1;
    }
    ul{
        display: flex;
        justify-content: center;
    }
    li{
        list-style:none;
        margin-left:10px;
    }
`;
export default Paginacion;
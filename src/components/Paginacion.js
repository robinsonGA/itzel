const Paginacion = ({ productosPorPagina, productosTotales, paginar }) => {
    const numeroDePagina = [];
    for (let index = 1; index <= Math.ceil(productosTotales / productosPorPagina); index++) {
        numeroDePagina.push(index);

    }
    console.log(Math.ceil(productosTotales / productosPorPagina));
    return (
        <nav>
            <ul>
                {numeroDePagina.map(numero => (
                    <li key={numero}>
                        <a onClick={() => paginar(numero)} href='#'>
                            {numero}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>);
}

export default Paginacion;
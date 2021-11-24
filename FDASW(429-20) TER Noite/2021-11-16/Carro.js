function Carro(props) {
    return(
        <>
            <h1>{props.marca} {props.modelo}</h1>
            <ul>
                <li>Marca: {props.marca}</li>
                <li>Modelo: {props.modelo}</li>
                <li>Ano: {props.ano}</li>
                <li>Cor: {props.cor}</li>
            </ul>
        </>
    );
}

export default Carro;
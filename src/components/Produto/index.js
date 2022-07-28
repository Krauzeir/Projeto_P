import './Produto.css'

const Produto = (props) => {

    return (
        <div className="produtos">
            <div>
                <img src={props.img} alt=""></img>
            </div>
            <div>
                <h4>{props.nome}</h4>
                <h5>R$ {props.valor},00</h5>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )
}

export default Produto
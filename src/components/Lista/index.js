import Produto from '../Produto'
import './Lista.css'

const Lista = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    const produtos = [
        {
            img: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/143318-phones-review-hands-on-samsung-galaxy-a8-initial-review-almost-an-s8-for-much-less-image1-s0zxkymu1a.jpg",
            nome: "Samsung",
            valor: 450.00,
            descricao: "É um Iphone"
        },
        {
            img: "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/Sony_Playstation_5_Pro_Rendervideo.jpeg",
            nome: "PS5",
            valor: 150.00,
            descricao: "É um PS5"
        },
        {
            img: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
            nome: "Switch",
            valor: 250.00,
            descricao: "É um Switch"
        }
    ]

    return (
        <>
            <section className="lista" style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}> {props.nome} </h3>
            </section>
            <div>
                {produtos.map(produto => <Produto key={produto.nome} nome={produto.nome} img={produto.img} valor={produto.valor} descricao={produto.descricao} />)}
            </div>
        </>
    )
}

export default Lista
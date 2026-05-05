import Link from "next/link"
import styles from "./card-produto.module.css"
import { formatarPreco } from "@/utils/formatacao"

type Produto = {
    titulo: string,
    descricao: string,
    img: string,
    preco: number, // poderia ser string, mas como vem da api, fica como number
    produtoID: number
}

const CardProduto = ({ titulo, descricao, img, preco, produtoID }: Produto) => {
    return (
        <article className={styles.card_produto}>
            <Link href={"/detalhe-produto/" + produtoID}>
                <img src={img} alt="Produto vendido pela loja."
                    className={styles.img_produto} />
            </Link>
            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                <Link href={"/historico/" + produtoID}>
                    <img src="/imgs/info.svg" alt="ícone que representa histórico" />
                </Link>
                <button>
                    <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                </button>
                <button>
                    <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                </button>
            </div>
        </article>
    )
}

export default CardProduto;
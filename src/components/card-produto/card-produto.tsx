import Link from "next/link"
import styles from "./card-produto.module.css"
import { formatarPreco } from "@/utils/formatacao"

type Produto = {
    titulo: string,
    descricao: string,
    img: string,
    preco: number, // poderia ser string, mas como vem da api, fica como number
    produtoId: number,
    // criando uma props que recebe uma função
    onDelete: (produtoID: number) => void,
    estaLogado: boolean

}

const CardProduto = ({ titulo, descricao, img, preco, produtoId, onDelete, estaLogado }: Produto) => {
    return (
        <article className={styles.card_produto}>
            <Link href={"/detalhe-produto/" + produtoId}>
                <img src={img} alt="Produto vendido pela loja."
                    className={styles.img_produto} />
            </Link>
            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                {estaLogado && (
                <>
                    <Link href={"/historico/" + produtoId}>
                        <img src="/imgs/info.svg" alt="ícone que representa histórico" />
                    </Link>
                    <button onClick={() => onDelete(produtoId)}>
                        <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                    </button>
                    <Link href={"/produto?id=" + produtoId}>
                        <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                    </Link>
                </>
                )}
            </div>
        </article>
    )
}

export default CardProduto;
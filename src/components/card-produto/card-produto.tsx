import styles from "./card-produto.module.css"

const CardProduto = () => {
    return(
        <article className={styles.card_produto}>
            <img src="/imgs/HamburguerAlcatraComBacon.png" alt="Produto vendido pela loja."
                className={styles.img_produto} />
            <h3 className={styles.titulo_produto}>Monster</h3>
            <p className={styles.desc_produto}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>R$35,00</p>
                <button>
                    <img src="/imgs/info.svg" alt="ícone que representa informação" />
                </button>
                <button>
                    <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                </button>
                <button>
                    <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                </button>
            </div>
        </article>
    )
}

export default CardProduto;
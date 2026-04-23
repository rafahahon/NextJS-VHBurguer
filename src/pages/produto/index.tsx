import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
import Link from "next/link";

const Produto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.main_detalhes}>
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do produto">
                        <h1 id="titulo-produto" className={styles.produto_titulo}>Criar Produto</h1>
                        <div className={styles.card_produto}>
                            <label htmlFor="">Nome do produto</label>
                            <input type="text" name="nomeProduto" placeholder="BBQ Especial" required />
                        </div>
                        <div className={styles.card_produto}>
                            <label htmlFor="">Descrição</label>
                            <input type="text" name="descricao" placeholder="Hambúrguer com molho barbecue defumado com cebola caramelizada." required />
                        </div>
                        <div className={styles.card_produto}>
                            <label htmlFor="">Preço (R$) </label>
                            <input type="text" name="preco" placeholder="40,00" required />
                        </div>
                        <div className={styles.card_produto}>
                            <label htmlFor="">Categoria</label>
                            <input type="text" name="categoria" placeholder="Selecione a categoria" required />
                        </div>
                        <Link href="/categoria">Adicionar categoria</Link>
                        <div className={styles.card_produto}>
                            <label htmlFor="">URL da imagem</label>
                            <input type="text" name="imagem" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-" required />
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Produto;
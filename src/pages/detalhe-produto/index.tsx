import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./detalhe-produto.module.css"

const DetalheProduto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.main_detalhes}>
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do produto">
                        <h1 id="titulo-detalhes-produto" className={styles.detalhes_titulo}>Detalhes do X-Bacon</h1>
                        <figure className={styles.card_detalhes_imagem} >
                            <img
                                src="/imgs/HamburguerAlcatraComBacon.png"
                                alt="Hambúrguer sobre uma tábua de madeira, com pão, carne, queijo, bacon, alface, tomate e cebola roxa." />
                        </figure>


                        <div className={styles.card_detalhes_infos}>
                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>

                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Descrição</h2>
                                    <p className={styles.campo_valor}>
                                        Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_dir}`}>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Preço (R$)</h2>
                                    <p className={styles.campo_valor}>
                                        <span className={styles.preco_anterior}>R$45,00</span>
                                        <span className={styles.preco_atual}>R$35,00</span>
                                    </p>
                                </div>

                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Categoria</h2>
                                    <ul className={styles.campo_lista}>
                                        <li>Premium</li>
                                        <li>Artesanal</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DetalheProduto;
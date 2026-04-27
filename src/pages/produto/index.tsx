import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
import Link from "next/link";

const Produto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.main_produto}>
                <section className={`${styles.produto} layout_guide`}>
                    <div className={styles.formulario_produto}>
                        <h1>Criar Produto</h1>
                        <form>
                            <div className={styles.campo_form}>
                                <label htmlFor="">Nome do produto</label>
                                <input type="text" />
                            </div>
                            <div className={styles.campo_form}>
                                <label htmlFor="">Descrição</label>
                                <textarea></textarea>
                            </div>
                            <div className={styles.campo_form}>
                            <label htmlFor="">Preço(R$)</label>
                            <input type="text" />
                            </div>
                            <div className={styles.campo_form}>
                                <label htmlFor="">Categoria</label>
                                <select>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Produto;
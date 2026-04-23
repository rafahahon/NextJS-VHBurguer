import Link from "next/link"
import styles from "./sub-header.module.css"

const SubHeader = () => {
    return (
        <header id={styles.subheader}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hambúrguer." id={styles.logo} />
                <Link id={styles.voltar} href="/home#cardapio">Voltar</Link>
            </div>
        </header>
    )
}

export default SubHeader;
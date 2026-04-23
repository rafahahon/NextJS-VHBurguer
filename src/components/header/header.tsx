// para tornar o site funcional, com links de navegação, precisamos importar o Link
import Link from "next/link";
import styles from "./header.module.css"

// nome com letra maiúscula obrigatório
const Header = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_VH_Burguer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hambúrguer." id={styles.logo}/>
                <nav id={styles.nav_menu}>
                    <a href="#destaques">Destaques</a>
                    <a href="#cardapio">Cardápio</a>
                    <a href="#unidades">Unidades</a>
                    <Link href="/login">Login</Link>
                </nav>
                <button id={styles.btn_icon}>
                    <img src="../imgs/icon_hamburguer.svg" alt="Ícone que representa um hambúrguer para acessar o menu lateral." />
                </button>
            </div>
        </header>
    )
}

export default Header;
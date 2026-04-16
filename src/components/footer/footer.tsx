//criar o footer.tsx
//importar o footer na home
//mexer no module css

import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer do footer que contém como plano de fundo um hamburguer" id={styles.logo} />
                 <nav id={styles.nav_redes}>
                    <a href=""><img src="../imgs/tiktok.png" alt="" /></a>
                    <a href=""><img src="../imgs/face.png" alt="" /></a>
                    <a href=""><img src="../imgs/insta.png" alt="" /></a>
                    <a href=""><img src="../imgs/youtube.png" alt="" /></a>
                </nav>
                <hr id={styles.linha} />
                <p id={styles.copy}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;
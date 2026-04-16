import { INSPECT_MAX_BYTES } from "buffer";
import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"

// ESTRUTURA PADRÃO
const Login = () => {
    return ( // nesse tipo de estrutura, todos os elementos precisam de um pai
        // Abrir e fechar uma tag vazia serve como o pai que não aparece na tela
        <>
            <main id={styles.main}>
                <img src="../imgs/hamburguer_login.png" alt="" />
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required />
                        </div>
                        <a id={styles.esq_senha} href="">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;
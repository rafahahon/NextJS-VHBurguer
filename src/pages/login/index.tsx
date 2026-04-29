import { useState } from "react";
import styles from "./login.module.css"
import { login } from "../api/authService";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

// ESTRUTURA PADRÃO
const Login = () => {

    // obriga o input do email a ter o value e onChange, que servem para verificar o email antes mesmo que o usuário termine de digitar
    // o email armazena, e o setEmail modifica, ou seja, toda vez que um email for digitado, ele vai substituir o anterior 
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter(); // useRouter navigation
    const notificacao = (msg: string) => toast.success(msg); // quando notificação for chamada, vai utilizar o toast com uma mensagem dentro
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        // impede a página de recarregar enquanto usuário está digitando
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Login efetuado!");

            setTimeout(() => { // espera antes de executar
                router.push("/home"); // espera o login ser autenticado e redireciona para home
            }, 2000) // 2 segundos
            
        } catch (error: any) {
            alert(error.message);
        }
    }

    // onSubmit = quando o usuário enviar, vai começar a verificação

    return ( // nesse tipo de estrutura, todos os elementos precisam de um pai
        // Abrir e fechar uma tag vazia serve como o pai que não aparece na tela
        <>
            <ToastContainer />
            <main id={styles.main}>
                <img src="../imgs/hamburguer_login.png" alt="Hambúrguer com ingredientes flutuando em camadas sobre fundo escuro. " />
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required
                                value={senha} onChange={(e) => setSenha(e.target.value)} />
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
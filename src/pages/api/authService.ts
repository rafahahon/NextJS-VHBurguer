import { api } from "./api";

// retorno visual pro usuário 
// await obrigada a função ser async e o export permite exportar a função
export async function login(email: string, senha: string){
    // quando o botao de login for pressionado
    try{
        // requisição:
        // aqui vai o caminho da api (igual no swagger) excluindo apenas o "/api"
        const response = await api.post("Autenticacao/Login", {email, senha});

        console.log("Eba, deu certo!");
        console.log(response);
        // o retorno do login é o token, utilizado para controle de permissões, vamos fazer o tratamento de cada um
        // await serve para esperar um tempo, pois nao sabemos o quanto a requisicao vai demorar
    }catch(error: any){
        throw new Error("E-mail ou senha inválidos")
    }
}
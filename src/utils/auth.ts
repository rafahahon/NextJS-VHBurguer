import secureLocalStorage from "react-secure-storage";


export function verificarAutenticacao(){
                                    // lê o token
    const token = secureLocalStorage.getItem("Token");

    return !!token;
    // token passa a ser booleano
    // se existir informacao dentro do token, ele retorna TRUE
    // se NAO existir info, retorna FALSE
}
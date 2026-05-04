import axios from "axios";
import secureLocalStorage from "react-secure-storage";

// constante com o endereço da api consumida
const apiLocal = "https://localhost:7105/api/"; // barra obrigatória, pra servir com todos os caminhos da api

// criada no caso da api estar na nuvem
const apiRemota = "";

// criar um endereço da api dentro do axios
// identificador da api
export const api = axios.create({
    baseURL: apiLocal
})

// interceptors:
// É um interceptor do Axios
// Ele intercepta (pega) toda requisição antes de ser enviada
api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if(token){
        config.headers.Authorization = "Bearer " + token;
        // config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
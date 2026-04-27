import axios from "axios";

// constante com o endereço da api consumida
const apiLocal = "https://localhost:7105/"; // barra obrigatória, pra servir com todos os caminhos da api

// criada no caso da api estar na nuvem
const apiRemota = "";

// criar um endereço da api dentro do axios
// identificador da api
export const api = axios.create({
    baseURL: apiLocal
})
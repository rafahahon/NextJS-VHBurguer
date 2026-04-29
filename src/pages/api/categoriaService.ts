import { api } from "./api";

// não vai retornar nada, entao não precisa de uma const
export async function cadastrarCategoria(nome: string){
    try{
        await api.post("Categoria", {nome});
    }catch(error: any){
        // throw new Error("Erro ao cadastrar categoria");
        throw new Error(error.response.data);
    }
}

// vai retornar as categorias, então precisa de uma const
export async function listarCategoria(){
    try{
        const response = await api.get("Categoria");
        return response;
    }catch(error: any){
        throw new Error(error.response.data);
    }
}
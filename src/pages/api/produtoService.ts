import { api } from "./api";

type Produto = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[]
}

export async function cadastrarProduto(dados: Produto) {
    try {
        const formData = new FormData(); // pega os dados inseridos pelo usuário e envia para a api

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if (dados.imagem) {
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

    } catch (error: any) {
        throw new Error(error.message);
    }

    await api.post("Produto", FormData);
}
import { api } from "./api";

type Produto = { // É type pois não são informações que vem da api, se fosse seria uma interface
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[]
}

export async function cadastrarProduto(dados: Produto) {
    try {
        const formData = new FormData(); // Madando dados que o usuário passou para a api com o formData
        formData.append("nome", dados.nome); // append -> acrescentando na api, o nome do valor entre parênteses tem que estar igual na api
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if (dados.imagem) {// Verifica se a imagem foi enviada (ela é opcional)
            formData.append("imagem", dados.imagem);
        }

        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString()); // Convertendo o id para string por conta do formData
        })

        await api.post("Produto", formData);

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarProduto() {
    try {
        const response = await api.get("Produto");

        const produtos = response.data.map((produto: any) => ({
            ...produto,
            imagemUrl: `${api.defaults.baseURL}${produto.imagemUrl}`
        }))

        return produtos;

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Produto/" + id);

        const produto = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        }

        return produto;

        }catch (error: any) {
            throw new Error(error.response.data);
        }
}
import Link from "next/link";
import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { notificacao, toastConfirmarExclusao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";

interface Produto {
    produtoID: number,
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string,
    statusProduto: boolean
}

const ListaProduto = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    // salvar as informações de filtro
    const[ordem, setOrdem] = useState("todos");
    // salvar o que for escrito pelo usuário
    const[pesquisa, setPesquisa] = useState("");
    // salva a info do usuário logado
    const[estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarProduto();

            setProdutos(lista);
            console.log(lista);
        } catch (error: any) {
            console.log(error.message)
        }
    }

    function confirmarExclusao(produtoId: number) {
        toastConfirmarExclusao(async () => {
            try {
                await excluirProduto(produtoId);
                setProdutos((ListaAtual) =>
                    ListaAtual.map((produto) =>
                        produto.produtoID === produtoId
                            ? { ...produto, statusProduto: false }
                            : produto
                    )
                )
                notificacao("Produto inativado!")
                listar(); // Recarrega a página quando um produto é deletado
            } catch (error: any) {
                error(error.message)
            }
        })
    }

    useEffect(() => { // Realiza a ação quando a lista produto for renderizada
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, []) 

    // sort -> organizar/ordenar o array
    const produtosfiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => {
        if(ordem === "menor_valor"){
            // se o preco de A é MENOR que o preco de B
            return a.preco - b.preco
        }else if(ordem === "maior_valor"){
            // se o preco de B é MENOR que o preco de A
            return b.preco - a.preco
        }

        return a.produtoID - b.produtoID;
    });

    return (
        <>
            <div id={styles.botoes_home}>
                <select className={styles.botao} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                    Filtrar
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor valor</option>
                    <option value="maior_valor">Maior valor</option>
                </select>
                <div>
                    <label htmlFor="pesquisa">Pesquisa</label>
                    <input type="text" name="pesquisa" id="" placeholder="Digite o nome do produto" value={pesquisa} onChange={(e) => {setPesquisa(e.target.value)}}/>
                </div>
                {estaAutenticado && ( <div id={styles.botoes_direita}>
                    <Link className={styles.botao} href="/promocoes">Promoções</Link>
                    <Link className={styles.botao} href="/produto">Adicionar produtos</Link>
                </div>)}
            </div>
            <div id={styles.cards_produtos}>
                {produtosfiltrados.length > 0 ? produtosfiltrados.map((item) => (
                    <CardProduto
                        key={item.produtoID}
                        produtoId={item.produtoID}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        img={item.imagemUrl}
                        onDelete={confirmarExclusao}
                        estaLogado={estaAutenticado}
                    />
                )) : (
                    <p>Carregando produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;
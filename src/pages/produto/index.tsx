import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto, editarProduto, listarPorId } from "../api/produtoService";
import Toast from "@/components/toast/toast";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { notificacao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";


// tem que estar igual ao banco 
interface Categoria {
  categoriaId: number,
  nome: string
}

const Produto = () => {
  // ao inves de ser uma string, o tipo é categoria que retorna um array com os atributos do tipo
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // as informações não vêm do banco, e sim do usuário
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [imagem, setImagem] = useState<File | null>(null); // permite que a imagem receba 2 tipos de valores
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);
  // const [telaEditar, setTelaEditar] = useState<Boolean>();
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  const router = useRouter();
  const id = router.query.id;
  let telaEditar = id ? true : false;
  // if(id){
  //   setTelaEditar(true);
  // } else {
  //   setTelaEditar(false);
  // }

  async function listarCategoriaEmProduto() {
    const lista = await listarCategoria();

    setCategorias(lista.data);
    console.log(lista.data);
  }

  async function carregarInformacoes() {
    if (!id) return;

    const produto = await listarPorId(Number(id));
    setNome(produto.nome);
    setDescricao(produto.descricao);
    setPreco(produto.preco);
    setCategoriasSelecionadas(produto.categoriasIds)
  }

  async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {

      const dados = {
        nome,
        descricao,
        preco,
        imagem,
        categoriasIds: categoriasSelecionadas
      }

      // await cadastrarProduto(dados)

      if (telaEditar) {
        await editarProduto(Number(id), dados);
        notificacao("Produto editado!")
      } else {
        await cadastrarProduto(dados);
        notificacao("Produto editado!")
      }

    } catch (error: any) {
      console.log(error.message)
    }
  }

  // quando produto for renderizado, a funcao listarCategoriaEmProduto acontece
  useEffect(() => {
    if (!router.isReady) return;

    if (!verificarAutenticacao()) {
      router.push("/home")
      return;
    }
    setEstaAutenticado(true);

    listarCategoriaEmProduto();

    carregarInformacoes();

  }, [router.isReady, id])

// a tela de produto não vai renderizar caso o usuário não esteja autenticado
if (!estaAutenticado) {
  return null;
}

return (
  <>
    <SubHeader />
    <Toast />
    <main className={styles.main_produto}>
      <section className={`${styles.section_flex} layout_guide`}>
        <h1>{telaEditar ? "Editar produto" : "Criar produto"}</h1>
        <form className={styles.formulario_produto} onSubmit={salvarProduto}>
          <div className={styles.campo_form}>
            <label htmlFor="">Nome do produto</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className={styles.campo_form}>
            <label htmlFor="">Descrição</label>
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
          </div>
          <div className={styles.campo_form}>
            <label htmlFor="">Preço(R$)</label>
            <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
          </div>
          <div className={styles.campo_form}>
            <label htmlFor="">Categoria</label>
            <select
              multiple
              value={categoriasSelecionadas.map(String)}
              onChange={(e) => setCategoriasSelecionadas(
                Array.from(e.target.selectedOptions).map((option) => Number(option.value))
              )}>
              {categorias.map((item) => (
                <option value={item.categoriaId} key={item.categoriaId}>{item.nome}</option>
              )
              )}
            </select>

            <a href="/categoria">Criar categoria</a>
          </div>
          <div className={styles.campo_form}>
            <label htmlFor="">Imagem do produto</label>
            <input
              type="file" // o tipo file retorna um array
              onChange={(e) => {
                // arquivo existe? e o campo está preenchido?
                if (e.target.files && e.target.files[0]) {
                  setImagem(e.target.files[0]);
                }
              }}
            />
          </div>
          <button type="submit" id={styles.btn_salvar}>Salvar</button>
        </form>
      </section>
    </main>
    <Footer />
  </>
)
}

export default Produto;
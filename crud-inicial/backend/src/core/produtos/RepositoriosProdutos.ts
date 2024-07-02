import Produto from "./produto";

export default class RepositorioProdutos {
    itens: Produto[] = [new Produto("Colher", 5.99),
    new Produto("Mouse", 39),
    new Produto("teclado", 99.99)];
    obterTodos() {
        return this.itens;
    }

    novo(nome: string, preco: number) {
        const novoProduto = new Produto(nome, preco); 
        this.itens.push(novoProduto);
    }

    obterPorCodigo(codigo: string) {
        const produto = this.itens.find((produto) => produto.codigo === codigo);
        return produto;
    }


    alterarPorCodigo(codigo: string, nome?: string, preco?: number) {
        const indice = this.itens.findIndex((produto) => produto.codigo === codigo);
        if (indice >= 0 && indice < this.itens.length) {
            if (nome) {
                this.itens[indice].nome = nome;
            }
            
            if (preco) {
                this.itens[indice].preco = preco;
            }
        }
    }

    deletarPorCodico(codigo:string){
        const dadosAtualizados = this.itens.filter((produto)=>produto.codigo!==codigo);
        this.itens = [...dadosAtualizados];
       
    }


}

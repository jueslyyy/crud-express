import Produto from "./produto";

export default class RepositorioProdutos{
    itens:Produto[] = [new Produto ("Colher", 5.99), 
                       new Produto("Mouse", 39),
                       new Produto("teclado", 99.99)];
    obterTodos(){
        return this.itens;
    }  
    
    novo(nome:string, preco:number){
        const novoProduto = new Produto(nome, preco);
        this.itens.push(novoProduto);
    }

    obterPorCodigo(codigo:string){
        const produto = this.itens.find((produto)=>produto.codigo === codigo);
        return produto;
    }
}

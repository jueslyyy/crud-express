import { Router } from "express";
import RepositorioProdutos from "@src/core/produtos/RepositoriosProdutos";

const repo = new RepositorioProdutos();
const router = Router();

router.get("/", (req, res)=> {
    const dados = repo.obterTodos();
     res.status(200).send(dados);
});


export default router;
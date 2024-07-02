import { Router } from "express";
import RepositorioUsuario from "../core/ususarios/RepositorioUsuario";
import jwt from "jsonwebtoken";


const router = Router();
const repo = new RepositorioUsuario();

router.post("/", (req, res) => {
    const { email, senha } = req.body;

    if (!repo.usuarioExiste(email)) {
        res.status(204).send();
    } else if (!repo.loginCorreto(email, senha)) {
        res.status(204).send();
    } else {
        const token = jwt.sign({email, senha}, process.env.Access_Token_Secret as "Secret");
        res.status(200).json({token});
    }

});

export default router;

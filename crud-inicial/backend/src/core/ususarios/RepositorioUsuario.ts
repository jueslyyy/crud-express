import Senha from "../shared/Senha"
import Usuario from "./Usuario";

export default class RepositorioUsuario {
    usuarios: Usuario[] = [
        new Usuario("maria@email.com", "1234567"),
        new Usuario("jaque@gmail.com", "1230"),
        new Usuario("juesly@mmail.com", "abc"),

    ];

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex(usr => usr.email === email);
        return i;
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0;
    }

    loginCorreto(email: string, senha: string) {
        const i = this.encontrarIndice(email);
        const senhaEstaCorreta = Senha.comparar(senha, this.usuarios[i].senha);
        return senhaEstaCorreta;
    }
}
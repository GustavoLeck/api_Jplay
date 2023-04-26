import { ConsultQuantidadeMusicasByGenero } from "../use-cases/consult-quantidade-musicas-by-genero.js";

export class ConsultQuantidadeGeneroByAnoController {
    async handle(req, res) {
        console.log("=> Rota de busca de musicas por ano usada: " + req.body)
        res.status(200).send(await new ConsultQuantidadeMusicasByGenero().execute(req.body));
    }
}
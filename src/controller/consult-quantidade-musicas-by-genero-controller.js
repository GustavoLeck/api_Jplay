import { ConsultQuantidadeMusicasByGenero } from "../use-cases/consult-quantidade-musicas-by-genero.js";

export class ConsultQuantidadeGeneroByAnoController {
    async handle(req, res) {
        res.status(200).send(await new ConsultQuantidadeMusicasByGenero().execute(req.body));
    }
}
import { ConsultMusicas } from "../use-cases/consult-musica.js";
export class ConsultMusicasController {
    async handle(req, res) {
        const resultadoPesquisa = await new ConsultMusicas().execute(req.body)
        res.status(200).send(resultadoPesquisa)
    }
}
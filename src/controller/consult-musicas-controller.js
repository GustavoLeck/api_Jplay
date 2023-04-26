import { ConsultMusicas } from "../use-cases/consult-musica.js";
export class ConsultMusicasController {
    async handle(req, res) {
        const resultadoPesquisa = await new ConsultMusicas().execute(req.body)
        const totalResposta = resultadoPesquisa.length
        console.log("=> Rota de busca de musicas usada: " + req.body)
        res.status(200).send({
            QuantidadeMusica: totalResposta,
            Musicas: resultadoPesquisa
        })
    }
}
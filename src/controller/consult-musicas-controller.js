import { ConsultMusicas } from "../use-cases/consult-musica.js";
export class ConsultMusicasController {
    async handle(req, res) {
        const resultadoPesquisa = await new ConsultMusicas().execute(req.body)
        const totalResposta = resultadoPesquisa.length
        console.log("Teste");
        console.log("=> Rota de busca de musicas usada: " + JSON.stringify(req.body))
        res.status(200).send({
            QuantidadeMusica: totalResposta,
            Musicas: resultadoPesquisa
        })
    }
}
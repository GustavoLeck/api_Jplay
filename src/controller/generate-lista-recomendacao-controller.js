import { GenerateListaRecomendacao } from "../use-cases/generate-lista-recomendacao.js";

export class GenerateListaRecomendacaoController {
    async handle(req, res) {
        console.log("=> Rota de busca de lista de recomendação de musicas usada: " + JSON.stringify(req.body))
        const listaResposta = await new GenerateListaRecomendacao().execute(req.body)
        res.status(200).send(listaResposta)
    }

}
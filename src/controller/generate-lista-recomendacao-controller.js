import { GenerateListaRecomendacao } from "../use-cases/generate-lista-recomendacao.js";

export class GenerateListaRecomendacaoController {
    async handle(req, res) {
        const listaResposta = await new GenerateListaRecomendacao().execute(req.body)
        res.status(200).send(listaResposta)
    }

}
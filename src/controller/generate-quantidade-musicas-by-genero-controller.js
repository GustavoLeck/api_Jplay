import { GenerateQuantidadeMusicasByAno } from "../use-cases/generate-quantidade-musicas-by-genero.js";

export class GenerateQuantidadeMusicasByGeneroController {
    async handle(req, res) {
        const AtualizaQuantidade = await new GenerateQuantidadeMusicasByAno().execute();
        res.status(200).send(AtualizaQuantidade)
    }
}
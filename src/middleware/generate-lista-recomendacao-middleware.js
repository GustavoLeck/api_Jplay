export class GenerateListaRecomendacaoMiddleware {
    async handle(req, res, next) {
        if (req.body.id == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe o ID!" })
        }
        if (req.body.Ano == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe o Ano!" })
        }
        if (req.body.Generos == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe os Generos!" })
        }
        if (req.body.Estilos == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe os Estilos!" })
        }
        return next()
    }
}
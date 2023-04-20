export class ConsultQuantidadeMusicasByGeneroMiddleware {
    async handle(req, res, next) {
        if (!req.body.Genero) {
            return res.status(401).send({ status: "Erro", message: "Informe o Genero!" })
        }
        return next()
    }
}
export class ConsultMusicasMidleware {
    async handle(req, res, next) {

        console.log(req);

        return next()
    }
}
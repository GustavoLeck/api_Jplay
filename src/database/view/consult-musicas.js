import { prisma } from "../../prisma/client.js";

export class ConsultMusicasView {
    async execute(filtro) {

        //todo objeto de erro que for enviado para esta função deve ser formatado para seguir todos os campos da collecntion
        return await prisma.LoggerSucess.create({
            data: {
                filtro
            }
        })
    }
}
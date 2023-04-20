import { prisma } from "../../prisma/client.js";

export class QuantidadeMusicasByAnoView {
    async select(valor) {
        return await prisma.QuantidadeGeneroAno.findMany({
            where: valor
        })
    }
    async updateOne(id, valor) {
        return await prisma.QuantidadeGeneroAno.update({
            where: { id: id },
            data: valor
        })
    }
}
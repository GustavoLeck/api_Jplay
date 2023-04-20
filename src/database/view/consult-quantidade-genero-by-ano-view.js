import { prisma } from "../../prisma/client.js";

export class GenerateQuantidadeMusicasByAnoView {
    async selectAll(value) {
        return await prisma.QuantidadeGeneroAno.findMany()
    }
    async updateOne(id, valor) {
        return await prisma.QuantidadeGeneroAno.update({
            where: { id: id },
            data: valor
        })
    }

}
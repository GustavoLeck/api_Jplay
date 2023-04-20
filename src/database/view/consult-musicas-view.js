import { prisma } from "../../prisma/client.js";

export class ConsultMusicasView {
    async execute(value) {
        return await prisma.musicas.findMany({
            where: {
                Musica: {
                    equals: value.Musica,
                },
                Artista: {
                    equals: value.Artista,
                },
                Ano: {
                    equals: value.Ano,
                },
                Destacar: {
                    equals: value.Destacar,
                },
                Visualizacao: {
                    equals: value.Visualizacao,
                },
                Estrela: {
                    equals: value.Estrela,
                },
                Generos: {
                    hasEvery: value.Generos
                },
                Estilos: {
                    hasEvery: value.Estilos
                },
            }
        })
    }
}


import { GenerateQuantidadeMusicasByAnoView } from "../database/view/consult-quantidade-genero-by-ano-view.js";
import { ConsultMusicasView } from "../database/view/consult-musicas-view.js";
import { ConsultMusicaModel } from "../model/consult-musica-model.js";

export class GenerateQuantidadeMusicasByAno {
    async execute() {
        try {
            const listaRegistros = await new GenerateQuantidadeMusicasByAnoView().selectAll();

            for (const elemento of listaRegistros) {
                let QuantidadeTotal = 0
                let listAno = Array();
                for (const ano of elemento.QuantidadeAno) {
                    let quantidadeMusicasAno = 0;
                    let generoMusicaFormatado = new ConsultMusicaModel({ Ano: ano.Ano, Generos: [`${elemento.Genero}`] });
                    let listMusicasFiltradas = await new ConsultMusicasView().execute(generoMusicaFormatado);

                    for (const musica of listMusicasFiltradas) {
                        if (musica.Generos[0] == elemento.Genero) {
                            quantidadeMusicasAno = quantidadeMusicasAno + 1;
                        }
                    }
                    listAno.push({ Ano: ano.Ano, Quantidade: quantidadeMusicasAno })
                }

                for (const valor of listAno) {
                    QuantidadeTotal = QuantidadeTotal + valor.Quantidade;
                }
                let valorGerado = { Genero: elemento.Genero, QuantidadeTotal: QuantidadeTotal, QuantidadeAno: listAno };
                await new GenerateQuantidadeMusicasByAnoView().updateOne(elemento.id, valorGerado)
            }
            return {
                status: "Sucesso",
                message: "Valores Atualizados com sucesso!"
            };
        } catch (error) {
            return {
                status: "Erro",
                message: error
            };

        }
    }
}
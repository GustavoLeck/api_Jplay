import { QuantidadeMusicasByAnoView } from "../database/view/quantidade-genero-by-ano-view.js";
import { QuantidadeGeneroByAnoModel } from "../model/quantidade-genero-by-ano-model.js";
export class ConsultQuantidadeMusicasByGenero {
    async execute(valor) {
        const valorPesquisaFormatada = new QuantidadeGeneroByAnoModel(valor);
        let resultadoBusca = await new QuantidadeMusicasByAnoView().select(valorPesquisaFormatada);

        if (valor.Ano) {
            resultadoBusca.map((e) => {
                e.QuantidadeAno.map((valorAno) => {
                    if (valorAno.Ano == valor.Ano) {
                        valorAno.Genero = valor.Genero;
                        resultadoBusca = valorAno;
                    }
                })
            })
        }
        return resultadoBusca;
    }
}
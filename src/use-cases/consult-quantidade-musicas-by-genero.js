import { QuantidadeMusicasByAnoView } from "../database/view/quantidade-genero-by-ano-view.js";
import { QuantidadeGeneroByAnoModel } from "../model/quantidade-genero-by-ano-model.js";
export class ConsultQuantidadeMusicasByGenero {
    async execute(valor) {
        const valorPesquisaFormatada = new QuantidadeGeneroByAnoModel(valor)
        return await new QuantidadeMusicasByAnoView().select(valorPesquisaFormatada)
    }
}
import { ConsultMusicasView } from "../database/view/consult-musicas-view.js";
import { ConsultMusicaModel } from "../model/consult-musica-model.js";
export class ConsultMusicas {
    async execute(value) {
        const valueFormated = new ConsultMusicaModel(value)
        return await new ConsultMusicasView().execute(valueFormated);
    }
}
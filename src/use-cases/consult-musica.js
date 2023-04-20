import { ConsultMusicasView } from "../database/view/consult-musicas-view.js";
import { MusicaModel } from "../model/musica-model.js";
export class ConsultMusicas {
    async execute(value) {
        const valueFormated = new MusicaModel(value)
        return await new ConsultMusicasView().execute(valueFormated);
    }
}
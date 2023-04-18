import { ConsultMusicasView } from "../database/view/consult-musicas-view.js";
export class ConsultMusicas {
    async execute(value) {
        return await new ConsultMusicasView().execute(value);
    }
}
import { ConsultMusicasView } from "../database/view/consult-musicas-view.js"
import { MusicaModel } from "../model/musica-model.js";

export class GenerateListaRecomendacao {
    async execute(musicaPesquisada) {

        const listaMusicasRelacionada = Array();
        const listaAnosProximos = Array();
        let musicaFiltradaPorAnos = Array();
        let musicaFiltradas = Array()
        musicaFiltradas.push(musicaPesquisada);

        const musicaFormatada = new MusicaModel({});

        const resultaPesquisa = await new ConsultMusicasView().execute(musicaFormatada);

        function filtraMusica(musicaValidada) {
            let permissao = true;

            for (const musica of musicaFiltradas) {
                if (musica.id === musicaValidada.id) {
                    permissao = false;
                }
            }
            if (permissao) {
                musicaFiltradas.push(musicaValidada)
            }
        }

        function geraListaAnosProximos(ano) {
            for (let index = ano - 5; index <= ano + 5; index++) {
                listaAnosProximos.push(index);
            }
        }

        function seperaMusicaGenero(musica) {
            let validada = false;
            for (const genero of musica.Generos) {
                validada = musicaPesquisada.Generos.some((elemento) => elemento == genero)
                if (validada) {
                    return true
                }
            }
            return validada;
        }

        function seperaMusicaGeneroEstilo(musica) {
            let validada = false;
            for (const estilo of musica.Estilos) {
                validada = musicaPesquisada.Estilos.some((elemento) => elemento == estilo)
                if (validada) {
                    return true
                }
            }
            return validada;
        }


        geraListaAnosProximos(musicaPesquisada.Ano)

        for (const ano of listaAnosProximos) {
            musicaFiltradaPorAnos = musicaFiltradaPorAnos.concat(resultaPesquisa.filter(musica => musica.Ano === ano))
        }

        for (const musica of musicaFiltradaPorAnos) {
            if (seperaMusicaGenero(musica)) {
                if (seperaMusicaGeneroEstilo(musica)) {
                    filtraMusica(musica)
                }
            }
        }

        return { Total: musicaFiltradas.length, Musicas: musicaFiltradas };
    }
}
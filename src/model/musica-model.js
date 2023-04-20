export class MusicaModel {
    constructor(value) {
        if (value.Musica !== undefined) {
            this.Musica = value.Musica;
        }
        if (value.Ano !== undefined) {
            this.Ano = value.Ano;
        }
        if (value.Artista !== undefined) {
            this.Artista = value.Artista;
        }
        if (value.Destacar !== undefined) {
            this.Destacar = value.Destacar;
        }
        if (value.Vizualizacao !== undefined) {
            this.Vizualizacao = value.Vizualizacao;
        }
        if (value.Estrela !== undefined) {
            this.Estrela = value.Estrela;
        }
        if (value.Generos !== undefined) {
            this.Generos = value.Generos;
        } else {
            this.Generos = []
        }
        if (value.Estilos !== undefined) {
            this.Estilos = value.Estilos;
        } else {
            this.Estilos = []
        }
    }
}
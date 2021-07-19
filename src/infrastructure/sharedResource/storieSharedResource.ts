export default class storieSharedResource {
    name: string;

    descricao: string;

    data_inicio: Date;

    data_fim: Date;

    id_quadro: number;
    constructor(name: string, descricao: string, data_inicio: Date, data_fim: Date, id_quadro: number) {
        this.name = name;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.id_quadro = id_quadro;
    }
}

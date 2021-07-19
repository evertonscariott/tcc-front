export default class frameSharedResource {
    name: string;

    situacao: string;

    id_projeto: number;
    constructor(name: string, situacao: string, id_projeto: number) {
        this.name = name;
        this.situacao = situacao;
        this.id_projeto = id_projeto;
    }
}

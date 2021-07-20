export default class storieSharedResource {
    name: string;

    descricao: string;

    tempoEstimado: string;

    tempoRealizado: string;

    tipoTarefaId?: number;

    listaId?: number;

    historiaId?: number;

    etiquetaIds?: number[];
    constructor(
        name: string,
        descricao: string,
        tempoEstimado: string,
        tempoRealizado: string,
        tipoTarefaId: number,
        listaId: number,
        historiaId: number,
        etiquetaIds: number[]
    ) {
        this.name = name;
        this.descricao = descricao;
        this.tempoEstimado = tempoEstimado;
        this.tempoRealizado = tempoRealizado;
        this.tipoTarefaId = tipoTarefaId;
        this.listaId = listaId;
        this.historiaId = historiaId;
        this.etiquetaIds = etiquetaIds;
    }
}

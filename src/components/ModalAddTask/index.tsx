import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Swal from "sweetalert2";

import api from "../../services/api";

import TaskDto from "../../infrastructure/dtos/task.dto";
import { Button, CircularProgress, Grid, Paper, TextField } from "@material-ui/core";

type props = {
    openModalAddTask: boolean;
    handleCloseModalAddTask: any;
    AddTask: TaskDto;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: "2rem",
            textAlign: "left",
            alignContent: "left",
            margin: "20px",
            minWidth: 500,
            height: "auto",
        },
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    })
);

export default function AddFrame({ openModalAddTask, handleCloseModalAddTask, AddTask }: props) {
    const classes = useStyles();
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [addTask, setAddTask] = useState<typeof AddTask>({
        name: "",
        descricao: "",
        tempoEstimado: "",
        tempoRealizado: "",
    });

    const postTask = async () => {
        setLoading(true);
        handleCloseModalAddTask();
        try {
            const params = {
                name: addTask.name,
                descricao: addTask.descricao,
                tempoEstimado: addTask.tempoEstimado,
                tempoRealizado: addTask.tempoRealizado,
            };

            const { data } = await api.post(`/api/v1/tarefa`, { params });

            console.log(data);
            setLoading(false);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro!",
                text: "Erro ao salvar tarefa.",
            });
            setLoading(false);
        }
    };

    return (
        <div ref={rootRef}>
            <Modal
                open={openModalAddTask}
                onClose={handleCloseModalAddTask}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
            >
                <Paper className={classes.paper}>
                    <form onSubmit={() => handleCloseModalAddTask}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    label="Nome da Tarefa"
                                    value={addTask.name}
                                    onChange={(e: any) => setAddTask(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="descricao"
                                    label="Descri????o"
                                    value={addTask.descricao}
                                    onChange={(e: any) => setAddTask(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="tempoEstimado"
                                    label="Tempo Estimado"
                                    value={addTask.tempoEstimado}
                                    onChange={(e: any) => setAddTask(e.target.value)}
                                    fullWidth
                                />
                                <TextField
                                    name="tempoRealizado"
                                    label="Tempo Realizado"
                                    value={addTask.tempoRealizado}
                                    onChange={(e: any) => setAddTask(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="tipoTarefaId"
                                    label="Tipo de Tarefa"
                                    value="Tipo de Tarefa"
                                    //onChange={(e) => setPlaceAddress(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="historiaId"
                                    label="Hist??ria"
                                    value="Hist??ria"
                                    //onChange={(e) => setPlaceAddress(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} xs={12}>
                                <Button
                                    onClick={() => postTask}
                                    style={{ margin: "8px", backgroundColor: "#1769aa", width: 120 }}
                                >
                                    Salvar
                                    {loading && <CircularProgress size={14} color="inherit" />}
                                </Button>
                                <Button
                                    onClick={handleCloseModalAddTask}
                                    style={{ margin: "8px", backgroundColor: "#4dabf5", width: 120 }}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Modal>
        </div>
    );
}

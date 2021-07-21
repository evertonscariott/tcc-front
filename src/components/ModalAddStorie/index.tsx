import React, { useState } from "react";

import "date-fns";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Swal from "sweetalert2";

import api from "../../services/api";

import StorieDto from "../../infrastructure/dtos/storie.dto";
import { Button, CircularProgress, Grid, Paper, TextField } from "@material-ui/core";

type props = {
    openModalAddStorie: boolean;
    handleCloseModalAddStorie: any;
    AddStorie: StorieDto;
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

export default function AddFrame({ openModalAddStorie, handleCloseModalAddStorie, AddStorie }: props) {
    const classes = useStyles();
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date("2014-08-18T21:11:54"));

    const [addStorie, setAddStorie] = useState<typeof AddStorie>({
        name: "",
        descricao: "",
        data_inicio: new Date(),
        data_fim: new Date(),
    });

    const postStorie = async () => {
        setLoading(true);
        handleCloseModalAddStorie();
        try {
            const params = {
                name: addStorie.name,
                situacao: addStorie.descricao,
                data_inicio: addStorie.data_inicio,
                data_fim: addStorie.data_fim,
            };

            const { data } = await api.post(`/api/v1/historia`, { params });

            console.log(data);
            setLoading(false);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro!",
                text: "Erro ao salvar história.",
            });
            setLoading(false);
        }
    };

    return (
        <div ref={rootRef}>
            <Modal
                open={openModalAddStorie}
                onClose={handleCloseModalAddStorie}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
            >
                <Paper className={classes.paper}>
                    <form onSubmit={() => handleCloseModalAddStorie}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    label="Nome do história"
                                    value={addStorie.name}
                                    onChange={(e: any) => setAddStorie(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="descricao"
                                    label="Descrição"
                                    value={addStorie.descricao}
                                    onChange={(e: any) => setAddStorie(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justifyContent="space-around">
                                    <TextField
                                        name="data_inicio"
                                        type="date"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date Início"
                                        value={addStorie.data_inicio}
                                        onChange={(e: any) => setAddStorie(e.target.value)}
                                    />
                                    <TextField
                                        name="data_fim"
                                        type="date"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date Final"
                                        value={addStorie.data_fim}
                                        onChange={(e: any) => setAddStorie(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} xs={12}>
                                <Button
                                    onClick={() => postStorie}
                                    style={{ margin: "8px", backgroundColor: "#1769aa", width: 120 }}
                                >
                                    Salvar
                                    {loading && <CircularProgress size={14} color="inherit" />}
                                </Button>
                                <Button
                                    onClick={handleCloseModalAddStorie}
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

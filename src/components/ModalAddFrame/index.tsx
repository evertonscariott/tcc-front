import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Swal from "sweetalert2";

import api from "../../services/api";

import FrameDto from "../../infrastructure/dtos/frame.dto";
import { Button, CircularProgress, Grid, Paper, TextField } from "@material-ui/core";

type props = {
    openModalAddFrame: boolean;
    handleCloseModalAddFrames: any;
    AddFrame: FrameDto;
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

export default function AddFrame({ openModalAddFrame, handleCloseModalAddFrames, AddFrame }: props) {
    const classes = useStyles();
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [addFrame, setAddFrame] = useState<typeof AddFrame>({
        name: "",
        situacao: "",
    });

    const handlePostFrame = async (frame: FrameDto) => {
        setLoading(true);
        handleCloseModalAddFrames();
        try {
            const params = {
                name: frame.name,
                situacao: frame.situacao,
            };

            await api.post(`/api/v1/quadro`, { params });

            console.log("Params", params);
            setLoading(false);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro!",
                text: "Erro ao salvar quadro.",
            });
            setLoading(false);
        }
    };

    return (
        <div ref={rootRef}>
            <Modal
                open={openModalAddFrame}
                onClose={handleCloseModalAddFrames}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
            >
                <Paper className={classes.paper}>
                    <form onSubmit={() => handleCloseModalAddFrames}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    label="Nome do quadro"
                                    value={addFrame.name}
                                    onChange={(e: any) => setAddFrame(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="situacao"
                                    label="Situa????o"
                                    value={addFrame.situacao}
                                    onChange={(e: any) => setAddFrame(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} xs={12}>
                                <Button
                                    onClick={() => handlePostFrame(addFrame)}
                                    style={{ margin: "8px", backgroundColor: "#1769aa", width: 120 }}
                                >
                                    Salvar
                                    {loading && <CircularProgress size={14} color="inherit" />}
                                </Button>
                                <Button
                                    onClick={handleCloseModalAddFrames}
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

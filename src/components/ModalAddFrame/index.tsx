import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
                                    value="Nome do Quadro"
                                    //onChange={(e) => setPlaceName(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="situacao"
                                    label="Situação"
                                    value="Situação"
                                    //onChange={(e) => setPlaceAddress(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} xs={12}>
                                <Button
                                    onClick={() => handleCloseModalAddFrames}
                                    style={{ margin: "8px", backgroundColor: "#1769aa", width: 120 }}
                                >
                                    Salvar
                                    {loading && <CircularProgress size={14} color="inherit" />}
                                </Button>
                                {/* <Button onClick={() => handleEditSubmitPlace(EditingPlace)} style={{margin: '8px'}} >
                  Salvar e Aprovar
                </Button> */}
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

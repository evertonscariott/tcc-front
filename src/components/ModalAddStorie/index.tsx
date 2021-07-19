import React, { useState } from "react";

import "date-fns";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";

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

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
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
                                    label="Nome do quadro"
                                    value="Nome do Quadro"
                                    //onChange={(e) => setPlaceName(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="descricao"
                                    label="Descrição"
                                    value="Descrição"
                                    //onChange={(e) => setPlaceName(e.target.value)}
                                    variant="outlined"
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
                                        value={selectedDate}
                                        //onChange={handleDateChange}
                                    />
                                    <TextField
                                        name="data_fim"
                                        type="date"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date Final"
                                        value={selectedDate}
                                        //onChange={handleDateChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} xs={12}>
                                <Button
                                    onClick={() => handleCloseModalAddStorie}
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

import React from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Menu from "../../components/Menu";
import CardProjeto from "../../components/CardProjeto";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    })
);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <>
            <Menu />
            <Grid container spacing={4} style={{ padding: 15, display: "flex", alignItems: "center" }}>
                <Grid item xs={12}>
                    <Paper
                        className={classes.paper}
                        style={{ alignItems: "flex-start", display: "flex", marginBottom: 15 }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Projetos"
                            variant="outlined"
                            style={{ width: "80%", alignContent: "flex-start", display: "flex" }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: 15, marginTop: 8, width: "10%", height: 40 }}
                        >
                            Primary
                        </Button>
                    </Paper>
                    <CardProjeto />
                </Grid>
            </Grid>
        </>
    );
}

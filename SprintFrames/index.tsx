import React from "react";
import { Grid, TextField, Paper, Button, Typography, IconButton } from "@material-ui/core/";
import AddBoxIcon from "@material-ui/icons/AddBox";
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

export default function SprintFrame() {
    const classes = useStyles();
    return (
        <>
            <Menu />
            <Grid container spacing={5} style={{ padding: 15, display: "flex", alignItems: "center" }}>
                <Grid item xs={3}>
                    <Paper
                        className={classes.paper}
                        style={{ alignItems: "flex-start", display: "flex", marginBottom: 15 }}
                    >
                        <Typography variant="h4" gutterBottom style={{ marginTop: 8 }}>
                            Quadros
                        </Typography>
                        <IconButton aria-label="add">
                            <AddBoxIcon fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper
                        className={classes.paper}
                        style={{
                            alignItems: "flex-start",
                            display: "flex",
                            marginBottom: 15,
                            backgroundColor: "#E6E8FA",
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Projetos"
                            variant="outlined"
                            style={{ width: "80%", alignContent: "flex-start", display: "flex" }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

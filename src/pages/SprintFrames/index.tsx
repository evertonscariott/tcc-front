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
                        <IconButton aria-label="add" style={{ alignSelf: "flex-end", flexDirection: "column" }}>
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
                            backgroundColor: "#DCDCDC",
                        }}
                    >
                        <Grid
                            item
                            xs={3}
                            style={{
                                flexDirection: "column",
                                display: "flex",
                                alignItems: "stretch",
                                minWidth: 140,
                                marginTop: 36,
                            }}
                        >
                            <Paper
                                className={classes.paper}
                                style={{
                                    alignItems: "stretch",
                                    display: "flex",
                                    marginBottom: 15,
                                    marginRight: 20,
                                    backgroundColor: "#F5F5F5",
                                    alignSelf: "stretch",
                                    flexDirection: "column",
                                }}
                            >
                                {" "}
                                <Paper
                                    elevation={0}
                                    style={{
                                        display: "flex",
                                        minWidth: 120,
                                        minHeight: 100,
                                        backgroundColor: "#FFFFFF",
                                    }}
                                />
                                <IconButton aria-label="add" style={{ alignSelf: "flex-end", flexDirection: "column" }}>
                                    <AddBoxIcon fontSize="large" />
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            style={{ flexDirection: "column", display: "flex", alignItems: "stretch", minWidth: 140 }}
                        >
                            <Typography
                                variant="h5"
                                style={{ alignSelf: "flex-start", flexDirection: "column", marginBottom: 5 }}
                            >
                                Backlog
                            </Typography>
                            <Paper
                                className={classes.paper}
                                style={{
                                    alignItems: "stretch",
                                    display: "flex",
                                    marginBottom: 15,
                                    marginRight: 20,
                                    backgroundColor: "#F5F5F5",
                                    alignSelf: "stretch",
                                    flexDirection: "column",
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    style={{
                                        display: "flex",
                                        minWidth: 120,
                                        minHeight: 100,
                                        backgroundColor: "#FFFFFF",
                                    }}
                                />
                                <IconButton aria-label="add" style={{ alignSelf: "flex-end", flexDirection: "column" }}>
                                    <AddBoxIcon fontSize="large" />
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            style={{ flexDirection: "column", display: "flex", alignItems: "stretch", minWidth: 140 }}
                        >
                            <Typography
                                variant="h5"
                                style={{ alignSelf: "flex-start", flexDirection: "column", marginBottom: 5 }}
                            >
                                Doing
                            </Typography>
                            <Paper
                                className={classes.paper}
                                style={{
                                    alignItems: "stretch",
                                    display: "flex",
                                    marginBottom: 15,
                                    marginRight: 20,
                                    backgroundColor: "#F5F5F5",
                                    alignSelf: "stretch",
                                    flexDirection: "column",
                                }}
                            >
                                {" "}
                                <Paper
                                    elevation={0}
                                    style={{
                                        display: "flex",
                                        minWidth: 120,
                                        minHeight: 100,
                                        backgroundColor: "#FFFFFF",
                                    }}
                                />
                                <IconButton aria-label="add" style={{ alignSelf: "flex-end", flexDirection: "column" }}>
                                    <AddBoxIcon fontSize="large" />
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

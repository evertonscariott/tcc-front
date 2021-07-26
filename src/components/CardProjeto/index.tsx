import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";

import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardProjeto() {
    const classes = useStyles();

    const [frames, setFrames] = useState([
        {
            nome: "Sprint 1",
            situacao: "Concluída",
            id_projeto: 1,
        },
        {
            nome: "Sprint 2",
            situacao: "Em desenvolvimento",
            id_projeto: 2,
        },
        {
            nome: "Sprint 3",
            situacao: "Planejada",
            id_projeto: 2,
        },
    ]);

    return (
        <Grid container spacing={5} style={{ margin: 15 }}>
            {frames.map((frameCard) => (
                <Card className={classes.root} variant="outlined" style={{ padding: 10 }}>
                    <CardContent key={frameCard.id_projeto}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {frameCard.nome}
                        </Typography>
                        <Typography variant="h5" component="h2"></Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {frameCard.situacao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" style={{ backgroundColor: "#1769aa", color: "#FFF" }}>
                            <Link to="/quadro">Abrir Projeto</Link>
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    );
}

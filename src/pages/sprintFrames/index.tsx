import React, { useState } from "react";
import Swal from "sweetalert2";
import {
    Grid,
    TextField,
    Paper,
    Button,
    Typography,
    IconButton,
    Divider,
    List,
    ListItemText,
    ListSubheader,
    Card,
    CardContent,
    CardActions,
} from "@material-ui/core/";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Menu from "../../components/Menu";
import CardProjeto from "../../components/CardProjeto";
import api from "../../services/api";
import { BorderAll } from "@material-ui/icons";

import AddFrame from "../../components/ModalAddFrame";
import AddStorie from "../../components/ModalAddStorie";
import AddTask from "../../components/ModalAddTask";
import FrameDto from "../../infrastructure/dtos/frame.dto";
import StorieDto from "../../infrastructure/dtos/storie.dto";
import TaskDto from "../../infrastructure/dtos/task.dto";

interface props {
    frame: FrameDto;
    storie: StorieDto;
    task: TaskDto;
}

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
        pos: {
            marginBottom: 12,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
        },
        title: {
            fontSize: 14,
        },
    })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

const SprintFrame: React.FC<props> = ({ frame, storie, task }) => {
    const classes = useStyles();
    const [openModalAddFrame, setOpenModalAddFrame] = useState<boolean>(false);
    const handleModalAddFrame = () => {
        setOpenModalAddFrame(true);
    };
    const handleCloseModalAddFrame = () => {
        setOpenModalAddFrame(false);
    };

    const [openModalAddStorie, setOpenModalAddStorie] = useState<boolean>(false);
    const handleModalAddStorie = () => {
        setOpenModalAddStorie(true);
    };
    const handleCloseModalAddStorie = () => {
        setOpenModalAddStorie(false);
    };

    const [openModalAddTask, setOpenModalAddTask] = useState<boolean>(false);
    const handleModalAddTask = () => {
        setOpenModalAddTask(true);
    };
    const handleCloseModalAddTask = () => {
        setOpenModalAddTask(false);
    };

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

    const [stories, setStories] = useState([
        {
            nome: "Storie 1",
            descricao: "Primeira Storie do Projeto",
            data_inicio: "10/05/2021",
            data_fim: "17/05/2021",
            id_quadro: 1,
        },
        {
            nome: "Storie 2",
            descricao: "Segunda Storie do Projeto",
            data_inicio: "18/05/2021",
            data_fim: "25/05/2021",
            id_quadro: 2,
        },
        {
            nome: "Storie 3",
            descricao: "Terceira Storie do Projeto",
            data_inicio: "26/05/2021",
            data_fim: "02/06/2021",
            id_quadro: 2,
        },
    ]);

    const [tasks, setTasks] = useState([
        {
            nome: "Task 1",
            descricao: "Primeira Task do Projeto",
            tempoEstimado: "14 horas",
            tempoRealizado: "13 horas",
            tipoTarefaId: 1,
            listaId: 1,
            historiaId: 1,
        },
        {
            nome: "Task 2",
            descricao: "Segunda Task do Projeto",
            tempoEstimado: "14 horas",
            tempoRealizado: "13 horas",
            tipoTarefaId: 1,
            listaId: 1,
            historiaId: 1,
        },
    ]);

    return (
        <>
            <Menu />
            <Grid container>
                <AddFrame
                    openModalAddFrame={openModalAddFrame}
                    handleCloseModalAddFrames={handleCloseModalAddFrame}
                    AddFrame={frame}
                />
                <AddStorie
                    openModalAddStorie={openModalAddStorie}
                    handleCloseModalAddStorie={handleCloseModalAddStorie}
                    AddStorie={storie}
                />
                <AddTask
                    openModalAddTask={openModalAddTask}
                    handleCloseModalAddTask={handleCloseModalAddTask}
                    AddTask={task}
                />
                <Grid
                    container
                    spacing={5}
                    style={{ padding: 15, display: "flex", alignItems: "center", marginTop: 50 }}
                >
                    <Grid item xs={3}>
                        <Paper className={classes.paper} style={{ alignItems: "stretch", marginBottom: 15 }}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        <Grid style={{ alignItems: "flex-start", display: "flex" }}>
                                            <Typography variant="h4" gutterBottom style={{ marginTop: 8 }}>
                                                Quadros
                                            </Typography>
                                            <IconButton
                                                onClick={handleModalAddFrame}
                                                aria-label="add"
                                                style={{
                                                    alignSelf: "flex-end",
                                                    flexDirection: "column",
                                                    color: "#1769aa",
                                                }}
                                            >
                                                <AddBoxIcon fontSize="large" />
                                            </IconButton>
                                        </Grid>
                                    </ListSubheader>
                                }
                                className={classes.root}
                            >
                                <Divider />
                                {frames.map((frameLink) => (
                                    <ListItem button>
                                        <ListItemText>{frameLink.nome}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper
                            className={classes.paper}
                            style={{
                                alignItems: "flex-start",
                                display: "flex",
                                marginBottom: 15,
                                backgroundColor: "#C9C9C9",
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
                                        backgroundColor: "#DCDCDC",
                                        alignSelf: "stretch",
                                        flexDirection: "column",
                                    }}
                                >
                                    {" "}
                                    {stories.map((storieCard) => (
                                        <Paper
                                            elevation={0}
                                            style={{
                                                display: "flex",
                                                minWidth: 120,
                                                minHeight: 100,
                                                backgroundColor: "#FFFFFF",
                                            }}
                                        >
                                            <Card className={classes.root} variant="outlined" style={{ padding: 10 }}>
                                                <CardContent key={storieCard.id_quadro} style={{ alignItems: "left" }}>
                                                    <Typography
                                                        variant="h4"
                                                        color="textSecondary"
                                                        gutterBottom
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {storieCard.nome}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {storieCard.descricao}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        de {storieCard.data_inicio} à {storieCard.data_fim}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        size="small"
                                                        style={{ backgroundColor: "#1769aa", color: "#FFF" }}
                                                    >
                                                        Abrir História
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    ))}
                                    <IconButton
                                        aria-label="add"
                                        style={{ alignSelf: "flex-end", flexDirection: "column", color: "#1769aa" }}
                                        onClick={handleModalAddStorie}
                                    >
                                        <AddBoxIcon fontSize="large" />
                                    </IconButton>
                                    <hr style={{ height: 3, width: "470%", zIndex: 10 }} />
                                </Paper>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                style={{
                                    flexDirection: "column",
                                    display: "flex",
                                    alignItems: "stretch",
                                    minWidth: 140,
                                }}
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
                                        backgroundColor: "#DCDCDC",
                                        alignSelf: "stretch",
                                        flexDirection: "column",
                                    }}
                                >
                                    {tasks.map((taskCard) => (
                                        <Paper
                                            elevation={0}
                                            style={{
                                                display: "flex",
                                                minWidth: 120,
                                                minHeight: 100,
                                                backgroundColor: "#FFFFFF",
                                            }}
                                        >
                                            <Card className={classes.root} variant="outlined" style={{ padding: 10 }}>
                                                <CardContent key={taskCard.historiaId} style={{ alignItems: "left" }}>
                                                    <Typography
                                                        variant="h4"
                                                        color="textSecondary"
                                                        gutterBottom
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {taskCard.nome}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {taskCard.descricao}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        Tempo Estimado: {taskCard.tempoEstimado}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        Tempo Realizado: {taskCard.tempoRealizado}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        size="small"
                                                        style={{ backgroundColor: "#1769aa", color: "#FFF" }}
                                                    >
                                                        Abrir Tarefa
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    ))}
                                    <IconButton
                                        aria-label="add"
                                        style={{ alignSelf: "flex-end", flexDirection: "column", color: "#1769aa" }}
                                        onClick={handleModalAddTask}
                                    >
                                        <AddBoxIcon fontSize="large" />
                                    </IconButton>
                                </Paper>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                style={{
                                    flexDirection: "column",
                                    display: "flex",
                                    alignItems: "stretch",
                                    minWidth: 140,
                                }}
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
                                        backgroundColor: "#DCDCDC",
                                        alignSelf: "stretch",
                                        flexDirection: "column",
                                    }}
                                >
                                    {" "}
                                    {tasks.map((taskCard) => (
                                        <Paper
                                            elevation={0}
                                            style={{
                                                display: "flex",
                                                minWidth: 120,
                                                minHeight: 100,
                                                backgroundColor: "#FFFFFF",
                                            }}
                                        >
                                            <Card className={classes.root} variant="outlined" style={{ padding: 10 }}>
                                                <CardContent key={taskCard.historiaId} style={{ alignItems: "left" }}>
                                                    <Typography
                                                        variant="h4"
                                                        color="textSecondary"
                                                        gutterBottom
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {taskCard.nome}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        {taskCard.descricao}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        Tempo Estimado: {taskCard.tempoEstimado}
                                                    </Typography>
                                                    <Typography
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                        style={{ textAlign: "start" }}
                                                    >
                                                        Tempo Realizado: {taskCard.tempoRealizado}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        size="small"
                                                        style={{ backgroundColor: "#1769aa", color: "#FFF" }}
                                                    >
                                                        Abrir Tarefa
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    ))}
                                    <IconButton
                                        aria-label="add"
                                        style={{ alignSelf: "flex-end", flexDirection: "column", color: "#1769aa" }}
                                        onClick={handleModalAddTask}
                                    >
                                        <AddBoxIcon fontSize="large" />
                                    </IconButton>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SprintFrame;

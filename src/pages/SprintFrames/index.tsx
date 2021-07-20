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
} from "@material-ui/core/";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Menu from "../../components/Menu";
import CardProjeto from "../../components/CardProjeto";
import api from "../../services/api/api.config";
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
                        <Paper
                            className={classes.paper}
                            style={{ alignItems: "flex-start", display: "flex", marginBottom: 15 }}
                        >
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        <Paper style={{ alignItems: "flex-start", display: "flex" }}>
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
                                        </Paper>
                                    </ListSubheader>
                                }
                                className={classes.root}
                            >
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItemLink href="#simple-list">
                                    <ListItemText primary="Spam" />
                                </ListItemLink>
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
                                    <Paper
                                        elevation={0}
                                        style={{
                                            display: "flex",
                                            minWidth: 120,
                                            minHeight: 100,
                                            backgroundColor: "#FFFFFF",
                                        }}
                                    />
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
                                    <Paper
                                        elevation={0}
                                        style={{
                                            display: "flex",
                                            minWidth: 120,
                                            minHeight: 100,
                                            backgroundColor: "#FFFFFF",
                                        }}
                                    />
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
                                    <Paper
                                        elevation={0}
                                        style={{
                                            display: "flex",
                                            minWidth: 120,
                                            minHeight: 100,
                                            backgroundColor: "#FFFFFF",
                                        }}
                                    />
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

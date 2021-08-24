import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    botao: {
        flexGrow: 1,
        itemAlign: 'center',
    },
    },
    textField: {
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    titulo: {
        flexGrow: 1,
        marginTop: 30,
        textAlign: 'center',
    },
    subtitulo: {
        flexGrow: 1,
        marginTop: 30,
        textAlign: 'center',
    },
    banner: {
        flexGrow: 1,
        marginLeft: 10,
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
    
   
export default function SpacingGrid() {
    const classes = useStyles();
    const [dadosVagas, setVagas] = useState([]);

    async function buscaVagas() {
        try {

            axios.get('/Vagas').then(response => {

                setVagas(response.data)

            }).catch(function (error) {

                console.log(error.config);
            });

        } catch (error) {
        }
<<<<<<< HEAD
    ]
 
=======
    }

    useEffect(() => {
        buscaVagas()
    }, [])
>>>>>>> 7b0c74e458c02f89b89f7672858305509494d3d4

    function vagaDetalhe(nome) {
        localStorage.setItem('VAGA', nome);
        window.location.href = `/portal/cadastro`;
    }

    return (
       
            <form  
            id="form"
            name="form"
            className={classes.root}
            noValidate
            autoComplete="off">
                <Paper className={classes.paper}>
                    <Grid container xs={12} spacing={1} >
                        <Grid item xs={12} spacing={1} >
                            <Typography variant="h4" component="h4" className={classes.titulo}>
                                Seja bem-vindo(a) ao JobsNet
                            </Typography>
                        </Grid>
                        <Grid item xs={12} spacing={1}>
                            <Typography variant="h6" component="h6" className={classes.subtitulo}>
                                Pequise uma vaga de emprego que mais combina com você
                            </Typography>
                        </Grid>
                    </Grid>
                   
                    <Grid xs={12} spacing={1} >
                        <Grid  xs={12} spacing={1}  >
                            <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={dadosVagas.map((option) => option.nome)}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Pesquise uma vaga..." margin="normal" variant="outlined" />
                                    )}
                                />
                        </Grid>
                    </Grid>    
                </Paper>
                <Grid item xs={12} className={classes.paper} >
                        <Button
                            variant="contained"
                            color="primary"
                            href="/portal/admin"
                        >
                            BUSCAR
                        </Button>
                    </Grid>
                <Divider/>
                <Paper>
                    <Grid container xs={12} spacing={1}>
                        <Grid item xs={12} spacing={1} className={classes.banner}>
                            <Grid container spacing={3}>
                            {dadosVagas.map((option) => (
                            <Grid item xs={4} spacing={0}>
                                <Paper

                                    onClick={() => vagaDetalhe(option.id, option.local, option.nome, option.salario)}

                                    style={{ backgroundColor: "#2aa745", textAlign: "center", fontSize: 15, color: "#FFFFFF" }}>
                                    <Typography>
                                        Vaga
                                    </Typography>
                                    <Typography>
                                        {option.nome}
                                    </Typography>
                                    <Typography>
                                        Localidade
                                    </Typography>
                                    <Typography>
                                        {option.local}
                                    </Typography>
                                    <Typography>
                                        Salário
                                    </Typography>
                                    <Typography>
                                        R$ {option.salario}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
           
           
            
       
    );
}



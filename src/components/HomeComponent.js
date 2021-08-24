import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [listaDeVagas, setListaDeVagas] = useState([])
    const [TestebuscaVagas, setBuscaVagasRetorno] = useState('')

    async function flistaVagas() {
        try {
            //const listaDeVagas = await api.get(`/Vagas`);
            //setListaDeVagas(listaDeVagas.data);
            setListaDeVagas('GET VAGA');
        } catch (error) {
            console.log(error);
        }
    }

    async function buscaVagas() {
        setBuscaVagasRetorno(false)
         
        try {
            //const buscaVagas = await api.get(`/Vagas/:id`);
            //setBuscaVagas(buscaVagas.data);
            if (TestebuscaVagas) {
                // setBuscaVagasRetorno(buscaVagas)
                console.log('Achou a vaga')
            } else {
                console.log('Não achou a vaga')
                // listaVagas();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        flistaVagas();
    }, []);



    const listaTodasVagas = [
        {
            id: '1',
            vaga: 'Desenvolvedor Júnior',
            localidade: 'Campina Grande - PB',
            salario: 'R$ 9999.000,00'
        },
        {
            id: '2',
            vaga: 'Engenheiro de Minas',
            localidade: 'Minas Gerais - MG',
            salario: 'R$ 5.000,00'
        },
        {
            id: '3',
            vaga: 'Engenheiro Eletricista',
            localidade: 'João Pessoa - PB',
            salario: 'R$ 15.000,00'
        }
    ]
 

    function vagaDetalhe(id, local, vaga, salario) {
        localStorage.setItem('ID', id);
        localStorage.setItem('LOCAL', local);
        localStorage.setItem('VAGA', vaga);
        localStorage.setItem('SALARIO', salario);
        window.location.href = `/portal/cadastro`;
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>

                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <Autocomplete


                            onChange={() => buscaVagas()}

                            id="free-solo-demo"
                            freeSolo
                            options={listaTodasVagas.map((option) => option.vaga)}
                            renderInput={(params) => (
                                <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                            )}
                        />
                    </Grid>

                    <div><br /></div>

                    <Grid container spacing={3} style={{ backgroundColor: "#D9D9D9", color: "#FFFFFF" }}>


                        {listaTodasVagas.map((row) => (
                            <Grid item xs={4}>
                                <Paper

                                    onClick={() => vagaDetalhe(row.id, row.localidade, row.vaga, row.salario)}

                                    style={{ backgroundColor: "#2aa745", textAlign: "center", fontSize: 15, color: "#FFFFFF" }}>
                                    <Typography>
                                        Vaga
                                    </Typography>
                                    <Typography>
                                        {row.vaga}
                                    </Typography>
                                    <Typography>
                                        Localidade
                                    </Typography>
                                    <Typography>
                                        {row.localidade}
                                    </Typography>
                                    <Typography>
                                        Salário
                                    </Typography>
                                    <Typography>
                                        {row.salario}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}
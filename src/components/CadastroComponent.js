import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';
import api from '../services/apiService';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    }
}));

export default function CadastroComponent() {
   
    const [vagas, setVagas] = useState([]); 
    const classes = useStyles()
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [retorn, setRetorno] = useState('');


    localStorage.setItem('@nome', 'ARTHUR')

    async function cadastraVagas(e) {
        e.preventDefault();
        try {
            api.post('/Vagas',{
                nome: nome,
                descricao: descricao
              }).then(function(response) {
                console.log(response);
                setRetorno(response.data)
              

                window.location.href = "http://localhost:3000/portal/home";


            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log(error.message);
                }
                console.log(error.config);
            });
        } catch (error) {
        }
    }


    return (
        <form
            id="form"
            name="form"
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={cadastraVagas}
        >
            <Paper className={classes.paper}>
                <Grid container spacing={1}>

                    <Grid item xs={6}>
                        <TextField fullWidth={true} id="nome" label="Nome" onChange={(e) => setNome(e.target.value)} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth={true} id="descricao" label="Descricao" onChange={(e) => setDescricao(e.target.value)} />
                    </Grid>
                    <div><br /></div>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth={true}>
                            CADASTRAR VAGAS
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </form >
    );
}

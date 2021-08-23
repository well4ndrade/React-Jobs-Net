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

const useStyles = makeStyles((theme) => ({
    root: {
        textalign: 'center',
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();
    const [dadosVagas2, setVagas2] = useState([]);

    async function buscaVagas() {
        try {

            axios.get('/Vagas').then(response => {

                setVagas2(response.data)

            }).catch(function (error) {

                console.log(error.config);
            });

        } catch (error) {
        }
    }

    useEffect(() => {
        buscaVagas()
    }, [])

    return (
        <main>
            <h1>Seja bem-vindo(a) ao JobsNet</h1>
                <p>Pequise uma vaga de emprego que mais combina com você.</p>
            <div style={{ width: 300 }}> 
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={dadosVagas2.map((option) => option.nome)}
                    renderInput={(params) => (
                    <TextField {...params} label="Pesquise uma vaga..." margin="normal" variant="outlined" />
                    )}
                />
            </div>
            <Button
                variant="contained" 
                color="primary" 
                href="/portal/admin"
            >
                BUSCAR
            </Button>
        </main>
    );
}



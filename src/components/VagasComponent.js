import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function VagasComponent() {
    const classes = useStyles()
    const [retorno, setRetorno] = useState([]);
    const [error, setError] = useState('');
    const [nome, setNome] = useState([]);
    const [id, setId] = useState('');
    const [desc, setDescicao] = useState('');
    const [nomeb, setNomeBanco] = useState('');
    const [local, setLocal] = useState('');
    const [salario, setSalario] = useState('');

    async function buscaVaga() {
        const Nome = localStorage.getItem('VAGAE')
        try {
            axios.post("/Vagas/buscar", {
                Nome
            }).then(function (response) {

                console.log(response.data)
                setRetorno(response)
                setId(response.data.id)
                setNomeBanco(response.data.nome)
                setDescicao(response.data.descricao)
                setLocal(response.data.local)
                setSalario(response.data.salario)

            }).catch(function (error) {
                console.log('Não Autorizado');
                setError("Houve um problema com o login, verifique suas credenciais ou click em recuperar sua senha.");

            });
        } catch (error) {
            setError("Houve um problema com o login, verifique suas credenciais ou entre em contato com o T.I.");
        }
    }


    useEffect(() => {
        buscaVaga()
    }, [])

    return (
        <div>
            <Grid
                container
                spacing={2}
            >
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper>
                            <Typography>
                                Vaga
                            </Typography>
                            <Typography>
                                {nomeb}
                            </Typography>
                            <Typography>
                                Localidade
                            </Typography>
                            <Typography>
                                {local}
                            </Typography>
                            <Typography>
                                Salário
                            </Typography>
                            <Typography>
                                R$ {salario}
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </div>
    );
}
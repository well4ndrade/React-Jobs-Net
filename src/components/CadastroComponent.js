import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';
import api from '../services/apiService';
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';


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
    }
    
}));


const columns = [
    { name: "id", label: "ID" },
    { name: "nome", label: "Nome" },
    { name: "local", label: "Local" },
    { name: "descricao", label: "Descrição" },
    { name: "salario", label: "Salario" },
   
];

const options = 
{
    selectableRows: false,
    pagination: false,
    filterType: "checkbox",
    textLabels: 
    {
        filter: 
        {
            all: "TODOS",
            title: "FILTROS",
            reset: "LIMPAR",
        },
        body:
        {
            noMatch:
                "Desculpe, nenhuma informação encontrada, por favor tente executar uma nova consulta.",
            toolTip: "Sort",
            columnHeaderTooltip: (column) => `Sort for ${column.label}`,
        },
        pagination: 
        {
            next: "Próxima página",
            previous: "Página anterior",
            rowsPerPage: "Linhas por página:",
            displayRows: "de",
        },
    }
}


export default function CadastroComponent() {
   
    const [salario, setSalario] = useState([]); 
    const classes = useStyles()
    const [nome, setNome] = useState('');
    const [local, setLocal] = useState('');
    const [descricao, setDescricao] = useState('');
    const [retorn, setRetorno] = useState('');
    const [dadosVagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState('');
    
    async function listarVagas(){
        setCarregando(true)
        try {

            // ------------------------------------------------------------------
            api.get('/Vagas').then(function (response) {
                console.log(response);

                setVagas(response.data)
                setCarregando(false)

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

            // ------------------------------------------------------------------

        } catch (error) {
        }
    }

    

    

    async function cadastraVagas(e) {
        e.preventDefault();
        
        try {
            api.post('/Vagas',{
                nome,
                local,
                descricao,
                salario

              }).then(function(response) {
                setRetorno(response.data)
                window.location.href = "/portal/cadastro";
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

    useEffect(() => {
        listarVagas()
    }, [])


    return (
        
        <form
            id="form"
            name="form"
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={cadastraVagas}>
            <Paper className={classes.paper}>
                <Grid container xs={12} spacing={1}>

                    <Grid item xs={6}>
                        <TextField fullWidth={true} id="nome" label="Nome" onChange={(e) => setNome(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth={true} id="local" label="Local" onChange={(e) => setLocal(e.target.value)} />
                    </Grid>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <TextField fullWidth={true} id="descricao" label="Descricao" onChange={(e) => setDescricao(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} id="salario" label="Salario" onChange={(e) => setSalario(e.target.value)} />
                    </Grid>

                </Grid>
                <Grid item xs={12}  >
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            
            <Grid item xs={12} className={classes.paper} >
            <Button                       
                            style={{ backgroundColor: "#2aa745", fontSize: 15, color: "#FFFFFF" }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth={false}>
                            CADASTRAR VAGAS
            </Button>
            </Grid>
            <Paper className={classes.paper}>
                <MUIDataTable
                    className="table"
                    title={"Vagas"}
                    data={dadosVagas}
                    columns={columns}
                    options={options}
                />
            </Paper>
        </form >
        

        
    );

}
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function CargosComponent() {
    const classes = useStyles()
    const [dadosVagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState('');

    async function listaVagas() {
        setCarregando(true)
        try {

            // ------------------------------------------------------------------
            axios.get('/Vagas').then(function (response) {
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
    useEffect(() => {
        localStorage.setItem('@nome', 'ARTHUR')
        listaVagas()
    }, [])

    const columns = [
        { name: "id", label: "ID" },
        { name: "nome", label: "Cargo" },
        { name: "local", label: "Localidade" },
        { name: "salario", label: "Salário" },
        { name: "descricao", label: "Descrição" },
       
    ];

    const options = {
        selectableRows: false,
        pagination: false,
        filterType: "checkbox",
        textLabels: {
            filter: {
                all: "TODOS",
                title: "FILTROS",
                reset: "LIMPAR",
            },
            body: {
                noMatch:
                    "Desculpe, nenhuma informação encontrada, por favor tente executar uma nova consulta.",
                toolTip: "Sort",
                columnHeaderTooltip: (column) => `Sort for ${column.label}`,
            },
            pagination: {
                next: "Próxima página",
                previous: "Página anterior",
                rowsPerPage: "Linhas por página:",
                displayRows: "de",
            },
        },
    };


    return (
        <div className={classes.root}>
            {carregando ? (
                <LinearProgress />
            ) : (
            <Paper>
                <MUIDataTable
                    className="table"
                    title={"Vagas"}
                    data={dadosVagas}
                    columns={columns}
                    options={options}
                />
                
            </Paper>
            
            )}
            <Grid item xs={12} className={classes.paper} >
            <Button
              style={{ backgroundColor: "#primary", fontSize: 15, color: "#FFFFFF" }}
              type="submit"
              variant="contained"
              color="primary"
              href="/portal/curriculo"
              fullWidth={true}>
              CADASTRAR CURRÍCULO
            </Button>
        </Grid>
        </div>    
    );
}

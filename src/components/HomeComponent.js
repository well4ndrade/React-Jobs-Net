import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function HomeComponent() {
    const classes = useStyles()
    const [dadosEndereco, setEnderecos] = useState([]);
    const [carregando, setCarregando] = useState('');

    async function listaEnderecos() {
        setCarregando(true)
        try {

            // ------------------------------------------------------------------
            axios.get('/Enderecos').then(function (response) {
                console.log(response);

                setEnderecos(response.data)
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
        listaEnderecos()
    }, [])

    const columns = [
        { name: "id", label: "ID" },
        { name: "cep", label: "CEP" },
        { name: "logradouro", label: "Rua" },
       
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
                    title={"Enderecos"}
                    data={dadosEndereco}
                    columns={columns}
                    options={options}
                />
            </Paper>
            )}
        </div>
    );
}

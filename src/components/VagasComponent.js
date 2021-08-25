import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../imagens/192.png'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    root1: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    botao: {
      flexGrow: 1,
      itemAlign: 'center',
    },
    titulo: {
        flexGrow: 1,
        marginTop: 30,
        textAlign: 'center',
        color:'black'
    },
    subtitulo: {
        flexGrow: 1,
        marginTop: 30,
        textAlign: 'center',
        color:'black'
    },
}));

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);



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
                setError(".");

            });
        } catch (error) {
            setError(".");
        }
    }


    useEffect(() => {
        buscaVaga()
    }, [])

  return (
    <form
      id="form"
      name="form"
      className={classes.root}
      noValidate
      autoComplete="off">
      <Paper className={classes.paper}>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={12} imagem className={classes.imagem}>
            <img class="displayed" src={logo} alt={"logo"} />
          </Grid>
        </Grid>
        <Grid container spacing={1} >
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.subtitulo}>
              Detalhes da vaga selecionada:
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cargo</StyledTableCell>
              <StyledTableCell align="right">Descrição</StyledTableCell>
              <StyledTableCell align="right">Local</StyledTableCell>
              <StyledTableCell align="right">Salário</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={nomeb}>
              <StyledTableCell component="th" scope="row">
                {nomeb}
              </StyledTableCell>
              <StyledTableCell align="right">{desc}</StyledTableCell>
              <StyledTableCell align="right">{local}</StyledTableCell>
              <StyledTableCell align="right">R$ {salario}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </Paper>
      <Grid item xs={12} className={classes.paper} >
          <Button
            style={{ backgroundColor: "#primary", fontSize: 15, color: "#FFFFFF" }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth={true}>
            CADASTRAR CURRÍCULO
          </Button>
        </Grid>
    </form>
  );
}


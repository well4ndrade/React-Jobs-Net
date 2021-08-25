import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import logo from '../imagens/192.png' // relative path to image 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import './EnderecoComponent.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import api from '../services/apiService';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root:
  {
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

export default function CurriculoComponent() {

  const classes = useStyles();
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');
  const [retorn, setRetorno] = useState('');
  const [sobre, setSobre] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");

  async function CadastraCurriculo(e) {
    e.preventDefault();
    
    try {
      axios.post('/Curriculos',{
           nome,
           cargo,
           sobre,
           escolaridade
         }).then(function(response) {
         setRetorno(response.data)
           window.location.href = "/portal/curriculo";
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
    onSubmit={CadastraCurriculo}>
      <Paper className={classes.paper}>
        <Grid container  spacing={1}>
          <Grid item xs={12}  className={classes.imagem}>
            <img  src={logo} alt={"logo"} />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h5">
                Cadastrar Currículo
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <TextField fullWidth={true} id="nome" label="Nome"
                onChange={(e) => setNome(e.target.value)}/>
            </Grid>
          </Grid>
          <Grid container  >
            <Grid item xs={12}>
              <TextField fullWidth={true} id="cargo" label="Cargo desejado"
                onChange={(e) => setCargo(e.target.value)}/>
            </Grid>
          </Grid>
          <Grid container  >
            <Grid item xs={12}>
              <TextField fullWidth={true} id="sobre" label="Conte-nos sobre você"
                onChange={(e) => setSobre(e.target.value)}/>
            </Grid>
          </Grid>
          <Grid container  >
            <Grid item xs={12}>
              <TextField fullWidth={true} id="escolaridade" label="Escolaridade/Formação"
                onChange={(e) => setEscolaridade(e.target.value)}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      

      <Grid item xs={12} className={classes.paper} >
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          ENVIAR CURRÍCULO
        </Button>
      </Grid>
    </form>

  );

}






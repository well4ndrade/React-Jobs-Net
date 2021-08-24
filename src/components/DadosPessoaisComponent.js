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

const estadoCivil = [
  { label: 'Selecionar', },
  { label: 'Solteiro(a)', },
  { label: 'Casado(a)', },
  { label: 'Divorciado(a)', },
  { label: 'Viúvo(a)', },
];


export default function MultilineTextFields() {
  const classes = useStyles();
  const [Cpf, setCpf] = useState('');
  const [Rg, setRg] = useState('');
  const [Nascimento, setNascimento] = useState('');
  const [Telefone2, setTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [PossuiVeiculo, setVeiculo] = useState('');
  const [PossuiHabilitacao, setHabilitacao] = useState('');
  const [error, setError] = useState('');
  const [Nome, setNome] = useState("");
  const [Telefone, setCelular] = useState("");
  const [response, setResponse] = useState('');
  
  const [EstadoCivil, setCivil] = React.useState('Selecionar');


  const handleVChange = (event) => {
    setVeiculo(event.target.value);
  };
  const handleChange = (event) => {
    setHabilitacao(event.target.value);
  };

  async function handleSignIn(e) {
    e.preventDefault();
        
    const dadoId = localStorage.getItem('@idlogin');
   
    if (Nome === '' || Cpf === '' || Rg === '' || Nascimento === '' || Telefone === '' || Email === '' || EstadoCivil === '' || PossuiVeiculo === '' || PossuiHabilitacao === '') {
     alert('Preencha os dados obrigatorios para continuar.')
    } else {
      setError('')
      try {
        axios.post("https://localhost:5001/Usuarios",{
          Nome,
          Cpf,
          Rg,
          Nascimento,
          Telefone,
          Telefone2,
          Email,
          EstadoCivil,
          PossuiVeiculo,
          PossuiHabilitacao,
          dadoId
        }).then(function (response) {
          localStorage.setItem('@idusuario', response.data.id)
          window.location.href = "/portal/endereco";
          
        }).catch(function (error) {
          console.log(response);
          setError("Houve um problema com o login, verifique suas credenciais ou click em recuperar sua senha.");

        });
      } catch (error) {
        setError("Houve um problema com o login, verifique suas credenciais ou entre em contato com o T.I.");
      }
    }
  }


  return (

    <form id="form" name="form" className={classes.root} onSubmit={handleSignIn} noValidate autoComplete="off">
      <Paper className={classes.paper}>


        <Grid container  spacing={1}>
          <Grid item xs={12}  className={classes.imagem}>
            <img  src={logo} alt={"logo"} />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h5">
                Cadastrar Dados
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>

            <Grid item xs={6} >
              <TextField fullWidth={true} id="nome" label="Nome Completo" name="nome"
                onChange={(e) => setNome(e.target.value)}
                value={Nome}
                autoComplete='off' />
            </Grid>
            <Grid item xs={6} >
              <TextField fullWidth={true} id="rg" label="RG" name="rg"
                onChange={(e) => setRg(e.target.value)}
                value={Rg} />
            </Grid>
          </Grid>
          <Grid container  >
            <Grid item xs={6}>
              <TextField fullWidth={true} id="cpf" label="CPF" name="cpf"
                onChange={(e) => setCpf(e.target.value)}
                value={Cpf} />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                label="DataNascimento"
                type="date"
                defaultValue="2017-05-24"
                onChange={(e) => setNascimento(e.target.value)}
                value={Nascimento}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }} />
            </Grid>
          </Grid>

          <Grid container  spacing={1}>
            <Grid item xs={6}>
              <TextField fullWidth={true} id="telefone" label="Telefone" name="telefone"
                onChange={(e) => setTelefone(e.target.value)}
                value={Telefone2}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth={true} id="celular" label="Celular" name="celular"
                onChange={(e) => setCelular(e.target.value)}
                value={Telefone}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField fullWidth={true} id="email" label="E-mail" name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>

            <Grid item xs={12}>
              <TextField
                id="civil"
                select
                className={classes.root}
                label="Estado Civil"
                value={EstadoCivil}
                onChange={(e) => setCivil(e.target.value)}
                SelectProps={{
                  native: true,
                }}>
                {estadoCivil.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>))}</TextField>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <   Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Possui Habilitação</FormLabel>
                <RadioGroup
                  aria-label="habilitacao"
                  name="controlled-radio-buttons-group"
                  value={PossuiHabilitacao}
                  onChange={handleChange}
                  fullWidth={false}
                >
                  <FormControlLabel value="s" control={<Radio />} label="Sim" />
                  <FormControlLabel value="n" control={<Radio />} label="Não" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Possui Veiculo</FormLabel>
                <RadioGroup
                  aria-label="veiculo"
                  name="controlled-radio-buttons-group"
                  value={PossuiVeiculo}
                  onChange={handleVChange}
                >
                  <FormControlLabel value="s" control={<Radio />} label="Sim" />
                  <FormControlLabel value="n" control={<Radio />} label="Não" />
                </RadioGroup>
              </FormControl>
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
          AVANÇAR
        </Button>
      </Grid>
    </form>

  );

}






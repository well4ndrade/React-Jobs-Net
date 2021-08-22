import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import api from '../services/apiService';
import logo from '../imagens/192.png' // relative path to image 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { CenterFocusWeakTwoTone } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
      height: '8ch',
      textalign: 'center'
  },
}}));

const generos = [
    {label: 'Selecionar',},
    {label: 'Feminino',},
    {label: 'Masculino', },
    {label: 'Prefiro não dizer', }, 
  ];

  const estadocivil = [
    {label: 'Selecionar',},
    {label: 'Solteiro(a)',},
    {label: 'Casado(a)',},
    {label: 'Divorciado(a)',},
    {label: 'Viúvo(a)',},
   ]; 

  
  export default function MultilineTextFields() {
    const classes = useStyles();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [telefone2, setTelefone2] = useState('');
    const [email, setEmail] = useState('');
    const [profissao, setProfissao] = useState('');
    const [possuiVeiculo, setPossuiVeiculo] = useState('');
    const [possuiHabilitacao, setPossuiHabilitacao] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => { console.log("Deu erro") }, [error])
   

    
    const [genero, setgenero] = React.useState('Selecionar');
    const handleChange = (event) => {
      setgenero(event.target.value);
    };
    const [estadocivi, setestadocivi] = React.useState('Selecionar'); 
    const handleCivil = (event) => {
        setestadocivi(event.target.value);
    };


    async function handleCaptura(e) {
      e.preventDefault();
      localStorage.clear();

      if (cpf === '' || rg === '') {
        setError('Preencha o CPF e a RG para continuar.')
      } else {
        setError('')
          try {
          const { data: response } = await api.post("/endereco", {
          nome,
          cpf, 
          rg,
          nascimento,
          telefone,
          telefone2,
          email,
          profissao,
          possuiVeiculo,
          possuiHabilitacao,
          genero,
          estadocivi
    }); 
      setNome(response);
      localStorage.setItem("@nome", nome)
      setCpf(response);
      localStorage.setItem("@nome", cpf)
      setRg(response);
      localStorage.setItem("@nome", rg)
      setgenero(response);
      localStorage.setItem("@nome", genero)
      setNascimento(response);
      localStorage.setItem("@nome", nascimento)
      setTelefone(response);
      localStorage.setItem("@nome", telefone)
      setTelefone2(response);
      localStorage.setItem("@nome", telefone2)
      setEmail(response);
      localStorage.setItem("@nome", email)
      setProfissao(response);
      localStorage.setItem("@nome", profissao)
      setestadocivi(response);
      localStorage.setItem("@nome", estadocivi)
      setPossuiVeiculo(response);
      localStorage.setItem("@nome", possuiVeiculo)
      setPossuiHabilitacao(response);
      localStorage.setItem("@nome", possuiHabilitacao)
      localStorage.clear();
      Window.location.href = '/portal/dados'
   } catch (err) {
                setError("Houve um problema.");
            }
        }
    }
  return (

    <Grid container
        component="main"
        className={classes.root}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="top"
        style={{ minHeight: '180vh' }}
    >
      <CssBaseline />
            <Grid
                item
                className={classes.form}
                xs={12} sm={2} md={2} lg={2}
                component={'Form'}
                elevation={6}
                textAlign= 'center'
            >   <Grid
                imagem
                className={classes.imagem}>
                <img src={logo} alt={"logo"}/> 
                
                </Grid>
                <strong><Typography variant="h5" component="h5" gutterBottom>
                
                    Cadastrando Dados
                    </Typography> </strong>
                <form className={classes.form} onSubmit={handleCaptura} >
                <TextField
                        
                       
                        required
                        id="nome"
                        label="Nome Completo"
                        name="nome"
                        onChange={(e)=> setNome(e.target.value)}
                     
                    />
                 <TextField
                        
                        
                        required
                        id="rg"
                        label="RG"
                        name="rg"
                        onChange={(e)=> setRg(e.target.value)}
                        className={classes.input}
                    />
                  <TextField
                        
                        
                        required
                        id="cpf"
                        label="CPF"
                        name="cpf"
                        onChange={(e) => setCpf(e.target.value)}
                        className={classes.input}
                    />
                  <TextField
                        id="standard-select-estadocivi-native"
                        select
                        label="Gênero"
                        value={genero}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                      >
                          {generos.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                  </TextField>
                  <TextField
                        
                        
                        required
                        id="nascimento"
                        label="Data Nascimento"
                        name="nascimento"
                        onChange={(e) => setNascimento(e.target.value)}
                        className={classes.input}
                    />
                  <TextField
                        
                        
                        required
                        id="celular"
                        label="Celular"
                        name="celular"
                        onChange={(e) => setTelefone(e.target.value)}
                        className={classes.input}
                    />
                  <TextField
                        
                        
                        id="telefone"
                        label="Telefone"
                        name="telefone"
                        onChange={(e) => setTelefone2(e.target.value)}
                        className={classes.input}
                    />
                  <TextField
                        id="standard-select-genero-native"
                        select
                        label="Estado Civil"
                        value={estadocivi}
                        onChange={handleCivil}
                        SelectProps={{
                          native: true,
                        }}
                      >
                          {estadocivil.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                    </TextField>
                    <TextField
                        
                        
                        required
                        id="email"
                        label="E-mail"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.input}
                    />
                    <TextField
                        
                        
                        required
                        id="veiculo"
                        label="Possui Veículo?"
                        name="veiculo"
                        onChange={(e) => setPossuiVeiculo(e.target.value)}
                        className={classes.input}
                    />
                    <TextField
                        
                        
                        required
                        id="habilitação"
                        label="Possui Habilitação?"
                        name="habilitação"
                        onChange={(e) => setPossuiHabilitacao(e.target.value)}
                        className={classes.input}
                    />
                    <Grid>
                    <a href='/portal/endereco'>
                  <Button
                     
                        fullWidth
                        variant="contained"
                        color="primary"
                      
                    >
                    AVANÇAR
                    </Button></a>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>
    );
 }


                    


   
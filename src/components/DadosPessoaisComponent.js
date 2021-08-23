import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Typography from '@material-ui/core/Typography';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WcIcon from '@material-ui/icons/Wc';
import React, { useState, useEffect } from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import logo from '../imagens/192.png' // relative path to image 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root:
  {
      flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(1),
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
  ,
  imagem: {
    itemAlign: 'center',
  }
  
}));


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
  
    useEffect(() => { console.log("Deu erro") }, [error]
    )
   

    
    const [genero, setgenero] = React.useState('Selecionar');
    const handleChange = (event) => {
      setgenero(event.target.value);
    };
    const [estadocivi, setestadocivi] = React.useState('Selecionar'); 
    const handleCivil = (event) => {
        setestadocivi(event.target.value);
    };

    localStorage.setItem('@nome', nome)
    localStorage.setItem('@cpf', cpf)
    localStorage.setItem('@rg', rg)
    localStorage.setItem('@genero', genero)
    localStorage.setItem('@nascimento', nascimento)
    localStorage.setItem('@telefone', telefone)
    localStorage.setItem('@telefone2', telefone2)
    localStorage.setItem('@email', email)
    localStorage.setItem('@profissao', profissao)
    localStorage.setItem('@estadocivi', estadocivi)
    localStorage.setItem('@possuiVeiculo', possuiVeiculo)
    localStorage.setItem('@possuiHabilitacao', possuiHabilitacao)


  return (

    <form
    id="form"
    name="form"
    className={classes.root}
    noValidate
    autoComplete="off">
      <Paper className={classes.paper}>

        <Grid container xs={12} spacing={1}>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={12}  imagem className={classes.imagem}>
            <img class="displayed" src={logo} alt={"logo"} /> 
          </Grid>
        </Grid>  

        <Grid container xs={12} spacing={1}> 
          <Grid  item xs={12}>
          <Typography variant="h4" component="h5">
            Cadastrar Dados
          </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={1}>  
          <Grid  item xs={12}>        
            <FaceIcon /><TextField
              required
              id="nome"
              label="Nome Completo"
              name="nome"
              onChange={(e)=> setNome(e.target.value)}/> 
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={1}> 
          <Grid  item xs={6}>  
            <AssignmentIcon/><TextField
              required
              id="rg"
              label="RG"
              name="rg"
              onChange={(e)=> setRg(e.target.value)}
              className={classes.input}/>
          </Grid>
          <Grid  item xs={6}>  
              <AssignmentIcon/><TextField
                required
                id="cpf"
                label="CPF"
                name="cpf"
                onChange={(e) => setCpf(e.target.value)}
                className={classes.input}/>
          </Grid>
        </Grid>

                  <WcIcon/><TextField
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
                  <DateRangeIcon/><TextField
                        required
                        id="nascimento"
                        label="Data Nascimento"
                        name="nascimento"
                        onChange={(e) => setNascimento(e.target.value)}
                        className={classes.input}
                    />
                  <SettingsCellIcon/><TextField
                        required
                        id="celular"
                        label="Celular"
                        name="celular"
                        onChange={(e) => setTelefone(e.target.value)}
                        className={classes.input}
                    />
                 <SettingsPhoneIcon/><TextField
                        id="telefone"
                        label="Telefone"
                        name="telefone"
                        onChange={(e) => setTelefone2(e.target.value)}
                        className={classes.input}
                    />
                  <AssignmentIcon/><TextField
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
                    <EmailIcon/><TextField
                        required
                        id="email"
                        label="E-mail"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.input}
                    />
                     <EmailIcon/><TextField
                        required
                        id="profissao"
                        label="Profissão"
                        name="profissao"
                        onChange={(e) => setProfissao(e.target.value)}
                        className={classes.input}
                    />
                    <DriveEtaIcon/><TextField
                        required
                        id="veiculo"
                        label="Possui Veículo?"
                        name="veiculo"
                        onChange={(e) => setPossuiVeiculo(e.target.value)}
                        className={classes.input}
                    />
                    <AssignmentIcon/><TextField
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
                
           

        </Grid>
        </Paper>
      </form >
    );
 }


                    




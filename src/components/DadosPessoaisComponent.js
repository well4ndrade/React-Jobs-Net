import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";



const generos = [
    {
      label: 'Selecionar',
    },
    {
        label: 'Feminino',
    },
    {
      label: 'Masculino',
    },
    {
      label: 'Prefiro não dizer',
    },
    
  ];

  const estadocivil = [
    {
        label: 'Selecionar',
    },
    {
      label: 'Solteiro(a)',
    },
    {
        label: 'Casado(a)',
    },
    {
      label: 'Divorciado(a)',
    },
    {
      label: 'Viúvo(a)',
    },
   
  ]; 


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    },
  }));
  
  export default function MultilineTextFields() {
    const classes = useStyles();
    const [genero, setgenero] = React.useState('Selecionar');
  
    const handleChange = (event) => {
      setgenero(event.target.value);
    };

    const [estadocivi, setestadocivi] = React.useState('Selecionar');
      
    const handleCivil = (event) => {
        setestadocivi(event.target.value);
    };



    return (
      <Paper className={classes.paper}>
    <div>
    <Grid container spacing={1}>
  
        <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item xs={6}>
            <TextField  label="Nome Completo" />
          </Grid>
          </Grid>
       
      

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle/>
          </Grid>
          <Grid item>
            <TextField label="RG" />
          </Grid>
          </Grid>
        
      

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="CPF" />
          </Grid>
          </Grid>
          
       
      
          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
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
        </Grid>
        </Grid>
       
      

        <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="Data Nascimento" />
          </Grid>
          </Grid>
        
      

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="Celular" />
          </Grid>
          </Grid>
        

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="Telefone" />
          </Grid>
          </Grid>
       
      

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
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
        </Grid>
        </Grid>
        
    
        <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="E-mail" />
          </Grid>
          </Grid>
        

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="Possui Veículo?" />
          </Grid>
          </Grid>
        

          <Grid container item xs={3} spacing={3}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField label="Possui Habilitação?" />
          </Grid>
          </Grid>
          <div><br /></div>
            <Grid item xs={12}>
        <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={true}>
              AVANÇAR
          </Button>
            </Grid>
       
      
      
        </Grid>
    </div>
    </Paper>
  );
}

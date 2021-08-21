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
    <div>
    
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Nome Completo" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="RG">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="CPF" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
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
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Data Nascimento" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Celular" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Telefone" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
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
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="E-mail" />
          </Grid>
        </Grid>
      </div><div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Possui Veículo?" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Possui Habilitação?" />
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
}

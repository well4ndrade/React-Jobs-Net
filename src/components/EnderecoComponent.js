import React from 'react';
import { Formik, Field, Form } from 'formik';
import './EnderecoComponent.css';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Filter5Icon from '@material-ui/icons/Filter5';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StreetviewIcon from '@material-ui/icons/Streetview';

function App() {
    function onSubmit(values, actions) {
      console.log('SUBMIT', values);
    }
  
    function onBlurCep(ev, setFieldValue) {
      const { value } = ev.target;
  
      const cep = value?.replace(/[^0-9]/g, '');
  
      if (cep?.length !== 8) {
        return;
      }

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }
  
  const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        width:'100000000000px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
   
  }));

  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
            

            <Paper className={classes.paper}>
           
               
            <Grid  container  item xs={12} className="Form">
                 <h2>Endereço</h2>
                <p>
                  <LocationOnIcon></LocationOnIcon>
                  <Field name="cep" type="text" placeHolder="Cep 00000-000" className="Inputs" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                </p>
                  <p>
                  <MyLocationIcon></MyLocationIcon>
                  <Field name="logradouro" placeHolder="Logradouro" className="Inputs" type="text" />  
                 </p>
                <p>
                <Filter5Icon></Filter5Icon>
                  <Field name="numero" placeHolder="Nº" className="Inputs" type="text" />
                 </p>
                 <p>
                <PinDropIcon></PinDropIcon>
                 <Field name="complemento" placeHolder="Complemento" className="Inputs" type="text" />
                 </p>
                 <p>
                <StreetviewIcon></StreetviewIcon>
                 <Field name="bairro" placeHolder="Bairro" className="Inputs" type="text" />
                 </p>
                 <p>
                <LocationCityIcon></LocationCityIcon>
                 <Field name="cidade" placeHolder="Cidade"  className="Inputs" type="text" />
                </p>
                 <p>
                <LocalLibraryIcon></LocalLibraryIcon>
                 <Field name="uf" placeHolder="Estado" className="Inputs" type="text" />
                 </p>
                <Grid>
                <Button
                    width="20%"
                    display="inherit"
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth={true}>
                    Concluir Cadastro
                 </Button>
                 </Grid>

            </Grid>
      
    
            </Paper>
        
        )}
      />
    </div>
  );
}

export default App;

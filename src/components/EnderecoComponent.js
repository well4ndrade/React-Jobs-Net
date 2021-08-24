import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../imagens/192.png' // relative path to image 
import Paper from "@material-ui/core/Paper";
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
import MiniDrawer from '../components/MenuComponent.js';
import axios from "axios";

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
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
        setCep(data.cep);
     
      });
  }
  
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
      width: '40ch',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      textalign: 'center',
  }
  ,
  imagem: {
    itemAlign: 'center',
  },
  input: {

    width: '30%'
  }
  
}));

const classes = useStyles();
const [cep, setCep] = useState('');
const [logradouro, setLogradouro] = useState('');
const [numero, setNumero] = useState('');
const [complemento, setComplemento] = useState('');
const [bairro, setBairro] = useState('');
const [cidade, setCidade] = useState('');
const [uf, setUf] = useState('');
const [error, setError] = useState('');
async function handleSignIn(e) {
  e.preventDefault();
  console.log(cep);
  console.log(logradouro);
  console.log(numero);
  console.log(complemento);
  console.log(bairro);
  console.log(cidade);
  console.log(uf);
  localStorage.clear();

  if (cep === '' || logradouro === '' || numero === '' || bairro === '' || cidade === '' || uf === '' ) {
      setError('Preencha todos os campos para continuar.')
  } else { 
      setError('')
      try {
          axios.post("/Endereco/", {
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf,
            
            
          }).then(function(response) {
              console.log('Cadastrado');
              

          }).catch(function (error) {
              console.log('Erro ao concluir cadastro. Verifique o prenchumento dos campos.');
            
          });
      } catch (error) {
         
      }
  
  setError("Os campos não foram totalmente preenchidos.");

}
} 

  return (
    <div className="App">
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
        <form onSubmit={handleSignIn}>
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
                 Endereço
              </Typography>
              </Grid>
            </Grid>
            <div><br></br></div>
          
             <Grid container xs={12} spacing={1}>   
              <Grid  item xs={12} fullWidth={true}> 
                  <LocationOnIcon/><Field name="cep" type="text" label="CEP"  onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
              </Grid>
             </Grid>

             <Grid container xs={12} spacing={1}>   
              <Grid  item xs={12}>  
                <MyLocationIcon/> <Field name="logradouro" label="Logradouro"/>
              </Grid>
            </Grid>

              <Grid container xs={12} spacing={1}>   
               <Grid  item xs={12}>  
                <Filter5Icon/> <Field  name="value" label="Número" type="text" onChange={(e) => setNumero(e.target.value)} />
             </Grid>
            </Grid>

              <Grid container xs={12} spacing={1}>   
                <Grid  item xs={12}>  
                <PinDropIcon/><Field name="value" label="Complemento"   type="text" onChange={(e) => setComplemento(e.target.value)}/>
                 </Grid>
            </Grid>

                 <Grid container xs={12} spacing={1}>   
              <Grid  item xs={12}>  
                <StreetviewIcon/><Field name="bairro" label="Bairro"  type="text" />
                 </Grid>
            </Grid>
            
                 <Grid container xs={12} spacing={1}>   
              <Grid  item xs={12}>  
                <LocationCityIcon/><Field name="cidade" label="Cidade"   type="text" />
                 </Grid>
            </Grid>

                 <Grid container xs={12} spacing={1}>   
              <Grid  item xs={12}>  
                <LocalLibraryIcon/><Field name="uf" label="Estado"   type="text" />
                 </Grid>
            </Grid>

            </Grid>
           
            <Grid item xs={12} className={classes.paper} >
          <a href='http://localhost:3000/portal/home'>
            <Button  
              type="submit"
              fullWidth                    
              variant="contained"
              color="primary">
              AVANÇAR
            </Button></a>
            </Grid>
                  </Paper>
         </form>  
        
        )}
      />
    </div>
  );
}

export default App;
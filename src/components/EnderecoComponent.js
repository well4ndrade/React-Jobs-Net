import React from 'react';
import { Formik, Field, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



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
               
            <Grid  container  item xs={12}>
                 <Grid   item xs={4} spacing={1}> 
                  <label>Cep: </label>
                  <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} /> 00000-000
                 </Grid>

                  <Grid  item xs={4} spacing={1}> 
                   <label>Logradouro: </label>
                   <Field name="logradouro" type="text" />  
                 </Grid>

                 <Grid   item xs={4} spacing={1}> 
                   <label>Número: </label>
                   <Field name="numero" type="text" />
                 </Grid>

                 <Grid   item xs={4} spacing={1}> 
                   <label>Complemento: </label>
                   <Field name="complemento" type="text" />
                 </Grid>

                 <Grid   item xs={4} spacing={1}> 
                   <label>Bairro: </label>
                   <Field name="bairro" type="text" />
                 </Grid>
                 
                 <Grid   item xs={4} spacing={1}> 
                   <label>Cidade: </label>
                   <Field name="cidade" type="text" />
                 </Grid>

                  <Grid   item xs={4} spacing={1}> 
                   <label>Estado: </label>
                   <Field name="estado" type="text" />
                 </Grid>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={true}>
              Concluir Cadastro
          </Button>
            </Grid>
      
    
            </Paper>
        
        )}
      />
    </div>
  );
}

export default App;

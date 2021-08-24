import React, { useState, useEffect } from 'react';
import logo from '../imagens/192.png' // relative path to image 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import api from '../services/apiService';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,71,124,1) 35%, rgba(0,212,255,1) 100%)',
    },
    paper: {
        margin: theme.spacing(8, 8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',        
        alignItems: "center"
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: '80%',
    },
    about: {
        color: '#FFFFFF',
        textDecoration: 'none',
        '&:hover': {
            color: 'white'
        }
    },
    fff: {
        color: '#FFFFFF',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#14477c',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(6, 1, 2),
        width: '40%',
        backgroundColor: '#000000',
        opacity: '0.81'
    },
     imagem: {
        width: '50%',
        height: '30%',
    },
}));

export default function AcessoSistema() {
    const classes = useStyles();
    const [Login, setLogin] = useState('');
    const [Passwd, setPasswd] = useState('');
    const [PasswdConfirm, setPasswdConfirm] = useState('');
    const [error, setError] = useState('');
    

    async function handleSignIn(e) {
        e.preventDefault();
        localStorage.clear();

        if (Login === '' || Passwd === '' || PasswdConfirm === '') {
            setError('Preencha o usuario e a senha para continuar.')
        } else { 
            if(Passwd === PasswdConfirm){
            setError('')
            try {
                api.put("/Dados/Alterar", {
                    Login,
                    Passwd
                }).then(function(response) {
                    alert('Usuario alterado com sucesso!!');
                    window.location.href = "/portal/login";

                }).catch(function (error) {
                    console.log('Usuario não encontrado');
                    setError("Esse usuario não foi encontrado, retorne para a pagina inicial e crie um novo login");
                });
            } catch (error) {
                setError("");
            }
        }
        setError("As senhas não conferem.");

    }
} 
        
    return (

        <Grid container
            component="main"
            className={classes.root}
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '180vh' }}
        >
            <CssBaseline />
            <Grid
                item
                className={classes.paper}
                xs={12} sm={4} md={4} lg={6}
                lg-offset={5}
                component={Paper}
                elevation={6}
            >   <Grid
                
                className={classes.imagem}>
                <img src={logo} alt={"logo"}/> 
                </Grid>
                <Typography variant="h3" component="h2" gutterBottom>
                
                    Recuperando Senha
                </Typography>
                <form className={classes.form} onSubmit={handleSignIn} autoComplete="off">
                    <TextField
                        autoComplete="off"
                        variant="filled"
                        required
                        id="login"
                        label="Login"
                        name="login"
                        onChange={e => setLogin(e.target.value)}
                        className={classes.input}
                    />
                    <TextField
                        className={classes.input}
                        variant="filled"
                        required
                        name="password"
                        label="Senha (Max = 8 digitos)"
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPasswd(e.target.value)}
                    />
                    <TextField
                        className={classes.input}
                        variant="filled"
                        required
                        name="passwordConfirm"
                        label="Confirme a Senha"
                        type="password"
                        id="passwordConfirm"
                        autoComplete="off"
                        onChange={(e) => setPasswdConfirm(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Alterar Senha
                    </Button>
                    <Button
                       variant="contained" 
                       color="primary" 
                       href="/portal/login"
                       className={classes.submit}
                        
                    >
                        Retornar
                    </Button>
                    {error && <p>{error}</p>}
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>
    );
}
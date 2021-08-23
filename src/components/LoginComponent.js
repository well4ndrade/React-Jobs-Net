import React, { useState, useEffect } from 'react';
import logo from '../imagens/192.png' // relative path to image 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,71,124,1) 35%, rgba(0,212,255,1) 100%)',
        justifyContent: 'center',
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
    submit2: {
        margin: theme.spacing(1, 1, 2),
        width: '40%',
        backgroundColor: '#000000',
        opacity: '0.81'
    },
  
}));

export default function AcessoSistema() {
    const classes = useStyles();
    const [Login, setLogin] = useState('');
    const [Passwd, setPasswd] = useState('');
    const [error, setError] = useState('');
    

    useEffect(() => { console.log("Deu erro") }, [error])

    async function handleSignIn(e) {
        e.preventDefault();
        localStorage.clear();

        if (Login === '' || Passwd === '') {
            setError('Preencha o usuario e a senha para continuar.')
        } else {
            setError('')
            try {
                axios.post("/Dados/Login", {
                    Login,
                    Passwd
                }).then(function(response) {
                    console.log('Autorizado');
                    localStorage.setItem('@login', Login)
                    window.location.href = "/portal/home";

                }).catch(function (error) {
                    console.log('Não Autorizado');
                    setError("Houve um problema com o login, verifique suas credenciais ou click em recuperar sua senha.");
                    
                });
            } catch (error) {
                setError("Houve um problema com o login, verifique suas credenciais ou entre em contato com o T.I.");
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
            justifyContent="center"
            style={{ minHeight: '100' }}
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
                
                    JobsNet
                </Typography>
                <form className={classes.form} onSubmit={handleSignIn} autoComplete="off">
                    <TextField
                        autoComplete="off"
                        variant="filled"
                        required
                        id="Login"
                        label="Login"
                        name="Login"
                        onChange={e => setLogin(e.target.value)}
                        className={classes.input}
                    />
                    <TextField
                        className={classes.input}
                        variant="filled"
                        required
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPasswd(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Logar
                    </Button>
                    <Button
                       variant="contained" 
                       color="primary" 
                       href="/portal/CadastroUsuario"
                       className={classes.submit}
                        
                    >
                        Cadastrar
                    </Button>
                    <Button
                       variant="contained" 
                       color="primary" 
                       href="/portal/recuperar"
                       className={classes.submit2}
                        
                    >
                        Recuperar Senha
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
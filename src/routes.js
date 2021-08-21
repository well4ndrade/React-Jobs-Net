import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage              from "./pages/HomePage"
import AdminPage              from "./pages/AdminPage"
import CadastroPage          from "./pages/CadastroPage"
import LoginPage             from "./pages/LoginPage"
import cadastroUsuarioPage   from "./pages/cadastroUsuarioPage"
import DadosPessoaisPage   from "./pages/DadosPessoaisPage"
import EnderecoPage        from "./pages/EnderecoPage"

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/portal/home" component={HomePage} />
            <Route exact path="/portal/admin" component={AdminPage} />
            <Route exact path="/portal/cadastro" component={CadastroPage} />
            <Route exact path="/portal/endereco" component={EnderecoPage} />
            <Route exact path="/portal/login" component={LoginPage} />
            <Route exact path="/portal/dados" component={DadosPessoaisPage} />
            <Route exact path="/portal/cadastroUsuario" component={cadastroUsuarioPage} />
            <Route path="*"> <Redirect to="/portal/login" /> </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
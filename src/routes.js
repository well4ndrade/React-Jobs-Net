import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage              from "./pages/HomePage"
import CadastroPage          from "./pages/CadastroPage"
import LoginPage          from "./pages/LoginPage"

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/portal/home" component={HomePage} />
            <Route exact path="/portal/cadastro" component={CadastroPage} />
            <Route exact path="/portal/login" component={LoginPage} />
            <Route path="*"> <Redirect to="/portal/home" /> </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
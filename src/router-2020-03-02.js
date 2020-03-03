import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";

const PrivateRouter = ({component: Component, ... rest}) => (
    <Route
        { ... rest}
        render={props => 
        isAuthenticated() ? (
            <Component {...props} ></Component>
        ) : (
            <Redirect to={{ pathanme: "/", state: { from: props.location}}}></Redirect>
        )}
    ></Route>
);

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello Word</h1>}></Route>
            <PrivateRouter path="/app" component={() => <h1>Você está logado.</h1>}></PrivateRouter>
        </Switch>
    </BrowserRouter>
);


export default Router;
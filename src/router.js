import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "./pages/home"
import Product from "./pages/product"
import List_Product from "./pages/list-product"

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={Home}></Route> */}
                    <Route exact path="/add-product" component={Product}></Route>
                    <Route exact path="/list-product" component={List_Product}></Route>
                    <Redirect from="/" to="/list-product"></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}

console.log('Teste NovaBranch')
export default Router;
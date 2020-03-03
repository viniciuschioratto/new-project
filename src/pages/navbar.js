import React from "react"

class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand">Dashboard</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li><a href="/add-product">Adiciona Produto</a></li>
                            <li><a href="/list-product">Lista Produtos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
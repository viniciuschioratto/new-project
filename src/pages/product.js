import React from "react"

class Product extends React.Component{

    cadastrar(event){
        event.preventDefault()
        console.log("teste")
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <form className="form" onSubmit={this.cadastrar}>
                    <fieldset>
                        <label htmlFor="nome">Nome Produto:</label>
                        <input id="nome" type="text" name="nome"></input><br></br>
                        <label htmlFor="preco">Preço Produto:</label>
                        <input id="preco" type="number" step="0.01" name="preco"></input><br></br>
                        <label htmlFor="quantidade">Quantidade Produto:</label>
                        <input id="quantidade" type="number" name="quantidade"></input><br></br>
                        <button type="submit">Salvar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default Product
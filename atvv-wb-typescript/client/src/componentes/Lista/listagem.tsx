/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../Style/myStyle.css'
import Urls from "../../controller/urls";

const URL = new Urls()

type props = {
    tema: string
}

type state = {
    nome: string
    masculinos: any[]
    femininos: any[]
    outros: any[]
    produtosMaisConsumidosQuantidade: any[]
}

export default class Listagem extends Component<props, state> {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            masculinos: [],
            femininos: [],
            outros: [],
            produtosMaisConsumidosQuantidade: []
        }
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        fetch("http://localhost:3001/listagem/produtosMaisConsumidosQuantidade", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                produtosMaisConsumidosQuantidade: r
            })
        });

        fetch(URL.CLIENTES_MASCULINO, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                masculinos: r
            })
        });

        fetch(URL.CLIENTES_FEMININO, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                femininos: r
            })
        });

        fetch(URL.CLIENTES_OUTROS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                outros: r
            })
        });
    }

    render() {
        return (
            <div id="backgroundClientContainer">
                <div id="titleContainer">
                    <h4 id="Title">Produtos cadastrados</h4>
                </div>
                <div id="collapsibleContainer">
                    <ul className="collapsible">
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem dos 10 clientes que mais consumiram produtos ou servi??os, em quantidade, n??o em valor
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>1?? - Thales</span><br />
                                <span>2?? - Vitoria</span><br />
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem de todos os clientes por g??nero
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <h6>Feminino</h6>
                                <br />
                                {this.state.femininos.map(item => {
                                    let indice = this.state.femininos.indexOf(item) + 1
                                    return (
                                        <span key={indice}>{indice}?? - {item.nome}</span>
                                    )
                                })}
                                <br />
                                <br />
                                <h6>Masculino</h6>
                                <br />
                                {this.state.masculinos.map(item => {
                                    let indice = this.state.masculinos.indexOf(item) + 1
                                    return (
                                        <span key={indice}>{indice}?? - {item.nome}</span>
                                    )
                                })}
                                <br />
                                <br />
                                <h6>Outros</h6>
                                <br />
                                {this.state.outros.map(item => {
                                    let indice = this.state.outros.indexOf(item) + 1
                                    return (
                                        <span key={indice}>{indice}?? - {item.nome}</span>
                                    )
                                })}


                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem geral de produtos e servi??os mais consumidos
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>1?? - Shampoo</span><br />
                                <span>2?? - Condicionador</span><br />
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem dos produtos e servi??os mais consumidos por g??nero                            
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <h6>Feminino</h6>
                                <hr />
                                <span>1?? - Esmalte</span><br />
                                <span>2?? - Shampoo</span><br />
                                <span>2?? - Condicionador</span><br />
                                <span>3?? - Manicure e Pedicure</span><br />
                                <h6>Masculino</h6>
                                <hr />
                                <span>1?? - Shampoo</span><br />
                                <span>2?? - Condicionador</span><br />
                                <span>3?? - Corte de Cabelo</span><br />
                                <h6>Outro</h6>
                                <hr />
                                <span></span><br />
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem dos 10 clientes que menos consumiram produtos e servi??os                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>1?? - Francisco</span><br />
                                <span>2?? - Vitoria</span><br />
                                <span>3?? - Thales</span><br />
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Listagem dos 5 clientes que mais consumiram em valor                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>1?? - Thales</span><br />
                                <span>2?? - Vitoria</span><br />
                                <span>3?? - Francisco</span><br />
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        )
    }
}
import React, {Component} from 'react';
import ApiGithub from "../Api/ApiGithub";
import {Accordion, Button, Card, Table} from "react-bootstrap";
import Provinces from "./Provinces";

class Regioni extends Component {
    constructor() {
        super();
        this.state = {
            regioniDati: []
        }
    }

    componentDidMount() {
        ApiGithub.fetch("dpc-covid19-ita-regioni-latest.json")
            .then(res => this.setState({regioniDati: res}))
    }

    render() {

        return (
            <div className="container mt-5 accordion-div">
                <div className="row">
                    <div className="col-md-12">
                        <Accordion className="pr-1">
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <div className="d-flex">
                                                    <div className="p-1 mr-2">
                                                        <div><h3>List of Regions in Italy</h3></div>
                                                    </div>
                                                </div>


                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Table variant="dark" className="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <td>Region</td>
                                                        <td>Region Code</td>
                                                        <td>Total Cases</td>
                                                        <td>Tampons</td>
                                                        <td>Confirmed</td>
                                                        <td>Active</td>
                                                        <td>Recovered</td>
                                                        <td>New Positive Cases</td>
                                                        <td>Deaths</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {this.state.regioniDati.map((item) => {
                                                        return (<tr>
                                                            <td align="right">{item.denominazione_regione}</td>
                                                            <td align="right">{item.codice_regione}</td>
                                                            <td align="right">{item.totale_casi}</td>
                                                            <td align="right">{item.tamponi}</td>
                                                            <td align="right">{item.totale_positivi}</td>
                                                            <td align="right">{item.variazione_totale_positivi}</td>
                                                            <td align="right">{item.dimessi_guariti}</td>
                                                            <td align="right">{item.nuovi_positivi}</td>
                                                            <td align="right">{item.deceduti}</td>
                                                        </tr>)
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                        </Accordion>
                    </div>
                </div>

            </div>
        );
    }
}

export default Regioni;

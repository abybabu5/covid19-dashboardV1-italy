import React, {Component} from 'react';
import ApiGithub from "../Api/ApiGithub";
import {Accordion, Button, Card, Table} from "react-bootstrap";

class Provinces extends Component {
    constructor() {
        super();
        this.state = {
            provinceDati: []
        }
    }

    componentDidMount() {
        ApiGithub.fetch("dpc-covid19-ita-province-latest.json")
            .then(res => {
                const province = [];
                res.forEach((p) => {
                    const regione = province.find((region => region.name === p.denominazione_regione));
                    if (regione === undefined) {
                        const newRegion = {name: p.denominazione_regione, province: []};
                        newRegion.province.push(p);
                        province.push(newRegion);
                    } else {
                        regione.province.push(p);
                    }
                })
                console.log(province);
                this.setState({ provinceDati: province})
            })

    }

    render() {

        return (
            <div className="container mt-1 accordion-div">
                <div className="row">
                    <div className="col-md-12">
                        {this.state.provinceDati.map((regione) => {
                            return (<Accordion className="pr-1 mt-1">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <div className="d-flex">
                                            <div className="p-1 mr-2">
                                                <div><h3>{regione.name}</h3></div>
                                            </div>
                                        </div>


                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Table variant="dark" className="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <td>Province</td>
                                                <td>Province Code</td>
                                                <td>Initial of Province</td>
                                                <td>Total Positive Cases</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {regione.province.map((item) => {
                                                return (<tr>
                                                    <td align="right">{item.denominazione_provincia}</td>
                                                    <td align="right">{item.codice_provincia}</td>
                                                    <td align="right">{item.sigla_provincia}</td>
                                                    <td align="right">{item.totale_casi}</td>
                                                </tr>)
                                            })}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>)})}
                    </div>
                </div>

            </div>
        );
    }
}

export default Provinces;

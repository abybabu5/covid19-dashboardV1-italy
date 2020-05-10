import React, {Component} from 'react';
import ApiGithub from "../Api/ApiGithub";
import {Accordion, Button, Card} from "react-bootstrap";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {SearchableTable} from "./SearchableTable";

class Regioni extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        ApiGithub.fetch("dpc-covid19-ita-regioni-latest.json")
            .then(res => this.setState({data: res}))
    }

    render() {
        const columns = [
            {
                dataField: 'denominazione_regione',
                text: 'Region',
                sort: true,
                headerStyle: {width: '200px'}
            },
            {
                dataField: 'totale_casi',
                text: 'Total Cases',
                sort: true,
                align: "right"
            },
            {
                dataField: 'tamponi',
                text: 'Tampons',
                sort: true,
                align: "right"
            },
            {
                dataField: 'totale_positivi',
                text: 'Confirmed',
                sort: true,
                align: "right"
            },
            {
                dataField: 'variazione_totale_positivi',
                text: 'Active',
                sort: true,
                align: "right"
            },
            {
                dataField: 'dimessi_guariti',
                text: 'Recovered',
                sort: true,
                align: "right"
            },
            {
                dataField: 'deceduti',
                text: 'Deaths',
                sort: true,
                align: "right"
            },
        ];
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
                                        <SearchableTable data={this.state.data} columns={columns}/>

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

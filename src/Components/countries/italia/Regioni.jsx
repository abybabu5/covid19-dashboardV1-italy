import React, {Component} from 'react';
import ApiGithub from "../../../Api/ApiGithub";
import {Accordion, Button, Card} from "react-bootstrap";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {SearchableTable} from "../../tables/SearchableTable";
import {ReactComponent as Arrow} from "../../../icon/iconfinder_arrow-dropdown_3017945.svg";

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
            <div className="container-fluid mt-5">
                <div className="row accordion-div">
                    <div className="col-md-12">
                        <Accordion className="">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{width: '100%'}}>
                                        <div className="p-1 mr-2">
                                            <div className="d-flex">
                                                <div className="mt-2 mb-2 mr-5 flex-grow-1 text-left">
                                                    <h3>List of Regions in Italy</h3>
                                                </div>
                                                <div className="mb-2">
                                                    <Arrow/>
                                                </div>
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

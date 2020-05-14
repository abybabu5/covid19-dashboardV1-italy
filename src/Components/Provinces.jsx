import React, {Component} from 'react';
import ApiGithub from "../Api/ApiGithub";
import {Accordion, Button, Card} from "react-bootstrap";
import {SearchableTable} from "./SearchableTable";

class Provinces extends Component {
    constructor() {
        super();
        this.state = {
            provinceDati: [],
            data: []
        }
    }

    componentDidMount() {
        ApiGithub.fetch("dpc-covid19-ita-province-latest.json")

            .then(res => {
                //Iterating through province array
                //then it's checking if the region is already existing
                const province = [];
                res.forEach((p) => {
                    const regione = province.find((region => region.name === p.denominazione_regione));
                    //if not, adding the region into province array
                    if (regione === undefined) {
                        const newRegion = {name: p.denominazione_regione, province: []};
                        //then pushing the region to the array
                        newRegion.province.push(p);
                        province.push(newRegion);
                        //if the region is already existing, then add province to the array
                    } else {
                        regione.province.push(p);
                    }
                })
                console.log(province);
                this.setState({provinceDati: province})
            })

    }

    render() {
        const columns = [
            {
                dataField: 'denominazione_provincia',
                text: 'Province',
                sort: true,
                headerStyle: {width: '200px'}
            },
            {
                dataField: 'codice_provincia',
                text: 'Province Code',
                sort: true,
                align: "right"
            },
            {
                dataField: 'sigla_provincia',
                text: 'Initial of Province',
                sort: true,
                align: "right"
            },
            {
                dataField: 'totale_casi',
                text: 'Total Positive Cases',
                sort: true,
                align: "right"
            }
        ];
        return (
            <div className="container-fluid mt-1">
                <div className="row">
                    <div className="col-md-12">
                        {this.state.provinceDati.map((regione) => {
                            return (
                                <Accordion className="pr-1 mt-1">
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
                                                <SearchableTable data={regione.province} columns={columns}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>)
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default Provinces;

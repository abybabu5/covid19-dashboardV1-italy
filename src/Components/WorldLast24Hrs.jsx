import React, {Component} from 'react';
import ApiWorld from "../Api/ApiWorld";
import Loader from "../loder/Loader";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {SearchableTable} from "./SearchableTable";
import {Accordion, Button, Card} from "react-bootstrap";
import worldMap from "../images/world-map-update.png"
import {Link} from "react-router-dom";
import WorldCurrentCard from "./WorldCurrentCard";


class WorldLast24Hrs extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: []
        }
    }


    componentDidMount() {
        setTimeout(() => {
            ApiWorld.fetch("countries?yesterday=true")
                .then(res => {
                    res.map((i, index) => {
                        i.id = index;
                        return i;
                    })
                    this.setState({
                        loading: false,
                        data: res
                    })
                })
        }, 3000)
    }

    render() {
        if (this.state.loading) {
            return (
                <div style={{display: 'flex', height: '100vh'}}>
                    <Loader/> <Loader/>
                </div>)
        }
        const columns = [{
            dataField: '',
            text: '',
            headerStyle: {width: '100px', backgroundColor: 'transparent'},
            style: (cell, row, rowIndex, colIndex) => {
                return {
                    backgroundImage: "url('" + row.countryInfo.flag + "')",
                    backgroundSize: "100px 50px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',


                }
            }
        }, {
            dataField: 'country',
            text: 'Country',
            sort: true
        }, {
            dataField: 'todayCases',
            text: 'Today Cases',
            sort: true,
            align: 'right'
        }, {
            dataField: 'recovered',
            text: 'Recovered till today',
            sort: true,
            align: 'right'
        }, {
            dataField: 'critical',
            text: 'Current Critical Cases',
            sort: true,
            align: 'right'
        },
            {
                dataField: 'todayDeaths',
                text: 'Today Deaths',
                sort: true,
                align: 'right'
            }
        ];
        return (
            <div className="container mt-3 align-content-center">
                <div className="container justify-content-center d-flex">
                    <div className="world-map">
                        <Link to="/map/world">
                            <img style={{width: "300px"}} src={worldMap} alt=""/>
                        </Link>
                    </div>
                </div>
                <WorldCurrentCard/>
                <div className="row">
                    <div className="col-md-12">
                        <Accordion className="pr-1">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <div className="d-flex">
                                            <div className="p-1 mr-2">
                                                <div><h3>World Today</h3></div>
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

export default WorldLast24Hrs;

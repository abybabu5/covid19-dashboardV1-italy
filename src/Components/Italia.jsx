import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import Regioni from "./Regioni";
import ApiGithub from "../Api/ApiGithub";
import mapItalia from "../images/map-italia.png"
import Provinces from "./Provinces";
import Accordion from "react-bootstrap/Accordion";
import Loader from "../loder/Loader";
import {Link} from "react-router-dom";


class Italia extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            today: [],
            yesterday: []

        }
    }

    componentDidMount() {
        setTimeout(() => {
                ApiGithub.fetch("dpc-covid19-ita-andamento-nazionale.json")
                    .then(res => {
                        res.reverse()
                        this.setState({
                            loading: false,
                            today: res[0], yesterday: res[1]
                        })
                    })
            }
            , 2000)
    }

    render() {
        if (this.state.loading) {
            return (
                <div style={{display: 'flex', height: '100vh'}}>
                    <Loader/>
                </div>)
        }
        return (
            <div className="container align-content-center italy-container d-flex flex-column">
                <div className="row mb-2 mt-5">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="map-italy mr-2 mt-3 mb-3">
                            <Link to="/map/italy">
                                <img style={{width: "100px"}} src={mapItalia} alt=""/>
                                {/*<img src="https://www.countryflags.io/it/shiny/64.png" />*/}
                            </Link>
                        </div>
                        <div><h1 style={{color: "white"}}>ITALY</h1></div>
                    </div>
                </div>
                <div className="row d-flex align-content-center position-sticky" style={{top: "100px"}}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <Card className="badge badge-info" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{this.state.today.totale_casi}</h3>
                                        <Card.Text>
                                            [Today : {this.state.today.totale_casi - this.state.yesterday.totale_casi}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-warning" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{this.state.today.totale_positivi}</h3>
                                        <Card.Text>
                                            [Today
                                            : {this.state.today.totale_positivi - this.state.yesterday.totale_positivi}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-success" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVERED</Card.Title>
                                        <h3>{this.state.today.dimessi_guariti}</h3>
                                        <Card.Text>
                                            [Today
                                            : {this.state.today.dimessi_guariti - this.state.yesterday.dimessi_guariti}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-danger" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <h3>{this.state.today.deceduti}</h3>
                                        <Card.Text>
                                            [Today : {this.state.today.deceduti - this.state.yesterday.deceduti}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <Regioni/>
                        <div className="container-fluid">
                            <Accordion className="accordion-div-province">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            <div className="mt-2 mb-2"><h3>List of Provinces in the Region</h3></div>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <div>
                                                <Provinces/>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Italia;

import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import Regioni from "./Regioni";
import ApiGithub from "../../../Api/ApiGithub";
import mapItalia from "../../../images/map-italia.png"
import Provinces from "./Provinces";
import Accordion from "react-bootstrap/Accordion";
import Loader from "../../../loder/Loader";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import CountUp from "react-countup";
import {ReactComponent as Arrow} from '../../../icon/iconfinder_arrow-dropdown_3017945.svg';


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
                                        <Typography variant="h4">
                                            <CountUp delay={0} start={0} end={this.state.today.totale_casi}
                                                     duration={2.5} separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                                [Today : <CountUp delay={0} start={0}
                                                                  end={this.state.today.totale_casi - this.state.yesterday.totale_casi}
                                                                  duration={2.5} separator=","/>]
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-warning" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <Typography variant="h4">
                                            <CountUp delay={0} start={0} end={this.state.today.totale_positivi}
                                                     duration={2.5} separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                                [Today
                                                : <CountUp delay={0} start={0}
                                                           end={this.state.today.totale_positivi - this.state.yesterday.totale_positivi}
                                                           duration={2.5} separator=","/>]
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-success" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVERED</Card.Title>
                                        <Typography variant="h4">
                                            <CountUp delay={0} start={0} end={this.state.today.dimessi_guariti}
                                                     duration={2.5} separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                                [Today
                                                : <CountUp delay={0} start={0}
                                                           end={this.state.today.dimessi_guariti - this.state.yesterday.dimessi_guariti}
                                                           duration={2.5} separator=","/>]
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-danger" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <Typography variant="h4">
                                            <CountUp delay={0} start={0} end={this.state.today.deceduti} duration={2.5}
                                                     separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                                [Today : <CountUp delay={0} start={0}
                                                                  end={this.state.today.deceduti - this.state.yesterday.deceduti}
                                                                  duration={2.5} separator=","/>]
                                            </div>
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
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1"
                                                          style={{width: '100%'}}>
                                            <div className="d-flex">
                                                <div className="mt-2 mb-2 flex-grow-1 text-left">
                                                    <h3>List of Provinces in the Region</h3>
                                                </div>
                                                <div className="mb-2" style={{marginRight: "10px"}}>
                                                    <Arrow/>
                                                </div>
                                            </div>
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

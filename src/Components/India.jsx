import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import Regioni from "./Regioni";
import ApiIndia from "../Api/ApiIndia";
import mapItalia from "../images/map-italia.png";
import Provinces from "./Provinces";
import Accordion from "react-bootstrap/Accordion";
import Loader from "../loder/Loader";
import {Link} from "react-router-dom";
import {ApiWorld} from "../Api/ApiWorld";
import IndiaSates from "./IndiaSates";


class India extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            stateData: {},
            // today: [],
            // yesterday: []

        }
    }

    componentDidMount() {
        setTimeout(() => {
                ApiWorld.fetch("countries/india")
                    .then(response => {
                        console.log(response)
                        // eslint-disable-next-line no-unused-expressions
                        response.data
                        this.setState({
                            stateData: response,
                            loading: false,
                            today: response[0], yesterday: response[1]
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
                            {/*<Link to="/india">*/}
                            {/*<img style={{width: "100px"}} src={mapItalia} alt=""/>*/}
                                <img src="https://www.countryflags.io/in/shiny/64.png"/>
                            {/*</Link>*/}
                        </div>
                        <div><h1 style={{color: "white"}}>INDIA</h1></div>
                    </div>
                </div>
                <div className="row d-flex align-content-center position-sticky" style={{top: "100px"}}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <Card className="badge badge-info" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{this.state.stateData.cases}</h3>
                                        <Card.Text>
                                            [Today : {this.state.stateData.todayCases}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-warning" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{this.state.stateData.active}</h3>
                                        <Card.Text>
                                            [Today
                                            : {this.state.stateData.todayCases - this.state.stateData.todayRecovered}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-success" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVERED</Card.Title>
                                        <h3>{this.state.stateData.recovered}</h3>
                                        <Card.Text>
                                            [Today
                                            : {this.state.stateData.todayRecovered}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-danger" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <h3>{this.state.stateData.deaths}</h3>
                                        <Card.Text>
                                            [Today
                                            : {this.state.stateData.todayDeaths}]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <IndiaSates/>
                    </div>
                </div>
            </div>
        );
    }
}

export default India;

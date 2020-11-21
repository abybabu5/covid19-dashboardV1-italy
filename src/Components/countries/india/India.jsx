import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import Loader from "../../../loder/Loader";
import {ApiWorld} from "../../../Api/ApiWorld";
import IndiaSates from "./IndiaSates";
import {Typography} from "@material-ui/core";
import CountUp from "react-countup";


class India extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            stateData: {}
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
                                <img src="https://www.countryflags.io/in/shiny/64.png"/>
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
                                        <Typography variant="h4">
                                            <CountUp delay={0} start={0} end={this.state.stateData.cases} duration={2.5}  separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                            [Today : <CountUp delay={0} start={0} end={this.state.stateData.todayCases} duration={2.5}  separator=","/>]
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
                                            <CountUp delay={0} start={0} end={this.state.stateData.active} duration={2.5}  separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                                [Today
                                                : <CountUp delay={0} start={0} end={this.state.stateData.todayCases - this.state.stateData.todayRecovered} duration={2.5}  separator=","/>]
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
                                            <CountUp delay={0} start={0} end={this.state.stateData.recovered} duration={2.5}  separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                            [Today
                                            : <CountUp delay={0} start={0} end= {this.state.stateData.todayRecovered} duration={2.5}  separator=","/>]
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
                                            <CountUp delay={0} start={0} end={this.state.stateData.deaths} duration={2.5}  separator=","/>
                                        </Typography>
                                        <Card.Text>
                                            <div className="mt-2">
                                            [Today
                                            : <CountUp delay={0} start={0} end={this.state.stateData.todayDeaths} duration={2.5}  separator=","/>]
                                            </div>
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

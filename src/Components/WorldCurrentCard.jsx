import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import ApiWorldCurrent from "../Api/ApiWorldCurrent";


class WorldCurrentCard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            ydata: [],
            total: 0,
            active: 0,
            recovered: 0,
            deaths: 0,
            ytotal: 0,
            yactive: 0,
            yrecovered: 0,
            ydeaths: 0,
        }
    }

    componentDidMount() {

        let totalCases = 0;
        let activeCases = 0;
        let totalRecovered = 0;
        let totalDeath = 0;
        let ytotalCases = 0;
        let yactiveCases = 0;
        let ytotalRecovered = 0;
        let ytotalDeath = 0;

        ApiWorldCurrent.fetch("countries")
            .then(res => {
                res.forEach(country => {
                    totalCases += country.cases
                    activeCases += country.active
                    totalRecovered += country.recovered
                    totalDeath += country.deaths
                })
                this.setState({
                    // data: res,
                    total: totalCases,
                    active: activeCases,
                    recovered: totalRecovered,
                    deaths: totalDeath,
                })
            });
        ApiWorldCurrent.fetch("countries?yesterday=true")
            .then(res => {
                res.forEach(country => {
                    ytotalCases += country.cases
                    yactiveCases += country.active
                    ytotalRecovered += country.recovered
                    ytotalDeath += country.deaths
                })
                this.setState({
                    // ydata: res,
                    ytotal: ytotalCases,
                    yactive: yactiveCases,
                    yrecovered: ytotalRecovered,
                    ydeaths: ytotalDeath,
                })
            });
        // ApiGlobalToday.fetch("summary")
        //     .then(res =>
        //         this.setState({today: res})
        //     )
    }


    render() {

        return (
            <div className="container align-content-center italy-container">

            <div className="row d-flex align-content-center position-sticky" style={{top: "100px"}}>
                    <div className="col-md-12 mb-3">
                        <div className="row">
                            <div className="col-md-3">
                                <Card className="badge badge-info" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{this.state.total}</h3>
                                        <Card.Text>
                                            [Today : {this.state.total - this.state.ytotal}]
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-warning" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{this.state.active}</h3>
                                        <Card.Text>
                                            [Today : {this.state.active - this.state.yactive}]
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-success" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVERED</Card.Title>
                                        <h3>{this.state.recovered}</h3>
                                        <Card.Text>
                                            [Today : {this.state.recovered - this.state.yrecovered}]
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className="badge badge-danger" style={{width: '15rem'}}>
                                    <Card.Body className="text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <h3>{this.state.deaths}</h3>
                                        <Card.Text>
                                            [Today : {this.state.deaths - this.state.ydeaths}]
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WorldCurrentCard;

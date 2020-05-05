import React, {Component} from 'react';
import ApiWorld from "../Api/ApiWorld";
import Loader from "../loder/Loader";

class World extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
        ApiWorld.fetch("countries")
            .then(res => this.setState({
                loading: false,
                data: res}))
    } ,3000)
    }
    render() {
        if (this.state.loading) {
            return (
                <div style={{display: 'flex', height: '100vh'}}>
                    <Loader/>
                </div>)
        }
        return (
            <div className="container world-container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-primary table-bordered table-striped">
                            <thead>
                            <tr className="table-warning">
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((item) => {
                                return (
                                    <tr>
                                        <td className="m-auto p-2"><img style={{width: "40px", borderRadius :"10%"}} src={item.countryInfo.flag}
                                                 alt=""/>
                                           <span className="pl-1">{item.country}</span> </td>
                                        <td align="right">{item.cases}</td>
                                        <td align="right">{item.recovered}</td>
                                        <td align="right">{item.deaths}</td>


                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default World;

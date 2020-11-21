import React, {Component} from 'react';
import ChartCountryPicker from './ChartCountryPicker';
import Chart from "./Chart";
import {fetchData} from "../../Api/ApiWorldChart";


class ViewChart extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({data});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({data, country: country});
    }


    render() {
        const {data, country} = this.state;
        return (
            <div className="chart container d-flex flex-column">

                <ChartCountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default ViewChart;

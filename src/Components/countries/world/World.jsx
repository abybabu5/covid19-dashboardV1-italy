import React, {Component} from 'react';
import ApiWorld from "../../../Api/ApiWorld";
import Loader from "../../../loader/Loader";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {SearchableTable} from "../../tables/SearchableTable";


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
            dataField: 'cases',
            text: 'Total Cases',
            sort: true,
            align: 'right'
        }, {
            dataField: 'recovered',
            text: 'Recovered',
            sort: true,
            align: 'right'
        }, {
            dataField: 'deaths',
            text: 'Death',
            sort: true,
            align: 'right'
        }
        ];
        return (
            <div className="container">
                <SearchableTable data={this.state.data} columns={columns}/>
            </div>
        );
    }
}

export default World;

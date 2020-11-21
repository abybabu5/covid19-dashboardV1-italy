import React, {Component} from 'react';
import ApiIndia from "../../../Api/ApiIndia";
import {Accordion, Button, Card} from "react-bootstrap";
import {SearchableTable} from "../../tables/SearchableTable";
import Loader from "../../../loder/Loader";
import {ReactComponent as Arrow} from '../../../icon/iconfinder_arrow-dropdown_3017945.svg';


class IndiaSates extends Component {
    constructor() {
        super();
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        setTimeout(() => {
            ApiIndia.fetch("state_district_wise.json")
                .then(res => {
                    delete (res['State Unassigned'])
                    this.setState(({stateData: res}))
                });
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <div style={{display: 'flex', height: '100vh'}}>
                    <Loader/>
                </div>)
        }
        const columns = [
            {
                dataField: 'district',
                text: 'District',
                sort: true,
                headerStyle: {width: '200px'}
            },
            {
                dataField: 'confirmed',
                text: 'Confirmed',
                sort: true,
                align: "right"
            },
            {
                dataField: 'active',
                text: 'Active',
                sort: true,
                align: "right"
            },
            {
                dataField: 'recovered',
                text: 'Recovered',
                sort: true,
                align: "right"
            },
            {
                dataField: 'deceased',
                text: 'Deaths',
                sort: true,
                align: "right"
            },
        ];
        let keys = Object.keys(this.state.stateData);
        return (
            <div className="container-fluid mt-5">
                <div className="row accordion-div">
                    <div className="col-md-12">
                        <Accordion className="">
                            {keys.map((item, key) => {
                                //console.log(item);
                                let districts = this.state.stateData[item].districtData;
                                let district_keys = Object.keys(districts);

                                let total_active = 0;
                                let total_confirmed = 0;
                                let total_deaths = 0;
                                let total_recover = 0;
                                let district_list = [];

                                district_keys.forEach((x) => {
                                    total_active += districts[x].active;
                                    total_confirmed += districts[x].total_confirmed;
                                    total_deaths += districts[x].deceased;
                                    total_recover += districts[x].recovered;
                                    let ob = districts[x];
                                    ob.district = x;
                                    district_list.push(ob)
                                });
                                console.log(district_list)
                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={key}
                                                              style={{width: '100%'}}>
                                                <div className="d-flex">
                                                    <div className="mt-2 mb-2 flex-grow-1 text-left">
                                                        <h3>{item}</h3>
                                                    </div>
                                                    <div className="mb-2" style={{marginRight: "10px"}}>
                                                        <Arrow/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <SearchableTable data={district_list} columns={columns}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>)
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        );

    }
}
export default IndiaSates;

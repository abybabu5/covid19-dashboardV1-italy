import React, {Component} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import ApiGithub from "../Api/ApiGithub";
import * as L from "leaflet";
import {ApiWorld} from "../Api/ApiWorld";
import ApiIndia from "../Api/ApiIndia";


export default class CovidIndiaMap extends Component {

    state = {
        lat: 28.644800,
        lng: 77.216721,
        zoom: 6,
        regioniDati: [],
        provinceDati: [],
        show: false
    }
    myIcon = L.icon({
        iconUrl: 'https://www.abybabu.it/images/iconfinder_virus-covid19-corona-coronavirus-location_6000540.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -18],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });

    componentDidMount() {
        ApiWorld.fetch("countries/india")
            .then(res => this.setState({res}))
        ApiIndia.fetch("state_district_wise.json")
            .then(res => this.setState({res}))
    }

    change = () => {
        this.setState({show: !this.state.show});
        console.log(this.state.show)
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div>
                <button type="button" className="btn btn-success change-button"
                        onClick={this.change}>{this.state.show ? "COUNTRIES" : 'TODAY'}</button>
                <Map center={position} zoom={this.state.zoom}
                     style={{paddingTop: '56px', width: "100%", height: "calc(100vh - 56px)"}}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {!this.state.show && this.state.data.map((item) => {
                        return <Marker position={[item.countryInfo.lat, item.countryInfo.long]} icon={this.myIcon}>
                            <Popup>
                                <div align="center"><img style={{width: "70px", borderRadius: "10px"}}
                                                         src={item.countryInfo.flag} alt=""/></div>
                                <div align="center"><b>{item.country}</b></div>
                                <div align="center"> Total Positive Cases: {item.cases}</div>
                                <div align="center"> Recovered: {item.recovered}</div>
                                <div align="center"> Deaths: {item.deaths}</div>
                            </Popup>
                        </Marker>
                    })}
                    {this.state.show && this.state.current.map((item) => {
                        return <Marker position={[item.countryInfo.lat, item.countryInfo.long]} icon={this.myIcon}>
                            <Popup>
                                <div align="center"><img style={{width: "70px", borderRadius: "10px"}}
                                                         src={item.countryInfo.flag} alt=""/></div>
                                <div align="center"><b>{item.country}</b></div>
                                <div align="center"> Today Cases: {item.todayCases}</div>
                                <div align="center"> Recovered till today: {item.recovered}</div>
                                <div align="center"> Current Critical Cases: {item.critical}</div>
                                <div align="center"> Today Deaths: {item.todayDeaths}</div>

                            </Popup>
                        </Marker>
                    })}
                </Map>
            </div>
        )
    }
}

import React, {Component} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import ApiGithub from "../Api/ApiGithub";
import * as L from "leaflet";



export default class CovidMap extends Component {

    state = {
        lat: 41.89277044,
        lng: 12.48366722,
        zoom: 6,
        regioniDati: [],
        provinceDati: [],
        show: false
    }
    myIcon = L.icon({
        iconUrl: 'http://aby.ariken.it/images/iconfinder_virus-covid19-corona-coronavirus-location_6000540.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -18],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });

    componentDidMount() {
        ApiGithub.fetch("dpc-covid19-ita-province-latest.json")
            .then(res => this.setState({provinceDati: res}))
        ApiGithub.fetch("dpc-covid19-ita-regioni-latest.json")
            .then(res => this.setState({regioniDati: res}))
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
                        onClick={this.change}>{this.state.show ? "REGIONS" : 'PROVINCES'}</button>
                <Map center={position} zoom={this.state.zoom} style={{width: "100%", height: "calc(100vh - 64px)"}}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {!this.state.show && this.state.regioniDati.map((item) => {
                        return <Marker position={[item.lat, item.long]} icon={this.myIcon}>
                            <Popup>
                                <div align="center"><b>{item.denominazione_regione}</b></div>
                                <div align="center"> Total Positive Cases: {item.totale_casi}</div>
                                <div align="center"> Recovered: {item.dimessi_guariti}</div>
                                <div align="center"> Deaths: {item.deceduti}</div>
                            </Popup>
                        </Marker>
                    })}
                    {this.state.show && this.state.provinceDati.map((item) => {
                        return <Marker position={[item.lat, item.long]} icon={this.myIcon}>
                            <Popup>
                                <div align="center"><b>{item.denominazione_provincia}</b></div>
                                <div align="center"> Total Cases: {item.totale_casi}</div>
                            </Popup>
                        </Marker>
                    })}
                </Map>
            </div>
        )
    }
}

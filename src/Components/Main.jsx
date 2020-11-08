import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navigation from "./Navigation"
import Italia from "./Italia";
import World from "./World";
import India from "./India";
import CovidMap from "./Map";
import Footer from "./Footer";
import CovidWorldMap from "./WorldMap";
import WorldLast24Hrs from "./WorldLast24Hrs";
import ViewChart from "./ViewChart";
import CovidIndiaMap from "./IndiaMap";


class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Navigation/>
                    <Switch>
                        <Route exact path="/">
                            <Italia/>
                            <Footer/>
                        </Route>
                        <Route path="/italia">
                            <Italia/>
                            <Footer/>
                        </Route>
                        <Route path="/covid19"><Italia/></Route>
                        <Route path="/world"><World/></Route>
                        <Route path="/india"><India/></Route>
                        <Route path="/world-last-24-hours"><WorldLast24Hrs/></Route>
                        <Route path="/map/italy"><CovidMap/></Route>
                        <Route path="/map/india"><CovidIndiaMap/></Route>
                        <Route path="/chart"><ViewChart/></Route>
                        <Route path="/map/world"><CovidWorldMap/></Route>

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default Main;

import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navigation from "./Navigation"
import Italia from "./Italia";
import World from "./World";
import CovidMap from "./Map";
import Footer from "./Footer";
import CovidWorldMap from "./WorldMap";
import WorldLast24Hrs from "./WorldLast24Hrs";


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
                        <Route path="/world-last-24-hours"><WorldLast24Hrs/></Route>
                        <Route path="/map/italy"><CovidMap/></Route>
                        <Route path="/map/world"><CovidWorldMap/></Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default Main;

import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import mapIcon from "../icon/icons8-map-marker-96.png"
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import corona from "../icon/icons8-coronavirus-48.png"


class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <div><img src={corona} alt=""/></div>
                    <Navbar.Brand href="/world-last-24-hours">Covid-19</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/italia">Italy</Link>
                        <Link className="nav-link" to="/world">World</Link>

                    </Nav>
                    <Form inline>
                        <Link to="/map/italy"><img style={{width: "40px"}} src={mapIcon} alt=""/></Link>
                    </Form>
                </Navbar>
            </>
        );
    }
}

export default Navigation;

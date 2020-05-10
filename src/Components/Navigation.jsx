import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import corona from "../icon/iconfinder_SocialDistancing-coronavirus-corona-covid19-safe_6071810.svg"
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";



class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <div className="mr-2"><img className="corona-nav-img" src={corona}
                                               style={{borderRadius: "10%", backgroundColor: "#FFD700", width: "3vw"}}
                                               alt=""/></div>
                    <Navbar.Brand>
                        <Link className="covid-19" to="/world-last-24-hours"
                              style={{textDecoration: "none", color: "white"}}>Covid-19</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/italia">Italy</Link>
                        <Link className="nav-link" to="/world">World</Link>

                    </Nav>
                    <Form inline>
                        {/*<Link to="/map/italy"><img style={{width: "50px"}} src={mapIcon} alt=""/></Link>*/}
                    </Form>
                </Navbar>
            </>
        );
    }
}

export default Navigation;

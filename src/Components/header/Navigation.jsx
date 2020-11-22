import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import corona from "../../icon/iconfinder_SocialDistancing-coronavirus-corona-covid19-safe_6071810.svg"
import {Link} from "react-router-dom";
import chartIcon from "../../icon/iconfinder_f-analytics_256_282476.png";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" sticky="top" expand="lg" inverse
                        toggleNavKey={0}>
                    <div className="mr-2">
                        <img className="corona-nav-img" src={corona} alt=""/>
                    </div>
                    <Navbar.Brand>
                        <Link className="covid-19" to="/world-last-24-hours"
                              style={{textDecoration: "none", color: "white"}}>COVID-19</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
                        <Nav className="mr-auto">
                            <NavItem>
                                <Link className="nav-link" to="/italia">ITALY</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/india">INDIA</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/world">WORLD</Link>
                            </NavItem>
                        </Nav>
                        <Form inline>
                            <Link to="/chart"><img style={{width: "35px"}} src={chartIcon} alt=""/></Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Navigation;

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import dpc from "../images/dpc.png"
import Navbar from "react-bootstrap/Navbar";
import corona from "../icon/icons8-coronavirus-48.png";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import mapIcon from "../icon/icons8-map-marker-96.png";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small bg-dark mt-5 sticky-footer">
                    <div className="footer-copyright text-center py-3"><span style={{color: "white"}}>Data from Dipartimento della Protezione Civile</span>
                        <img src={dpc} style={{width: "30px"}} alt=""/>
                    </div>


                </footer>
            </div>
        );
    }
}

export default Footer;
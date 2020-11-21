import React, {Component} from 'react';
import dpc from "../../images/dpc.png"


class Footer extends Component {
    render() {
        return (
            <div className="mt-5">
                <footer className="page-footer font-small bg-dark mt-5 sticky-footer">
                    <div className="footer-copyright text-center py-2"><span style={{color: "white"}}>Data from Dipartimento della Protezione Civile  <img
                        src={dpc} style={{width: "30px"}} alt=""/></span>

                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;

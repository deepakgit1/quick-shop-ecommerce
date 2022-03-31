import React from 'react'
import "./footer.css"

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_details_one">
                    <h3>
                        Get to know Us
                    </h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Release</p>
                    <p>QuickShop Cares</p>
                </div>
                <div className="footer_details_one">
                    <h3>
                        Contact us
                    </h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer_details_one forres">
                    <h3>
                        Make Money with Us
                    </h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>QuickShop Cares</p>
                </div>
                <div className="footer_details_one forres">
                    <h3>
                        Make Money with Us
                    </h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Release</p>
                    <p>QuickShop Cares</p>
                </div>
            </div>

            <div className="lastdetails">
                <img src="./logo.jpg" alt="" />
                <p>Conditions of  Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, QuickShop.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer
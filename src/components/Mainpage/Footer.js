import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/mainpage.css';
import './css/footer.css';

function Footer() {
    return (
        <footer className="mainfooter">
            <div className="bottom-footer container">
                <nav className="toplink">
                    <ul className="footernav">
                        <li className="footerlink">
                            <a href=''>About us</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Contact Us</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Terms and Conditions</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Privacy and Cookies</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Privacy Options</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Help</a>
                        </li>
                        <li className="footerlink">
                            <a href=''>Redeem Voucher</a>
                        </li>
                    </ul>
                </nav>

                <nav className="toplink region">
                    <ul className="footernav regionnav">
                        <li className="footerlink regionlink">
                            <span>United Kingdom and Republic of Ireland</span>
                        </li>
                        <li className="footerlink regionlink">
                            <a href=''>Deutschland und Österreich</a>
                        </li>
                    </ul>
                </nav>
                <nav className="toplink copyright">
                    <ul className="footernav copyrightnav">
                        <li className="footerlink copyrightlink">
                            <span>© Sky UK All Rights Reserved</span>
                        </li>
                    </ul>

                </nav>
            </div>
        </footer>
    );
}

export default Footer
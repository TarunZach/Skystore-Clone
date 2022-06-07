import React, { useState } from 'react';
import '../styles.css';
import { Helmet } from 'react-helmet';
import Logmobile from '../components/Login/Logmobile';
import Login from '../components/Login/Login';

const LoginForm = (props) => {
    return (
        <div className='appHeader'>
            <Helmet>
                <title>Sky - Sign in</title>
            </Helmet>
            <div className='bgSign'>
                <Login />
            </div>
            <div className='footer'>

                <hr style={{
                    marginTop: "15px",
                    width: "960px",
                    marginBottom: "0px"
                }}></hr>
                <div className='footerLinks'>
                    <ul>
                        <li>
                            <a href='#' className='forgotSign' style={{
                                fontSize: "11px",
                                borderLeft: "none"
                            }}>Privacy & Cookies Notice</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign' style={{
                                fontSize: "11px",
                                borderLeft: "solid 1px #cccccc"
                            }}>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign' style={{
                                fontSize: "11px",
                                borderLeft: "solid 1px #cccccc"
                            }}>Accessibility Information</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign' style={{
                                fontSize: "11px",
                                borderLeft: "solid 1px #cccccc"
                            }}>Feedback</a>
                        </li>

                        <li>
                            <p className='signText' style={{
                                margin: "3px",
                                marginLeft: "450px",
                                fontSize: "11px"
                            }}>© 2022 Sky UK</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Form */}
            <div className="mobileForm">
                <Logmobile />
            </div>
            {/* End mobile form */}
        </div>
    );
}


export default LoginForm
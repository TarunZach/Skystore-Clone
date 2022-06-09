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

                <hr className='footerborder' />
                <div className='footerLinks'>
                    <ul>
                        <li>
                            <a href='#' className='forgotSign firstloglink'>Privacy & Cookies Notice</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign loglink'>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign loglink'>Accessibility Information</a>
                        </li>
                        <li>
                            <a href='#' className='forgotSign loglink'>Feedback</a>
                        </li>

                        <li>
                            <p className='signText copyrightlog'>© 2022 Sky UK</p>
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
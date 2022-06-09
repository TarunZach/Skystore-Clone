import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import './Signup/signup.css';
import '../styles.css';
import { Helmet } from 'react-helmet';
import Signup from './Signup/Signup';


function SignUpForm() {

    let history = useNavigate();

    return (
        <div id='pageWrapper'>
            <Helmet>
                <title>Sky - Sign up</title>
            </Helmet>
            <div className="supHeader">
                <div id="logo" onClick={() =>
                    history('/')
                }></div>
            </div>
            <div className="formWrapper">
                <div className="formContainer">
                    <div className="formHeader">
                        <h2 style={{
                            color: "rgb(5,52,123)",
                            fontSize: "1.3em",
                            fontWeight: "300",
                            marginLeft: "12px",
                            marginTop: "0px",
                            marginBottom: "5px"
                        }}>Create a Sky iD</h2>

                        <p className='supsignText signText'>Already have a Sky iD?
                            <ul className='supul'>
                                <li>
                                    <a className='forgotSign supforgotSign' onClick={() =>
                                        history('/signin')} style={{
                                            borderLeft: "none"
                                        }}>Sign in</a>
                                </li>
                                <li>
                                    <a href='#' className='supforgotSign forgotSign' style={{
                                    }}>Help</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <Signup />
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
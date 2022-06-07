import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/mainpage.css';

function Footer(){
    return(
        <footer className="mainfooter">
            <div className="bottom-footer container">
                <div className="app-footer">
                    <p className="appText">Get the Sky Store mobile app: </p>
                    <a href="">
                        <img src="https://www.skystore.com/assets/img/store-icon/android-en.svg" alt="" className="gplayimg" width="130px" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
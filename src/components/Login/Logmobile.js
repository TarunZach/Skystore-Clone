import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles.css';
import './login.css'
import skylogo from '../../img/skylogo.png';


function Logmobile() {
    let history = useNavigate();

    const [unameError, setunameError] = useState(null);
    const [passwordError, setpasswordError] = useState(null);

    function errorMessage(e) {
        return (
            <div className='errorMessage'>{e}</div>
        );
    }

    const handleValidation = (e) => {
        e.preventDefault();
        var uname = document.getElementById('username');
        var pword = document.getElementById('password');
        let data = sessionStorage.getItem("userDetails");
        data = JSON.parse(data);
        console.log(data);

        if (uname.value === "" || pword.value === "") {
            if (uname.value === "") {
                document.getElementById('username').style.border = "thin solid red";
                setunameError('Please Enter Username or Email');
            }
            if (pword.value === "") {
                document.getElementById('password').style.border = "thin solid red";
                setpasswordError('Please Enter Password');
            }
            if (uname.value === "" && pword.value === "") {
                document.getElementById('username').style.border = "thin solid red";
                setunameError('Please Enter Username or Email');
                document.getElementById('password').style.border = "thin solid red";
                setpasswordError('Please Enter Password');
            }
        } else if (data != null) {
            var password = atob(data.password);
            if (data.fname == uname.value || data.email == uname.value) {
                if (password == pword.value) {
                    document.getElementById('username').style.border = "thin solid black";
                    document.getElementById('password').style.border = "thin solid black";
                    alert('Login Successful');
                    sessionStorage.setItem("loggedIn", true);
                    setTimeout(() => {
                        history('/')
                    }, 2);
                }
                else {
                    alert('Wrong Username or Password');
                    document.getElementById('username').style.border = "thin solid red";
                    setunameError('Please Enter Username or Email');
                    document.getElementById('password').style.border = "thin solid red";
                    setpasswordError('Please Enter Password');
                    //    window.location.reload();
                }
            } else {
                alert('Wrong Username or Password');
                document.getElementById('username').style.border = "thin solid red";
                setunameError('Please Enter Username or Email');
                document.getElementById('password').style.border = "thin solid red";
                setpasswordError('Please Enter Password');
                // window.location.reload();
            }
        }
        else {
            alert('Account does not exist');
        }

    }
    return (
        <form className='skyFormMobile'>
            <div className='form-inner'>
                <img src={skylogo} alt='logo' className='imglink' onClick={() =>
                    history('/')
                } />
                <hr className='mobileborder' />
                <p className='signText newidmobile'>New to Sky iD? <a className='forgotSign' href="#">Sign up</a></p>
                <h2 className='signintitle'>Sign in</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor="name" className='signText emailmob'>Email or Username</label><span className='break signUpbreak' />
                    <input
                        type="text"
                        name="username"
                        id='username'
                        className='inputSign'

                        onChange={(e) => {
                            setunameError('');
                            document.getElementById('username').style.border = "thin solid black";
                        }}
                    />
                    {
                        unameError ? errorMessage(unameError) : null
                    }
                </div>

                <div className='form-group'>
                    <label htmlFor="password" className='signText emailmob'>Password</label><span className='break signUpbreak' />
                    <input
                        type="password"
                        name="password"
                        id='password'
                        className='inputSign'

                        onChange={(e) => {
                            setpasswordError('');
                            document.getElementById('password').style.border = "thin solid black";
                        }}
                    />
                    {
                        passwordError ? errorMessage(passwordError) : null
                    }
                </div>

                <p className='signText mobileforgot'>Forgotten <a className='forgotSign' href='#'>username</a> or <a className='forgotSign' href='#'>password</a>?</p>

                <input type="checkbox" className='checkmark' /> <label className='signText remembermobile'>Remember my username</label><br />
                <a className='forgotSign privacymobile' href='#'>Privacy & Cookies Notice</a><br />

                <button className='signInMobile' value="Sign in" onClick={handleValidation}> Sign in </button>
            </div>
        </form>
    );
}

export default Logmobile
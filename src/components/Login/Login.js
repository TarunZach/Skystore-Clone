import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles.css';
import './login.css';
import skylogo from '../../img/skylogo.png';


function Login() {
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
        <form className='skyForm'>
            <div className='form-inner'>
                <img className='imglink' src={skylogo} alt='logo' onClick={() =>
                    history('/')
                } />
                <hr className='topborder'/>
                <h2 className='titlesin'>Sign in</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor="name" className='signText namelabel'>Email or Username</label>
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
                    <label htmlFor="password" className='signText namelabel'>Password</label>
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

                <p className='signText forgotuser'>Forgotten <a className='forgotSign' href='#'>username</a> or <a className='forgotSign' href='#'>password</a>?</p>

                <input type="checkbox" className='checkmark' /> <label className='signText'>Remember my username</label><br />
                <a className='forgotSign privacylink' href='#'>Privacy & Cookies Notice</a><br />

                <input type="submit" className='signIn' value="Sign in" onClick={handleValidation} />
                <hr className='midborder'/>
                <h2 className='newid'>New to Sky iD?</h2>
                <p className='signText signDescription'>You'll need a Sky iD before you can access some of our services.</p>
                <p className='signText signDescription'>If you have signed up for another Sky online service you already have one.</p>
                <div className='signInBottom'>
                    <p className='signText moretext'>More about <a href='#' className='forgotSign'>Sky iD</a></p>
                    <button className='signUp' value="Sign up" onClick={() =>
                        history('/signup')
                    }>Sign up</button>
                </div>
            </div>
        </form>
    );
}

export default Login
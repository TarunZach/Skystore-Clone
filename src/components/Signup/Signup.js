import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./signup.css";
import "../../styles.css";

function Signup() {
  let history = useNavigate();

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [cemail, setCemail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const [fnameError, setfnameError] = useState(null);
  const [lnameError, setlnameError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [cemailError, setcemailError] = useState(null);
  const [passwordError, setpasswordError] = useState(null);
  const [cpasswordError, setcpasswordError] = useState(null);

  function errorMessage(e) {
    return <div className="errorMessage">{e}</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var title = document.getElementById("title");
    if (
      title.value == "Please select" ||
      fname == null ||
      lname == null ||
      email == null ||
      password == null
    ) {
      if (title.value == "Please select") {
        title.style.border = "thin solid red";
      }
      if (fname == null) {
        setfnameError("Please Enter Name");
        document.getElementById("signupfname").style.border = "thin solid red";
        console.log(fnameError);
      }
      if (lname == null) {
        setlnameError("Please Enter Name");
        document.getElementById("signuplname").style.border = "thin solid red";
      }
      if (email == null) {
        setemailError("Please Enter Email");
        document.getElementById("email").style.border = "thin solid red";
      }
      if (password == null) {
        setpasswordError("Please Enter Password");
        document.getElementById("password").style.border = "thin solid red";
      }
    } else {
      if (
        !fnameError &&
        !lnameError &&
        !emailError &&
        !cemailError &&
        !passwordError &&
        !cpasswordError
      ) {
        const obj = {
          fname,
          lname,
          email,
          password: btoa(password)
        };
        if (
          document.getElementById("terms").checked &&
          document.getElementById("conditions").checked
        ) {
          sessionStorage.setItem("userDetails", JSON.stringify(obj));
          history("/signin");
        } else {
          alert("Please check all boxes");
        }
      }
    }
  };
  return (
    <form className="inputFormWrapper">
      <div className="form-group">
        <label htmlFor="title" className="supsignText signText" id="titlesup">
          Title
        </label>
        <span className="break signUpbreak" />
        <select
          id="title"
          className="supinputSign inputSign dropDown"
          onChange={(e) => {
            document.getElementById("title").style.border = "1px solid #abb6c5";
          }}
        >
          <option selected="selected" value="Please select">
            Please select
          </option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
          <option value="Rev">Rev</option>
          <option value="Prof">Prof</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <span className="break signUpbreak" />
      <div className="form-group">
        <label htmlFor="fname" className="supsignText signText" id="titlesup">
          First name
        </label>
        <span className="break signUpbreak" />
        <input
          type="text"
          name="fname"
          id="signupfname"
          className="supinputSign inputSign"
          value={fname}
          onBlur={(e) => {
            if (!!e.target.value) {
              if (e.target.value.match(/^[a-zA-Z\s, ]+$/)) {
                setfnameError("");
                document.getElementById("signupfname").style.border =
                  "1px solid #abb6c5";
                setFname(e.target.value);
              } else {
                setfnameError("Please enter Name");
                document.getElementById("signupfname").style.border =
                  "thin solid red";
              }
            } else {
              setfnameError("Please enter Name");
              document.getElementById("signupfname").style.border =
                "thin solid red";
            }
          }}
          onChange={(e) => {
            setFname(e.target.value);
            setfnameError("");
            document.getElementById("signupfname").style.border =
              "1px solid #abb6c5";
          }}
        />
        {fnameError ? errorMessage(fnameError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label htmlFor="lname" className="supsignText signText" id="titlesup">
          Last name
        </label>
        <span className="break signUpbreak" />
        <input
          type="text"
          name="lname"
          id="signuplname"
          className="supinputSign inputSign"
          value={lname}
          onBlur={(e) => {
            if (!!e.target.value) {
              if (e.target.value.match(/^[a-zA-Z\s, ]+$/)) {
                setlnameError("");
                document.getElementById("signuplname").style.border =
                  "1px solid #abb6c5";
                setLname(e.target.value);
              } else {
                setlnameError("Please enter Name");
                document.getElementById("signuplname").style.border =
                  "thin solid red";
              }
            } else {
              setlnameError("Please enter Name");
              document.getElementById("signuplname").style.border =
                "thin solid red";
            }
          }}
          onChange={(e) => {
            setLname(e.target.value);
            setlnameError("");
            document.getElementById("signuplname").style.border =
              "1px solid #abb6c5";
          }}
        />
        {lnameError ? errorMessage(lnameError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label htmlFor="email" className="supsignText signText" id="titlesup">
          Email address
        </label>
        <span className="break signUpbreak" />
        <input
          type="email"
          name="email"
          id="email"
          className="supinputSign inputSign"
          value={email}
          onBlur={(e) => {
            if (!!e.target.value) {
              if (
                e.target.value.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]()?\w+)*(\.\w{2,3})+$/
                )
              ) {
                setemailError("");
                document.getElementById("email").style.border =
                  "1px solid #abb6c5";
                setEmail(e.target.value);
              } else {
                setemailError("Must include @ and .com/.co.in");
                document.getElementById("email").style.border =
                  "thin solid red";
              }
            } else {
              setemailError("Please Enter Email");
              document.getElementById("email").style.border = "thin solid red";
            }
          }}
          onChange={(e) => {
            setEmail(e.target.value);
            setemailError("");
            document.getElementById("email").style.border = "1px solid #abb6c5";
          }}
        />
        {emailError ? errorMessage(emailError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label
          htmlFor="confirmemail"
          className="supsignText signText"
          id="titlesup"
        >
          Confirm email address
        </label>
        <span className="break signUpbreak" />
        <input
          type="email"
          name="cemail"
          id="cemail"
          className="supinputSign inputSign"
          value={cemail}
          onBlur={(e) => {
            if (e.target.value == email) {
              setcemailError("");
              document.getElementById("email").style.border =
                "1px solid #abb6c5";
              setCemail(e.target.value);
            } else {
              setcemailError("Email does not match");
              document.getElementById("cemail").style.border = "thin solid red";
            }
          }}
          onChange={(e) => {
            setCemail(e.target.value);
            setcemailError("");
            document.getElementById("cemail").style.border =
              "1px solid #abb6c5";
          }}
        />
        {cemailError ? errorMessage(cemailError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label htmlFor="pw" className="supsignText signText" id="titlesup">
          Password
        </label>
        <span className="break signUpbreak" />
        <input
          type="password"
          name="password"
          id="password"
          className="supinputSign inputSign"
          value={password}
          onBlur={(e) => {
            if (!!e.target.value) {
              if (
                e.target.value.match(
                  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
                )
              ) {
                setpasswordError("");
                document.getElementById("password").style.border =
                  "1px solid #abb6c5";
                setPassword(e.target.value);
              } else {
                setpasswordError("Must include 6 Letters/Numbers, 1 Capital");
                document.getElementById("password").style.border =
                  "thin solid red";
              }
            } else {
              setpasswordError("Please Enter Password");
              document.getElementById("password").style.border =
                "thin solid red";
            }
          }}
          onChange={(e) => {
            setPassword(e.target.value);
            setpasswordError("");
            document.getElementById("password").style.border =
              "1px solid #abb6c5";
          }}
        />
        {passwordError ? errorMessage(passwordError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label
          htmlFor="confirmpass"
          className="supsignText signText"
          id="titlesup"
        >
          Confirm password
        </label>
        <span className="break signUpbreak" />
        <input
          type="password"
          name="cpassword"
          id="cpass"
          className="supinputSign inputSign"
          value={cpassword}
          onBlur={(e) => {
            if (e.target.value == password) {
              setcpasswordError("");
              document.getElementById("cpass").style.border =
                "1px solid #abb6c5";
              setCpassword(e.target.value);
            } else {
              setcpasswordError("Password Does Not Match");
              document.getElementById("cpass").style.border = "thin solid red";
            }
          }}
          onChange={(e) => {
            setCpassword(e.target.value);
            setcpasswordError("");
            document.getElementById("cpass").style.border = "1px solid #abb6c5";
          }}
        />
        {cpasswordError ? errorMessage(cpasswordError) : null}
      </div>

      <span className="break signUpbreak" />
      <div className="form-group captcha">
        <img
          src="https://skyid.sky.com/captcha/jpeg?width=200&height=60&cachebuster=1653481476507"
          alt="captcha"
          height="60"
          width="200"
        />
      </div>

      <span className="break signUpbreak" />
      <div className="form-group">
        <label htmlFor="captcha" className="supsignText signText" id="titlesup">
          Enter the characters in the box
        </label>
        <span className="break signUpbreak" />
        <input
          type="text"
          name="captcha"
          id="captcha"
          className="supinputSign inputSign"
        />
      </div>
      <span className="break signUpbreak" />
      <div className="form-group checkbox1">
        <input
          type="checkbox"
          className="checkmark"
          id="terms"
          style={{
            marginLeft: "0px"
          }}
        />
        <label className="checkbox" htmlFor="terms" id="labelcheckbox">
          <p className="supsignText signText" id="termsdescription">
            I have read and agree to the Sky Store{" "}
            <a href="#" className="supforgotSign forgotSign">
              terms & conditions
            </a>{" "}
            and the Sky{" "}
            <a href="#" className="supforgotSign forgotSign">
              terms & conditions
            </a>
          </p>
        </label>
      </div>

      <div
        className="form-group checkbox1"
        style={{
          marginTop: "0px"
        }}
      >
        <input
          type="checkbox"
          className="checkmark"
          id="conditions"
          style={{
            marginLeft: "0px"
          }}
        />
        <label className="checkbox" htmlFor="terms" id="labelcheckbox">
          <p className="supsignText signText" id="termsdescription">
            We’d like to use your contact details to update you about offers,
            products and services. You are free to change your mind at any stage
            in the future. You can view our{" "}
            <a href="#" className="supforgotSign forgotSign">
              Privacy & Cookies Notice
            </a>{" "}
            on Sky.com. If this is OK please tick here.{" "}
          </p>
        </label>
      </div>

      <div className="buttonrow">
        <a
          href="#"
          className="supforgotSign forgotSign"
          onClick={() => history(-1)}
        >
          Cancel
        </a>
        <button
          id="submitButton"
          className="signIn supsignIn"
          type="submit"
          onClick={handleSubmit}
        >
          Create Sky iD
        </button>
        <button
          id="cancelButtonMobile"
          className="signIn supCancel"
          type="button"
          onClick={() => history(-1)}
        >
          Cancel
        </button>
      </div>

      <div className="supFooter">
        <hr id="borderhr"></hr>
        <div className="supfooterLinks">
          <ul id="listnav">
            <li>
              <a href="#" className="forgotSign listlink firstlink">
                Privacy & Cookies Notice
              </a>
            </li>
            <li>
              <a href="#" className="forgotSign listlink" id="listlink">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="forgotSign listlink" id="listlink">
                Accessibility Information
              </a>
            </li>
            <li>
              <a href="#" className="forgotSign listlink" id="listlink">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <hr id="footerborder"></hr>
      </div>
      <div className="supFooterBottom">
        <span id="copyright" className="signText supsignText">
          © 2022 Sky UK
        </span>
      </div>
    </form>
  );
}

export default Signup;

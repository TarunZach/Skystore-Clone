import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/mainpage.css";
import { Navigate, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <div className="header-bar">
        <div className="header-outer-wrapper">
          <div className="header-inner-wrapper">
            <div id="menuToggle">
              <input className="sidebar" type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link className="active" to="/">
                  <li>Home</li>
                </Link>
                <hr className="sideNav" />
                <Link to="/signin">
                  {" "}
                  <li>Sign In</li>
                </Link>
                <Link to="/signup">
                  <li>Sign Up</li>
                </Link>
                <hr className="sideNav" />
                <Link to="rent">
                  <li>Movies</li>
                </Link>
                <Link to="prem">
                  <li>Sky Store Premiere</li>
                </Link>
                <Link to="picks">
                  <li>Spring Sale</li>
                </Link>
                <Link to="gift">
                  <li>Sky VIP</li>
                </Link>
                <Link to="popular">
                  <li>TV</li>
                </Link>
                <hr className="sideNav" />
                <Link to="redeem">
                  <li>Redeem Voucher</li>
                </Link>
              </ul>
            </div>
            <span className="browseText">Browse</span>
            <div className="logo-wrapper">
              <a className="anchor logo-anchor">
                <picture className="logo">
                  <img
                    srcSet="https://www.skystore.com/versions/6.3.0/assets/img/sky-logo@2x.png"
                    alt="sky store"
                  />
                </picture>
              </a>
              <div className="header-right search">
                <nav className="user-menu">
                  <ul className="loginmenu">
                    <li className="menu-item firstitem">
                      <Link className="anchor" to="/signin">
                        <span className="text">Sign In</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="anchor" to="/signup">
                        <span className="text">Sign Up</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="search-container">
                  <div className="search-input">
                    <input
                      type="search"
                      id="searchbox"
                      className="textbox expandright"
                      autoComplete="off"
                      autoCorrect="off"
                      placeholder="Search"
                    />
                    <span className="searchicon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchMobile">
              <button className="searchToggle" onClick={handleOnClick}>
                {!show ? (
                  <span className="searchiconmobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                ) : null}
                {show ? <span className="textMobile">Cancel</span> : null}
              </button>
            </div>
            {show ? (
              <input
                type="search"
                placeholder="Search for title, actors, directors"
                name=""
                className="searchinputMobile"
              />
            ) : null}
          </div>
          <div className="navbar-wrapper">
            <nav className="nav-bar">
              <ul className="parent dropwdownmenu">
                <li
                  className="dropdown-item"
                  style={{
                    width: "89.25px",
                    padding: "12px",
                    height: "55px"
                  }}
                >
                  <span className="homelink">
                    <Link className="dropbtn homebtn" to="/">
                      Home
                    </Link>
                  </span>
                </li>
                <li
                  className="dropdown-item dropdown"
                  style={{
                    width: "130px"
                  }}
                >
                  <button
                    className="dropbtn"
                    style={{
                      width: "130px"
                    }}
                  >
                    Movies
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <Link className="anchor" to="rent">
                      New To Rent
                    </Link>
                    <Link className="anchor" to="buy">
                      New To Buy
                    </Link>
                    <Link className="anchor" to="preorder">
                      Pre-Order
                    </Link>
                    <Link className="anchor" to="moviebox">
                      Movie Box Sets
                    </Link>
                    <Link className="anchor" to="bond">
                      Bond Collection
                    </Link>
                    <Link className="anchor" to="filmchart">
                      Official Film Chart
                    </Link>
                    <a className="anchor">Browse</a>
                    <Link className="anchor" to="atoz">
                      A to Z
                    </Link>
                  </div>
                </li>
                <li
                  className="dropdown-item skyStoreitem"
                  style={{
                    width: "207px",
                    height: "55px",
                    padding: "13px"
                  }}
                >
                  <Link className="dropbtn dropbtnlong prembtn" to="prem">
                    Sky Store Premiere
                  </Link>
                </li>
                <li className="dropdown-item dropdown springSale">
                  <button className="dropbtn springSalebtn">
                    Spring Sale
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <Link className="anchor" to="picks">
                      Store Picks
                    </Link>
                    <Link className="anchor" to="under3">
                      Under £3
                    </Link>
                    <Link className="anchor" to="under4">
                      Under £4
                    </Link>
                    <Link className="anchor" to="under5">
                      Under £5
                    </Link>
                    <Link className="anchor" to="set">
                      Movie Box Sets
                    </Link>
                    <Link className="anchor" to="tvset">
                      TV Boxsets
                    </Link>
                    <Link className="anchor fold" to="startrek">
                      <p className="foldtext">
                        Star Trek Wrath of Khan 40th Anniversary
                      </p>
                    </Link>
                  </div>
                </li>
                <li className="dropdown-item dropdown vip">
                  <button className="dropbtn vipbtn">
                    Sky VIP
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <Link className="anchor" to="gift">
                      Sky VIP Gift
                    </Link>
                  </div>
                </li>
                <li
                  className="dropdown-item dropdown"
                  style={{
                    width: "92px"
                  }}
                >
                  <button
                    className="dropbtn"
                    style={{
                      width: "92px"
                    }}
                  >
                    TV
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <Link className="anchor" to="popular">
                      Most Popular
                    </Link>
                    <Link className="anchor" to="newstore">
                      New To Store
                    </Link>
                    <Link className="anchor" to="drama">
                      Drama
                    </Link>
                    <Link className="anchor" to="comedy">
                      Comedy
                    </Link>
                    <Link className="anchor" to="kids">
                      Kids
                    </Link>
                    <Link className="anchor" to="all">
                      All
                    </Link>
                  </div>
                </li>
                <li className="dropdown-item redeem">
                  <Link to="redeem">
                    <button className="dropbtn redeembtn">
                      Redeem Voucher
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

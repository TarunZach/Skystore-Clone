import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/mainpage.css';


const Header = (props) => {
    let history = useNavigate();
    const [show, setShow] = useState(false);
    const [active, setActive] = useState("home");


    const handleOnClick = () => {
        if (show == false) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    const handleRent = () => {
        setActive("rent");
    }
    useEffect(() => {
        console.log(active);
        props.onClick(active);
    })
    

    const handleHome = () => {
        setActive("main");
        props.onClick(active);
    }

    return (
        <div className="header-bar">
            <div className="header-outer-wrapper">
                <div className="header-inner-wrapper">
                    <div id="menuToggle">
                        <input className="sidebar" type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a className='active' onClick={handleHome}><li>Home</li></a>
                            <hr className='sideNav' />
                            <a href="#" onClick={() =>
                                history('/signin')}> <li>Sign In</li></a>
                            <a href="#" onClick={() =>
                                history('/signup')
                            }><li>Sign Up</li></a>
                            <hr className='sideNav' />
                            <a href="#"><li>Movies</li></a>
                            <a href="#"><li>Sky Store Premiere</li></a>
                            <a href="#"><li>Spring Sale</li></a>
                            <a href="#"><li>Sky VIP</li></a>
                            <a href="#"><li>TV</li></a>
                            <hr className='sideNav' />
                            <a href="#"><li>Redeem Voucher</li></a>
                        </ul>
                    </div>
                    <span className='browseText'>Browse</span>
                    <div className="logo-wrapper">
                        <a href="#" className="anchor logo-anchor">
                            <picture className='logo'>
                                <img srcSet='https://www.skystore.com/versions/6.3.0/assets/img/sky-logo@2x.png' alt='sky store' />
                            </picture>
                        </a>
                        <div className="header-right search">
                            <nav className='user-menu'>
                                <ul className="loginmenu">
                                    <li className="menu-item firstitem">
                                        <a className="anchor" onClick={() =>
                                            history('/signin')
                                        }>
                                            <span className="text">Sign In</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="anchor" onClick={() =>
                                            history('/signup')
                                        }>
                                            <span className="text">Sign Up</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="search-container">
                                <div className="search-input">
                                    <input
                                        type="search"
                                        id='searchbox'
                                        className="textbox expandright"
                                        autoComplete='off'
                                        autoCorrect='off'
                                        placeholder='Search'
                                    />
                                    <span className='searchicon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchMobile">
                        <button className="searchToggle" onClick={handleOnClick}>
                            {
                                !show ? <span className='searchiconmobile'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span> : null
                            }
                            {
                                show ? <span className='textMobile'>Cancel</span> : null
                            }
                        </button>
                    </div>
                    {
                        show ? <input type="search" placeholder='Search for title, actors, directors' name="" className="searchinputMobile" /> : null
                    }
                </div>
                <div className="navbar-wrapper">
                    <nav className="nav-bar">
                        <ul className="parent dropwdownmenu">
                            <li className="dropdown-item" style={{
                                width: "89.25px"
                            }}>
                                <button className="dropbtn" style={{
                                    color: "#f4ce24",
                                    width: "89.25px"
                                }}>
                                    Home
                                </button>
                            </li>
                            <li className="dropdown-item dropdown" style={{
                                width: "130px"
                            }}>
                                <button className="dropbtn" style={{
                                    width: "130px"
                                }}>
                                    Movies
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></span>
                                </button>
                                <div className="dropdown-content">
                                    <a className="anchor" onClick={handleRent}>New To Rent</a>
                                    <a href="" className="anchor">New To Buy</a>
                                    <a href="" className="anchor">Pre-Order</a>
                                    <a href="" className="anchor">Movie Box Sets</a>
                                    <a href="" className="anchor">Bond Collection</a>
                                    <a href="" className="anchor">Official Film Chart</a>
                                    <a href="" className="anchor">Browse</a>
                                    <a href="" className="anchor">A to Z</a>
                                </div>
                            </li>
                            <li className="dropdown-item skyStoreitem">
                                <button className="dropbtn dropbtnlong">
                                    Sky Store Premiere
                                </button>
                            </li>
                            <li className="dropdown-item dropdown springSale">
                                <button className="dropbtn springSalebtn">
                                    Spring Sale
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></span>
                                </button>
                                <div className="dropdown-content">
                                    <a href="" className="anchor">Store Picks</a>
                                    <a href="" className="anchor">Under £3</a>
                                    <a href="" className="anchor">Under £4</a>
                                    <a href="" className="anchor">Under £5</a>
                                    <a href="" className="anchor">Movie Box Sets</a>
                                    <a href="" className="anchor">TV Boxsets</a>
                                    <a href="" className="anchor" style={{
                                        width: "170px",
                                        height: "70px"
                                    }}><p style={{
                                        whiteSpace: "pre-line",
                                        width: "180px",
                                        height: "50px"
                                    }}>Star Trek Wrath of Khan 40th Anniversary</p></a>
                                </div>
                            </li>
                            <li className="dropdown-item dropdown vip">
                                <button className="dropbtn vipbtn">
                                    Sky VIP
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></span>
                                </button>
                                <div className="dropdown-content">
                                    <a href="" className="anchor">Sky VIP Gift</a>
                                </div>
                            </li>
                            <li className="dropdown-item dropdown" style={{
                                width: "92px"
                            }}>
                                <button className="dropbtn" style={{
                                    width: "92px"
                                }}>
                                    TV
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></span>
                                </button>
                                <div className="dropdown-content">
                                    <a href="" className="anchor">Most Popular</a>
                                    <a href="" className="anchor">New To Store</a>
                                    <a href="" className="anchor">Drama</a>
                                    <a href="" className="anchor">Comedy</a>
                                    <a href="" className="anchor">Kids</a>
                                    <a href="" className="anchor">All</a>
                                </div>
                            </li>
                            <li className="dropdown-item redeem">
                                <button className="dropbtn redeembtn">
                                    Redeem Voucher
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}


export default Header
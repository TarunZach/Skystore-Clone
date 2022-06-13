import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/mainpage.css';


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

    const handleHome = () => {
        setActive("home");
    }

    const handleMovie = () => {
        setActive("moviebox");
    }

    const handleBuy = () => {
        setActive("buy");
    }

    const handlePre = () => {
        setActive("pre");
    }

    const handleBond = () => {
        setActive("bond");
    }

    const handlePrem = () => {
        setActive("prem");
    }

    const handlePicks = () => {
        setActive("picks");
    }

    const handleUnder3 = () => {
        setActive("under3");
    }

    const handleUnder4 = () => {
        setActive("under4");
    }

    const handleUnder5 = () => {
        setActive("under5");
    }

    const handleSet = () => {
        setActive("springset");
    }

    const handleTVSet = () => {
        setActive("tvset");
    }

    const handleStartrek = () => {
        setActive("startrek");
    }

    const handlePopular = () => {
        setActive("popular");
    }

    const handleNewStore = () => {
        setActive("newstore");
    }

    const handleDrama = () => {
        setActive("drama");
    }

    const handleComedy = () => {
        setActive("comedy");
    }

    const handleKids = () => {
        setActive("kids");
    }

    const handleAll = () => {
        setActive("all");
    }

    const handleVoucher = () => {
        setActive("voucher");
    }

    const handleGift = () => {
        setActive("gift");
    }

    useEffect(() => {
        console.log(active);
        props.onClick(active);
    })

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
                            <a onClick={() =>
                                history('/signin')}> <li>Sign In</li></a>
                            <a onClick={() =>
                                history('/signup')
                            }><li>Sign Up</li></a>
                            <hr className='sideNav' />
                            <a><li>Movies</li></a>
                            <a><li>Sky Store Premiere</li></a>
                            <a><li>Spring Sale</li></a>
                            <a><li>Sky VIP</li></a>
                            <a><li>TV</li></a>
                            <hr className='sideNav' />
                            <a><li>Redeem Voucher</li></a>
                        </ul>
                    </div>
                    <span className='browseText'>Browse</span>
                    <div className="logo-wrapper">
                        <a className="anchor logo-anchor">
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
                                <button className="dropbtn"  onClick={handleHome} style={{
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
                                    <a className="anchor" onClick={handleBuy}>New To Buy</a>
                                    <a className="anchor" onClick={handlePre}>Pre-Order</a>
                                    <a className="anchor" onClick={handleMovie}>Movie Box Sets</a>
                                    <a className="anchor" onClick={handleBond}>Bond Collection</a>
                                    <a className="anchor">Official Film Chart</a>
                                    <a className="anchor">Browse</a>
                                    <a className="anchor">A to Z</a>
                                </div>
                            </li>
                            <li className="dropdown-item skyStoreitem">
                                <button className="dropbtn dropbtnlong" onClick={handlePrem}>
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
                                    <a className="anchor" onClick={handlePicks}>Store Picks</a>
                                    <a className="anchor" onClick={handleUnder3}>Under £3</a>
                                    <a className="anchor" onClick={handleUnder4}>Under £4</a>
                                    <a className="anchor" onClick={handleUnder5}>Under £5</a>
                                    <a className="anchor" onClick={handleSet}>Movie Box Sets</a>
                                    <a className="anchor" onClick={handleTVSet}>TV Boxsets</a>
                                    <a className="anchor fold" onClick={handleStartrek}><p  className= 'foldtext'>Star Trek Wrath of Khan 40th Anniversary</p></a>
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
                                    <a className="anchor" onClick={handleGift}>Sky VIP Gift</a>
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
                                    <a className="anchor" onClick={handlePopular}>Most Popular</a>
                                    <a className="anchor" onClick={handleNewStore}>New To Store</a>
                                    <a className="anchor" onClick={handleDrama}>Drama</a>
                                    <a className="anchor" onClick={handleComedy}>Comedy</a>
                                    <a className="anchor" onClick={handleKids}>Kids</a>
                                    <a className="anchor" onClick={handleAll}>All</a>
                                </div>
                            </li>
                            <li className="dropdown-item redeem">
                                <button className="dropbtn redeembtn" onClick={handleVoucher}>
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
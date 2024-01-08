import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo_light from '../../assets/new_logo_light.jpg'
import logo_black from '../../assets/new_logo_dark.jpg'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

function Navbar(props) {
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    let navigation = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        props.showAlert(" Logout successfully", "success");
        navigation('/login')
    }
    const { theme, toggle_theme } = props;
    const [active, setActive] = useState(null);
    const toggle_active = () => {
        setActive((active === 'active') ? null : 'active');
        document.body.style.overflowY = active === 'active' ? 'scroll' : 'hidden';
        document.documentElement.style.overflowY = active === 'active' ? 'scroll' : 'hidden';
    }
    let handle_theme = () => {
        toggle_theme();
    }
    return (
        <>
            <header className={`header fixed-top ${active} ${theme}`}>
                <img className='logo' src={(theme === 'light') ? logo_light : logo_black} alt="logo" />
                <nav className='navbar'>
                    <ul className='navbar-list'>
                        <li><Link className='navbar-links' to="/" onClick={toggle_active}>Home</Link></li>
                        <li><Link className='navbar-links' to="/contact" onClick={toggle_active}>Contact</Link></li>

                        <li >
                            <div className="mobile_auth_section ">
                                {(!localStorage.getItem('token')) ?

                                    < form className="d-flex  justify-content-center align-items-center">
                                        <Link className="button-84" to="/login" role="button" onClick={toggle_active}>Sign in</Link>
                                        <Link className="button-84 ml-4" to="/signUp" role="button" onClick={toggle_active}>Sign Up</Link>
                                    </form> : <button type="button" className="button-84" onClick={() => { handleLogout(); toggle_active() }}>Logout</button>

                                }
                            </div>
                        </li>

                        <li><img className='mobile_mood' onClick={() => { handle_theme() }} src={(theme === 'light') ? toggle_light : toggle_dark} alt="Loading" style={{ width: '4rem' }} /></li>
                    </ul>
                </nav>
                <div className="end_items">
                    <div className="auth_section">
                        {(!localStorage.getItem('token')) ?

                            < form className="d-flex justify-content-center  ">
                                <Link className="button-84  mr-3 " to="/login" role="button">Sign in</Link>
                                <Link className="button-84" to="/signUp" role="button">Sign Up</Link>
                            </form> : <button type="button" className="button-84" onClick={handleLogout}>Logout</button>
                        }
                    </div>
                    <div className="mood">
                        <img src={(theme === 'light') ? toggle_light : toggle_dark} onClick={() => { handle_theme() }} alt="Loading" style={{ width: '4rem' }} />
                    </div>
                </div>
                <div className="mobile_nav_btn">
                    <i className=" open_icon fa-solid fa-2xl fa-bars-staggered" onClick={() => { toggle_active() }}></i>
                    <i className=" close_icon fa-solid fa-2xl fa-xmark" onClick={() => { toggle_active() }} ></i>
                </div>
            </header>
        </>
    )
}

export default Navbar

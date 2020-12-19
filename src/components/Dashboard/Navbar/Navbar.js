import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItems from "./MenuItems";
import "./Navbar.css";
// import acmLogo from '../../../assets/acm.png'
import {anime} from 'react-anime';

const Navbar = (props) => {

    const [show, handleShow] = useState(false);

    const [click, setClick] = useState();

    const clickHandler = () => {
        setClick(!click);
    };
    useEffect(() => {
        let logoTextAnimation = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        });
        logoTextAnimation.add({
            targets: '.logo-text',
            color: '#FF6C00',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300)
        }).add({
            targets: '.logo-text',
            color: '#09FF00',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300)
        }).add({
            targets: '.logo-text',
            color: '#7100FF',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300)
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
    }, []);
    return (
        <nav className={`nav ${show && "nav_black"}`}>
        <div className="nav_center container">
            {/* <img
                className="logo"
                src={acmLogo}
                alt="ACM Logo"
            /> */}
            <div className='logo-text'>
                ACM IOIT
            </div>

            <ul className={click ? "nav_list active" : "nav_list"}>
            {MenuItems.map(({ id, title, cName }) => (
                <li key={id} className="nav_item">
                <Link className={cName}>{title}</Link>
                </li>
            ))}
            </ul>

            <div className="hamburger" onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
            </div>
        </div>
        </nav>
    )
}

export default Navbar

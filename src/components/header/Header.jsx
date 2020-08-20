import React, { useState } from 'react'
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../images/logo.svg';
import Mobilenavbar from './mobileNavBar/Mobilenavbar';


export default function Header(props) {
    const [navmodal, setnavmodal] = useState(false)
    const showNavModal = () => {
        setnavmodal(true)
    }
    const hideNavModal = () => {
        setnavmodal(false)
    }

    return (
        <header className={`${s.header} container`}>
            <div className={`${s.headerContainer}`}>
                <div className={s.headerItem}>
                    <NavLink to='/home' className={`${s.logo} ${s.headerLink}`}><LogoSvg /></NavLink>
                    <NavLink to='/breeds/all' activeClassName={s.active} className={`${s.headerLink} ${s.hideInmobile}`}>Dogs</NavLink>
                    <NavLink to='/contactus' activeClassName={s.active} className={`${s.headerLink} ${s.hideInmobile}`}>Contact us</NavLink>
                </div>
                <div className={`${s.headerItem} ${s.hideInmobile}`}>
                    <a href="tel:+18447953392" className={`${s.headerLink}`}>(844) 795-3392</a>
                    <NavLink to='/favorites' activeClassName={s.active} className={`${s.headerLink}`}>
                        Favorites
                        <span className={s.heart}><span className={s.favoritesCount}>0</span></span>
                    </NavLink>
                </div>
                <div className={s.mobileNav}>
                    <span className={s.heart}><span className={s.favoritesCount}>0</span></span>
                    <button className={s.burgerBtn} onClick={showNavModal}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                {navmodal && <Mobilenavbar navmodal={navmodal} hideNavModal={hideNavModal}/> }
            </div>
        </header>
    )
}


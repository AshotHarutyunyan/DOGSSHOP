import React from 'react'
import s from './Mobilenavbar.module.scss'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

function Mobilenavbar(props) {
    return (
        <div className={s.navbarModal}>
            <div className={s.closeBlock} onClick={props.hideNavModal}></div>
            <div className={`${s.navBar}`}>
                <div className={s.closeBtnContain}>
                    <button className={s.closeBtn} onClick={props.hideNavModal}>X</button>
                </div>
                <a href="tel:+18447953392" className={`${s.ModalNavLink}`}>(844) 795-3392</a>
                <NavLink to='/breeds/all' activeClassName={s.active} className={`${s.ModalNavLink}`} onClick={props.hideNavModal}>
                    Dogs
                </NavLink>
                <NavLink to='/contactus' activeClassName={s.active} className={`${s.ModalNavLink}`} onClick={props.hideNavModal}>
                    Contact us
                </NavLink>
            </div>
        </div>
    )
}

Mobilenavbar.propTypes = {

}

export default Mobilenavbar


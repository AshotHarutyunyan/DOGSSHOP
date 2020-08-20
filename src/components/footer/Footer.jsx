import React from 'react'
import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.footerItem}>
                    <button className={s.footerBtn}>Breed Match Quiz</button>
                </div>
                <div className={s.footerItem}>
                    <p className={s.collus}>Coll us <a href="tel:+18886710518">(888) 671-0518</a></p>
                    <div className={s.socialnetworks}>

                    </div>
                    <div className={s.logo}>
                    </div>
                </div>
                <div className={s.footerItem}>
                    <div className={s.footerLinks}>
                        <NavLink activeClassName={s.active} to={'/home'}>home</NavLink>
                        <NavLink activeClassName={s.active} to={'/contactus'}>contactus</NavLink>
                        <NavLink activeClassName={s.active} to={'/favorites'}>favorites</NavLink>
                        <NavLink activeClassName={s.active} to={'/breeds'}>breeds</NavLink>
                    </div>    
                </div>
            </div>
        </footer>
    )
}

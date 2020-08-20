import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Home.module.scss'

function ContactUsContain(props) {
    return (
        <div className={s.ContactUsContain}>
            <div className={s.ContactUsInfo}>
                <p>Need help finding your perfect puppy?</p>
                <p>A member of the PuppySpot pack can help!</p>
                <NavLink to={'/contactus'}>Contact Us</NavLink>
            </div>
        </div>
    )
}


export default ContactUsContain


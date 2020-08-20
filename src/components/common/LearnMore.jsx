import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LearnMore(link) {
    return (
        <NavLink to={link} style={{color: "#ff9100",fontWeight: "bold",paddingLeft:'5px'}}>
            Learn More &#xFFEB;
        </NavLink>
    )
}

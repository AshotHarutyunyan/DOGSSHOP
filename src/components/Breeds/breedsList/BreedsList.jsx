import React from 'react'
import s from './breedslist.module.scss'
import { NavLink } from 'react-router-dom'

function BreedsList(props) {


    return (
        <div className={s.breedsList}>
            <div className={s.Filter}><h3>Filter</h3> <NavLink activeClassName={s.offClear} to={'/breeds/all/page/1'}>Clear</NavLink></div>
            {props.breedslist}
        </div>
    )
}



export default BreedsList
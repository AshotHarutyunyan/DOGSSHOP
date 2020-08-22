import React from 'react'
import s from './breedslist.module.scss'
import { NavLink } from 'react-router-dom'

function BreedsList(props) {
    let hideFilters = () => {
        document.querySelector(`.${s.breedsList}`).classList.remove(s.active)
    }
    return (
        <div className={s.breedsList}>
            <div className={s.Filter}>
                <h3>Filter</h3> 
                <NavLink activeClassName={s.offClear} to={'/breeds/all/page/1'} onClick={hideFilters}>Clear</NavLink>
            </div>
            <div className={s.breedsListSrollBar}>{props.breedslist}</div>
            <div className={s.applyFilters}><button onClick={hideFilters}>Apply filters</button></div>
        </div>
    )
}



export default BreedsList
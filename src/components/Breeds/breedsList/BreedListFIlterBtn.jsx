import React from 'react'
import s from './breedslist.module.scss'
import image from '../../../images/filter_1.png';

export default function BreedListFIlterBtn() {
    let showFilters = () => {
        document.querySelector(`.${s.breedsList}`).classList.add(s.active)
    }
    return (
        <div className={s.filterBtnContain}>
            <button onClick={showFilters}><img src={image} alt=''/>Filters</button>
        </div>
    )
}

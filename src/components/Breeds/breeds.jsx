import React from 'react'
import s from './breeds.module.scss'
import BreedsListContainer from './breedsList/BreedsListContainer'

function Breeds(props) {
    return (
        <div className={s.breeds}>
            <BreedsListContainer />
            
        </div>
    )
}

export default Breeds
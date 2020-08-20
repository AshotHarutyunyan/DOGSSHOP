import React from 'react'
import s from './breeds.module.scss'
import BreedsListContainer from './breedsList/BreedsListContainer'
import DogsListContainer from './dogsList/DogsListContainer'

function Breeds(props) {
    return (
        <div className={s.breeds}>
            <BreedsListContainer />
            <DogsListContainer />
        </div>
    )
}

export default Breeds
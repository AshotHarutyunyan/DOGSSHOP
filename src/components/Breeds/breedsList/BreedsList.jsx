import React from 'react'
import { connect } from 'react-redux'
import s from './breedslist.module.scss'

function BreedsList(props) {
    return (
        <div className={s.breedsList}>
            {props.breedslist}
        </div>
    )
}

let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default connect(mapStateToProps,{})(BreedsList)
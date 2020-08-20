import React from 'react'
import Breeds from './breeds';

function BreedsContainer(props) {
    return (
        <Breeds />
    )
}

// let mapStateToProps = (state) => ({
//     breeds: state.breeds.breeds
// })
// connect(mapStateToProps,{})(BreedsContainer)
export default BreedsContainer


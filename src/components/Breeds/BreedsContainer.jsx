import React from 'react'
import { connect } from 'react-redux'

function BreedsContainer(props) {
    console.log(props.breeds)
    for (const key in props.breeds) {
        console.log(key,props.breeds[key]);
      }

    return (
        <div>
            
        </div>
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default connect(mapStateToProps,{})(BreedsContainer)


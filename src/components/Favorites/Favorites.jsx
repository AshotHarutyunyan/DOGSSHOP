import React from 'react'
import s from './Favorites.module.scss'
import EmptyFavorites from './FavoriteItems/EmptyFavorites' 
import PropTypes from 'prop-types'

function Favorites(props) {

    return (
        <div className={s.Favorites}>
            {props.favorites.length > 0 ? props.favorites : <EmptyFavorites/>}
        </div>
    )
}

Favorites.propTypes = {
    favorites: PropTypes.array,
}

export default Favorites


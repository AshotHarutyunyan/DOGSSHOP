import React from 'react'
import { connect } from 'react-redux';
import { setFavoriteWithSubbreeds,setFavorite } from '../../Redux/favoritesReducer';
import Preloader from '../common/preloader/Preloader';
import Favorites from './Favorites';
import FavoritesItem from './FavoriteItems/FavoritesItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { GET_FAVORITES_REQUEST_STATUS,GET_FAVORITES_SELECTOR } from '../../Redux/selectors';


const FavoritesContainer = (props) => {
    let items = props.favorites.map(item => {
        return (
            <FavoritesItem key={nanoid()} item={item} 
            setFavoriteWithSubbreeds={props.setFavoriteWithSubbreeds}
            setFavorite={props.setFavorite} />
        )
    });
    
    

    if(!props.requestStatus){
        return(
            <Preloader/>
        )
    }
    return <Favorites favorites={items} />
}



let mapStateToProps = (state) => ({
    requestStatus: GET_FAVORITES_REQUEST_STATUS(state),
    favorites: GET_FAVORITES_SELECTOR(state)
});


export default connect(mapStateToProps,{setFavoriteWithSubbreeds,setFavorite})(FavoritesContainer)

FavoritesContainer.propTypes = {
    requestStatus: PropTypes.bool,
    favorites: PropTypes.array,
    setFavoriteWithSubbreeds: PropTypes.func,
    setFavorite: PropTypes.func
}
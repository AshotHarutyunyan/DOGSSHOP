import React, { useEffect } from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { getFavorites } from '../../Redux/favoritesReducer';
import PropTypes from 'prop-types';
import { GET_FAVORITES_SELECTOR } from '../../Redux/selectors';

function HeaderContainer(props) {
    let favoritesLength = props.favorites.length;
    function GetFavoritesInfo({ favoritesLength }) {
        useEffect(() => {
            function getinfo() {
                let favorites = JSON.parse(localStorage.getItem('favorites'));
                if(favorites && props.favorites !== favorites.favorites){
                    props.getFavorites(favorites.favorites)
                }else{
                    props.getFavorites([])
                }
            }
            getinfo();
        }, [favoritesLength]);
    }
    GetFavoritesInfo(favoritesLength)


    return (
         <Header {...props} favorites={favoritesLength} />
    )
}

let mapStateToProps = (state) => ({
    favorites: GET_FAVORITES_SELECTOR(state)
})

export default connect(mapStateToProps,{getFavorites})(HeaderContainer);

HeaderContainer.propTypes = {
    favorites: PropTypes.array,
    getFavorites: PropTypes.func,
}
import React, { useEffect } from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { getFavorites } from '../../Redux/actionCreators';


function HeaderContainer(props) {
    
    let favoritesLength = props.favorites;
    function GetFavoritesInfo({ favoritesLength }) {
        useEffect(() => {
            function getinfo() {
                let favorites = JSON.parse(localStorage.getItem('favorites')).favorites;
                props.getFavorites(favorites)
                console.log(favorites)
            }
            getinfo();
        }, [favoritesLength]);
    }
    GetFavoritesInfo(favoritesLength)


    return (
         <Header {...props} />
    )
}

let mapStateToProps = (state) => ({
    favorites: state.favorites.favorites.length
})

export default connect(mapStateToProps,{getFavorites})(HeaderContainer);
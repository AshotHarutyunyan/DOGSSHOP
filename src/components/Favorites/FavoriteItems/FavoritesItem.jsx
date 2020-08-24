import React from 'react';
import s from '../Favorites.module.scss';
import PropTypes from 'prop-types';


function FavoritesItem(props) {
    let item = props.item;
    let {subbreedObjName,breedObjName,id,page,withSubbreds} = item;
    let removeFavorite = () => { 
        if (subbreedObjName !== 'page' && breedObjName !== 'all') {
            props.setFavoriteWithSubbreeds('true',item,id,breedObjName,page,subbreedObjName)
        } else if (subbreedObjName === 'page' && breedObjName !== 'all' && !withSubbreds) {
            props.setFavorite('true',item,id,breedObjName,page)
        } else if (subbreedObjName === 'page' && breedObjName !== 'all' && withSubbreds) {
            props.setFavoriteWithSubbreeds('true',item,id,breedObjName,page,"all")
        } else if (subbreedObjName === 'page' && breedObjName === 'all') {
            props.setFavorite('true',item,id,breedObjName,page)
        }
    }

    return (
        <div className={s.FavoritesItem}>
            <div className={`${s.favorite}`} onClick={removeFavorite}>
            </div>
            <div className={s.FavoritesItemImg}>
                <img src={item.img} alt="" />
            </div>
            <div className={s.FavoritesItemInfo}>
                <p className={s.FavoritesItemInfoBreed}>{item.breed} {item.subbreed}</p>
                <p>Name</p>
                <div className={s.getBtn}>
                    <button>Get This Dog</button>
                </div>
            </div>
        </div>
    )
}



export default FavoritesItem

FavoritesItem.propTypes = {
    item: PropTypes.object,
    setFavoriteWithSubbreeds: PropTypes.func,
    setFavorite: PropTypes.func
}
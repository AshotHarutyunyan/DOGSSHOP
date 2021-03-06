import React from 'react';
import s from './itemList.module.scss';

function ItemsListItem(props) {
    let { breed, subbreed, page, selectedBreed } = props.selectedValues;
    let item = props.item;

    let toggleFavorite = (event) => {
        let favorite = {
           id:  item.id,
           img:  item.img,
           breed: item.breed,
           subbreed: item.subbreed,
           status:  item.favorite,
           breedObjName: breed,
           subbreedObjName: subbreed,
           page,
           withSubbreds: selectedBreed['all'] ? true : false
        };

        if (subbreed !== 'page' && breed !== 'all') {
            props.setFavoriteWithSubbreeds(favorite.status,favorite,favorite.id,breed,page,subbreed)
        } else if (subbreed === 'page' && breed !== 'all' && !selectedBreed['all']) {
            props.setFavorite(favorite.status,favorite,favorite.id,breed,page)
        } else if (subbreed === 'page' && breed !== 'all' && selectedBreed['all']) {
            props.setFavoriteWithSubbreeds(favorite.status,favorite,favorite.id,breed,page,"all")
        } else if (subbreed === 'page' && breed === 'all') {
            props.setFavorite(favorite.status,favorite,favorite.id,breed,page)
        }
    }


    return (
        <div className={s.DogsItem}>
            <div className={!item.favorite ? `${s.favorite}` : `${s.favorite} ${s.active}`} onClick={toggleFavorite}></div>
            <div className={s.DogsItemImg}>
                <img src={item.img} alt="" />
            </div>
            <div className={s.DogsItemInfo}>
                <p className={s.DogsItemInfoBreed}>{item.breed} {item.subbreed}</p>
                <p>Name</p>
            </div>
        </div>
    )
}



export default ItemsListItem


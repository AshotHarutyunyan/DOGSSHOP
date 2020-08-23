import React from 'react';
import s from './itemList.module.scss';

function ItemsListItem(props) {
    let { breed, subbreed, page, selectedBreed } = props.selectedValues;
    let item = props.item;

    let toggleFavorite = (event) => {
        let favorite = {
           id: event.target.children[0].value,
           img: event.target.children[1].value,
           breed: event.target.children[2].value,
           subbreed: event.target.children[3].value,
           status: event.target.children[4].value,
        }
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
            <div className={!item.favorite ? `${s.favorite}` : `${s.favorite} ${s.active}`} onClick={toggleFavorite}>
                <input type="hidden" name="id" value={item.id} />
                <input type="hidden" name="img" value={item.img} />
                <input type="hidden" name="breed" value={item.breed} />
                <input type="hidden" name="subbreed" value={item.subbreed} />
                <input type="hidden" name="status" value={item.favorite} />
            </div>
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


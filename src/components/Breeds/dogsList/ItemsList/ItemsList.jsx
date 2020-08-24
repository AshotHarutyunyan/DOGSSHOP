import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import s from './itemList.module.scss'
import ItemsListItem from './ItemsListItem';
import PropTypes from 'prop-types';


function ItemsList(props) {
    let itemsList = props.itemsList;
    const [list, setlist] = useState([]);

    useEffect(() => {
        function selectItems() {
            if (itemsList.length > 0) {
                let items = itemsList.map(item => {
                    return (
                        <ItemsListItem key={nanoid()} selectedValues={props.selectedValues}  item={item}
                        setFavorite={props.setFavorite} setFavoriteWithSubbreeds={props.setFavoriteWithSubbreeds}/>
                    )
                })
                setlist(items)
            }

        }
        selectItems()
    }, [itemsList,props])


    return (
        <div className={s.DogsItems}>
            {list}
        </div>
    )
}


export default ItemsList;

ItemsList.propTypes = {
    itemsList: PropTypes.array,
    selectedValues: PropTypes.object,
    setFavoriteWithSubbreeds: PropTypes.func,
    setFavorite: PropTypes.func,
}
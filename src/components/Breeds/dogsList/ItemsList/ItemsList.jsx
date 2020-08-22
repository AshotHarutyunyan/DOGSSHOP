import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import s from './itemList.module.scss'

function ItemsList(props) {
    let itemsList = props.itemsList;
    const [list, setlist] = useState([])
    let {breed,subbreed,page,selectedBreed} = props.selectedValues;

    useEffect(() => {
        function selectItems() {
            if (itemsList.length > 0) {
                let toggleFavorite = (event) => {
                    let id = Number(event.target.children[0].value);
                    if(subbreed !== 'page' && breed !== 'all'){
                        props.setFavoriteWithSubbreedsAc(id,breed,page,subbreed)
                    }else if(subbreed === 'page' && breed !== 'all' && !selectedBreed['all']){
                        props.setFavoriteAc(id,breed,page)
                    }else if(subbreed === 'page' && breed !== 'all' && selectedBreed['all']){
                        props.setFavoriteWithSubbreedsAc(id,breed,page,"all")
                    }else if(subbreed === 'page' && breed === 'all'){
                        props.setFavoriteAc(id,breed,page)
                    }
                }

                let items = itemsList.map(item => {
                    return (
                        <div key={nanoid()} className={s.DogsItem}>
                            <div className={!item.favorite ? `${s.favorite}` : `${s.favorite} ${s.active}`} onClick={toggleFavorite}>
                                <input type="hidden" name="id" value={item.id} />
                            </div>
                            <div className={s.DogsItemImg}>
                                <img src={item.img} alt=""/>
                            </div>
                            <div className={s.DogsItemInfo}>
                                <p className={s.DogsItemInfoBreed}>{item.breed} {item.subbreed}</p>
                                <p>Name</p>
                            </div>
                        </div>
                    )
                })
                setlist(items)
            }

        }
        selectItems()
    }, [itemsList,breed,subbreed,page,selectedBreed,props])


    return (
        <div className={s.DogsItems}>
            {list}
        </div>
    )
}


export default ItemsList;
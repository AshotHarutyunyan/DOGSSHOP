import React from 'react'
import { connect } from 'react-redux'
import s from './breedslist.module.scss'
import BreedsList from './BreedsList';
import { nanoid } from 'nanoid';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';

function BreedsListContainer(props) {
    let {breed,subbreed,page} = props.match.params;
    console.log(breed,subbreed,page);
    let breeds = props.breeds;
    let items = [];

    let removeAcitveClass = (removeSubItems) => {
        if (removeSubItems) {
            let subItem = document.querySelector(`.${s.subItemName}.${s.active}`)
            if (subItem) {
                subItem.classList.remove(s.active)
            }
        } else {
            let subItem = document.querySelector(`.${s.subItemName}.${s.active}`)
            if (subItem) {
                subItem.classList.remove(s.active)
            }
            let subFilter = document.querySelector(`.${s.subItems}.${s.active}`)
            if (subFilter) {
                subFilter.classList.remove(s.active)
            }
            let filter = document.querySelector(`.${s.itemName}.${s.active}`)
            if (filter) {
                filter.classList.remove(s.active)
            }
            let item = document.querySelector(`.${s.item}.${s.active}`)
            if (item) {
                item.classList.remove(s.active)
            }
        }
    };

    let onItemClick = (event) => {
        if (!event.currentTarget.classList.contains(s.active)) {
            if (event.currentTarget.children[1]) {
                removeAcitveClass()
                event.currentTarget.classList.add(s.active)
                event.currentTarget.children[1].classList.add(s.active)
                event.currentTarget.children[0].classList.add(s.active)
            } else {
                removeAcitveClass()
                event.currentTarget.classList.add(s.active)
            }
        }
    }

    let onSubItemClick = (event) => {
        event.stopPropagation()
        if (event.currentTarget.classList.contains(s.active)) {
            removeAcitveClass(true)
            event.currentTarget.classList.add(s.active)
        }
    }

    for (let key in breeds) {
        if (breeds[key].hasOwnProperty('all')) {
            let subItems = [];
            for (let item in breeds[key]) {
                if (item !== 'all') {
                    subItems.push(
                    <div id={item} className={s.subItemName} key={nanoid()} onClick={onSubItemClick}>
                        <NavLink to={`/breeds/${key}/${item}/1`}>{item}</NavLink>
                    </div>)
                }
            }
            items.push(
                <div id={key} className={s.item} key={nanoid()} onClick={onItemClick} >
                    <div className={s.itemName}><NavLink to={`/breeds/${key}/page/1`}>{key}</NavLink></div>
                    <div className={s.subItems}>{subItems}</div>
                </div>
            )
        } else {
            items.push(
                <div id={key} className={`${s.item} ${s.itemName}`} key={nanoid()} onClick={onItemClick}>
                    <NavLink  to={`/breeds/${key}/page/1`}>{key}</NavLink>
                </div>
            )
        }
    }
    
    console.log(document.querySelector(`#${breed}`),document.querySelector(`#${subbreed}`))
    
    return (
        <BreedsList breedslist={items} />
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(BreedsListContainer);
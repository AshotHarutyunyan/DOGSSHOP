import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from './breedslist.module.scss'
import BreedsList from './BreedsList';
import { nanoid } from 'nanoid';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';

function BreedsListContainer(props) {
    let {breed,subbreed,page} = props.match.params;
    let breeds = props.breeds;
    let items = [];
    
    

    useEffect(() => {
        function selectItems() {
            let Item =  document.querySelector(`#${breed}`),   
                subitem = document.querySelector(`#${breed} #${subbreed}`),
                subItems =  document.querySelector(`#${breed}`).children[1],
                itemName =  document.querySelector(`#${breed}`).children[0];
            if(subitem){
                Item.classList.add(s.active)
                itemName.classList.add(s.active)
                subItems.classList.remove(s.active)
                subitem.classList.add(s.active)
            }else if(subItems){
                Item.classList.add(s.active)
                itemName.classList.add(s.active)
                subItems.classList.remove(s.active)
            }else if(Item){
                Item.classList.add(s.active)
            }
        }
        selectItems()
    }, [breed,subbreed,page])


    for (let key in breeds) {
        if (breeds[key].hasOwnProperty('all')) {
            let subItems = [];
            for (let item in breeds[key]) {
                if (item !== 'all') {
                    let link = item === subbreed ? `/breeds/${key}/page/1` : `/breeds/${key}/${item}/1` ;
                    subItems.push(
                    <div id={item} className={s.subItemName} key={nanoid()} >
                        <NavLink to={link} >{item}</NavLink>
                    </div>)
                }
            }
            let breedlink = `/breeds/${key}/page/1`;
            if(key === breed && subbreed === 'page' ){
                breedlink = `/breeds/all/page/1`;
            }
            items.push(
                <div id={key} className={s.item} key={nanoid()}  >
                    <div className={s.itemName}><NavLink to={breedlink}>{key}</NavLink></div>
                    <div className={`${s.subItems} ${s.active}`}>{subItems}</div>
                </div>
            )
        } else {
            let breedlink = `/breeds/${key}/page/1`;
            if(key === breed && subbreed === 'page' ){
                breedlink = `/breeds/all/page/1`;
            }
            items.push(
                <div id={key} className={key === "all" ? `${s.item} ${s.itemName} ${s.default}` : `${s.item} ${s.itemName}` } key={nanoid()} >
                    <NavLink  to={breedlink}>{key}</NavLink>
                </div>
            )
        }
    }
    
    
    return (
        <BreedsList breedslist={items}/>
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(BreedsListContainer);
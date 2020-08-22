import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from './breedslist.module.scss'
import BreedsList from './BreedsList';
import { nanoid } from 'nanoid';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { useState } from 'react';

function BreedsListContainer(props) {

    let {breed,subbreed,page} = props.match.params;
    let breeds = props.breeds;
    const [Items, setItems] = useState([])
    
    
    function PaintFilterList({ someProp }) {
        useEffect(() => {
            function filterList() {
                let items = [];
                for (let key in breeds) {
                    if (breeds[key].hasOwnProperty('all')) {
                        let subItems = [];
                        for (let item in breeds[key]) {
                            if (item !== 'all') {
                                let ClassName = item === subbreed && key === breed ? `${s.subItemName} ${s.active}` : `${s.subItemName}` ;
                                subItems.push(
                                <div id={item} className={ClassName} key={nanoid()} >
                                    <NavLink to={`/breeds/${key}/${item}/1`} >{item}</NavLink>
                                </div>)
                            }
                        }
                        let itemClassName = `${s.item}`;
                        let itemNameClassName = `${s.itemName}`;
                        let subItemsClassName = `${s.subItems}`;
                        if(key === breed && subbreed === 'page'){
                            itemClassName = `${s.item} ${s.active}`;
                            itemNameClassName = `${s.itemName} ${s.active} ${s.default}`; 
                            subItemsClassName = `${s.subItems} ${s.active}`;  
                        }else if(key === breed && subbreed !== 'page'){
                            itemClassName = `${s.item} ${s.active}`;
                            itemNameClassName = `${s.itemName} ${s.active}`;
                            subItemsClassName = `${s.subItems} ${s.active}`;
                        }
                        items.push(
                            <div id={key} className={itemClassName} key={nanoid()}  >
                                <div className={itemNameClassName}><NavLink to={`/breeds/${key}/page/1`}>{key}</NavLink></div>
                                <div className={subItemsClassName}>{subItems}</div>
                            </div>
                        )
                    } else {
                        let ClassName = '';
                        if(key === "all" && breed === "all" ){
                            ClassName = `${s.item} ${s.itemName} ${s.default} ${s.active}`;
                        }else if ( key === "all"){
                            ClassName = `${s.item} ${s.itemName} ${s.default}`;
                        }else if(key === breed){
                            ClassName = `${s.item} ${s.itemName} ${s.active}`;
                        }else{
                            ClassName = `${s.item} ${s.itemName} `;
                        }
                        items.push(
                            <div id={key} className={ClassName} key={nanoid()} >
                                <NavLink  to={`/breeds/${key}/page/1`}>{key}</NavLink>
                            </div>
                        )
                    }
                }
                setItems(items)
            }
            filterList()
        }, [someProp]);
    }
    PaintFilterList(breeds,Items,setItems,breed,subbreed)


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
    

    useEffect(() => {
        function selectItems() {
            let Item =  document.querySelector(`#${breed}`),   
                subitem = document.querySelector(`#${breed} #${subbreed}`),
                subItems = Item && document.querySelector(`#${breed}`).children[1],
                itemName = Item &&  document.querySelector(`#${breed}`).children[0];
            if(subitem){
                removeAcitveClass(true)
                Item.classList.add(s.active)
                itemName.classList.add(s.active)
                itemName.classList.remove(s.default)
                subItems.classList.add(s.active)
                subitem.classList.add(s.active)
            }else if(subItems){
                removeAcitveClass()
                Item.classList.add(s.active)
                itemName.classList.add(s.active)
                subItems.classList.add(s.active)
                itemName.classList.add(s.default)
            }else if(Item){
                removeAcitveClass()
                Item.classList.add(s.active)
            }
        }
        selectItems()
    }, [breed,subbreed,page])


    
    return (
        <BreedsList breedslist={Items}/>
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(BreedsListContainer);
import React from 'react'
import s from './DogsList.module.scss'
import PaginationContainer from '../../common/Pagination/PaginationContainer';
import ItemsList from './ItemsList/ItemsList';
import BreedListFIlterBtn from '../breedsList/BreedListFIlterBtn';

function DogsList(props) {


    return (
        <div className={s.DogsList}>
            <BreedListFIlterBtn/>
            <ItemsList itemsList={props.selectedBreed} selectedValues={props.selectedValues}
             setFavoriteAc={props.setFavoriteAc} setFavoriteWithSubbreedsAc={props.setFavoriteWithSubbreedsAc} />
            < PaginationContainer allItemsCount={props.allItemsCount} defaultLink={props.defaultLink}
             pageItemsCount={props.pageItemsCount} currentPage={props.currentPage}/>
        </div>
    )
}



export default DogsList
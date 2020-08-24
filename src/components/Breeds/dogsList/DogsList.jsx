import React from 'react'
import s from './DogsList.module.scss'
import PaginationContainer from '../../common/Pagination/PaginationContainer';
import ItemsList from './ItemsList/ItemsList';
import BreedListFIlterBtn from '../breedsList/BreedListFIlterBtn';
import BreedsPageLoader from '../../common/BreedsLoader/BreedsPageLoader';
import PropTypes from 'prop-types';

function DogsList(props) {
    return (
        <div className={s.DogsList}>
            {!props.request && <BreedsPageLoader/>}
            <BreedListFIlterBtn/>
            <ItemsList itemsList={props.selectedBreed} selectedValues={props.selectedValues}
            setFavorite={props.setFavorite} setFavoriteWithSubbreeds={props.setFavoriteWithSubbreeds} />
            < PaginationContainer allItemsCount={props.allItemsCount} defaultLink={props.defaultLink}
             pageItemsCount={props.pageItemsCount} currentPage={props.currentPage}/>
        </div>
    )
}


export default DogsList

DogsList.propTypes = {
    selectedBreed: PropTypes.array,
    request: PropTypes.bool,
    selectedValues: PropTypes.object,
    setFavoriteWithSubbreeds: PropTypes.func,
    setFavorite: PropTypes.func,
    allItemsCount: PropTypes.number,
    defaultLink: PropTypes.string,
    pageItemsCount: PropTypes.number,
    currentPage: PropTypes.string,
}
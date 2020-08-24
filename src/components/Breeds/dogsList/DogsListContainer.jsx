import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import DogsList from './DogsList';
import { setAll,setBreed,setSubBreed,setFavoriteWithSubbreeds,setFavorite } from '../../../Redux/actionCreators'
import Preloader from '../../common/preloader/Preloader';
import PropTypes from 'prop-types';
import { GET_BREEDS, GET_BREEDS_REQUEST_STATUS, GET_PAGE_ITEMS_COUNT } from '../../../Redux/selectors';

function DogsListContainer(props) {
    let {breed,subbreed,page} = props.match.params;
    let selectedBreed = props.breeds[breed];
    const [selectedBreedPage, setselectedBreedPage] = useState([]);
    let breedLength = Object.keys(props.breeds).length;
    let { setAll,setBreed,setSubBreed,pageItemsCount } = props;
    const [defaultLink, setdefaultLink] = useState('');
    const [allItemsCount, setallItemsCount] = useState(60);


    useEffect(() => {
        function selectItems() {
            if(subbreed !== 'page' && breed !== 'all'){
                setallItemsCount(20)
                setdefaultLink(`/breeds/${breed}/${subbreed}`)
                if(!selectedBreed[subbreed][page] && selectedBreed){
                    let subbreedobj = selectedBreed[subbreed];
                    setSubBreed(subbreedobj,page,breed,false,subbreed,pageItemsCount)
                }else {
                    setselectedBreedPage(selectedBreed[subbreed][page]);
                }
            }else if(subbreed === 'page' && breed !== 'all' && !selectedBreed['all']){
                setallItemsCount(20)
                setdefaultLink(`/breeds/${breed}/page`)
                if(!selectedBreed[page]){
                    setBreed(selectedBreed,page,pageItemsCount,breed,false)
                }else {
                    setselectedBreedPage(selectedBreed[page]);
                }
            }else if(subbreed === 'page' && breed !== 'all' && selectedBreed['all']){
                setallItemsCount(Object.keys(selectedBreed).length * 20)
                setdefaultLink(`/breeds/${breed}/page`)
                if(!selectedBreed['all'][page]){
                    setBreed(selectedBreed,page,pageItemsCount,breed,true)
                }else {
                    setselectedBreedPage(selectedBreed['all'][page]);
                }
            }else if(subbreed === 'page' && breed === 'all'){
                setallItemsCount(Number(breedLength) * 20)
                setdefaultLink(`/breeds/${breed}/page`)
                if(!selectedBreed[page]){
                    setAll(selectedBreed,page,pageItemsCount,breed)
                }else {
                    setselectedBreedPage(selectedBreed[page]);
                }
            }
        }
        selectItems()
    }, [breed,subbreed,page,selectedBreed,setAll,setBreed,setSubBreed,pageItemsCount,breedLength])

    

    if(selectedBreedPage.length === 0){
        return(
            <Preloader/>
        )
    }
    return (
        <DogsList selectedBreed={selectedBreedPage} pageItemsCount={pageItemsCount} setFavoriteWithSubbreeds={props.setFavoriteWithSubbreeds}
            selectedValues={{breed,subbreed,page,selectedBreed}} setFavorite={props.setFavorite}
            defaultLink={defaultLink} allItemsCount={allItemsCount} currentPage={page} request={props.request}/>
    )
}
let mapStateToProps = (state) => ({
    breeds: GET_BREEDS(state),
    request: GET_BREEDS_REQUEST_STATUS(state),
    pageItemsCount: GET_PAGE_ITEMS_COUNT(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {setAll,setBreed,setSubBreed,setFavoriteWithSubbreeds,setFavorite}))(DogsListContainer);

DogsListContainer.propTypes = {
    breeds: PropTypes.object,
    request: PropTypes.bool,
    pageItemsCount: PropTypes.number,
    setAll: PropTypes.func,
    setBreed: PropTypes.func,
    setSubBreed: PropTypes.func,
    setFavoriteWithSubbreeds: PropTypes.func,
    setFavorite: PropTypes.func
}    
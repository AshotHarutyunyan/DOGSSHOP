import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import DogsList from './DogsList';
import { setAll,setBreed,setSubBreed,setFavoriteAc,setFavoriteWithSubbreedsAc } from '../../../Redux/breedReducer'

function DogsListContainer(props) {
    let {breed,subbreed,page} = props.match.params;
    let selectedBreed = props.breeds[breed];
    const [selectedBreedPage, setselectedBreedPage] = useState(selectedBreed);
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


    
    return (
        <DogsList selectedBreed={selectedBreedPage} pageItemsCount={pageItemsCount} setFavoriteWithSubbreedsAc={props.setFavoriteWithSubbreedsAc}
            selectedValues={{breed,subbreed,page,selectedBreed}} setFavoriteAc={props.setFavoriteAc}
            defaultLink={defaultLink} allItemsCount={allItemsCount} currentPage={page}/>
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds,
    pageItemsCount: state.breeds.pageItemsCount
})

export default compose(
    withRouter,
    connect(mapStateToProps, {setAll,setBreed,setSubBreed,setFavoriteAc,setFavoriteWithSubbreedsAc}))(DogsListContainer);
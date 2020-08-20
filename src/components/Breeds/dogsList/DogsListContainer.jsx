import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from './DogsList.module.scss'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import DogsList from './DogsList';
import { DOGSAPI } from '../../../api/ApiDatas';

function DogsListContainer(props) {
    let {breed,subbreed,page} = props.match.params;
    let breeds = props.breeds;
    console.log(breeds[breed],breed,subbreed,page)
    

    useEffect(() => {
        function selectItems() {
            if(subbreed !== 'page' && breed !== 'all'){
                console.log(`get with breed ${breed} sub breed ${subbreed}`)
                DOGSAPI.getBySubBreed(breed,subbreed,20).then((data)=>{console.log(data)})
            }else if(subbreed === 'page' && breed !== 'all'){
                console.log(`get with breed ${breed}`)
                DOGSAPI.getByBreed(breed,20).then((data)=>{console.log(data)})
            }else if(subbreed === 'page' && breed === 'all'){
                console.log('get for all')
                DOGSAPI.getAll(20).then((data)=>{console.log(data)})
            }
        }
        selectItems()
    }, [breed,subbreed,page])


    
    return (
        <DogsList s={s}/>
    )
}
let mapStateToProps = (state) => ({
    breeds: state.breeds.breeds
})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(DogsListContainer);
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getSwiperInfo } from '../../Redux/actionCreators';
import PropTypes from 'prop-types';
import Home from './Home';
import Preloader from '../common/preloader/Preloader';
import { GET_SWIPERINFO_REQUEST_STATUS, GET_SWIPERINFO } from '../../Redux/selectors';


const HomeContainer = (props) => {
    let someProp = props.swiperInfo;
    function GetSwiperInfo({ someProp }) {
        useEffect(() => {
            function getinfo() {
                props.getSwiperInfo(18)
            }
            getinfo();
        }, [someProp]);
    }
    if(someProp.length === 0){
        GetSwiperInfo(someProp)
    }


    if(!props.requestStatus){
        return(
            <Preloader />
        )
    }
    return (
        <Home swiperInfo={props.swiperInfo} />
    )
}

let mapStateToProps = (state) => ({
    requestStatus: GET_SWIPERINFO_REQUEST_STATUS(state),
    swiperInfo: GET_SWIPERINFO(state)
})

export default connect(mapStateToProps,{getSwiperInfo})(HomeContainer)

HomeContainer.propTypes = {
    swiperInfo: PropTypes.array,
    requestStatus: PropTypes.bool,
    getSwiperInfo: PropTypes.func,
}
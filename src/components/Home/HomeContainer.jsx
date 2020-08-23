import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getSwiperInfo } from '../../Redux/actionCreators';
import BigSwiper from './swiper/bigSwiper/bigswiper';
import MobileSwiper from './swiper/mobileSwiper/mobileswiper';
import Preloader from '../common/preloader/Preloader';
import AboutUs from './AboutUs/AboutUs';
import Accardion from './Accardion/Accardion';
import ContactUsContain from './ContactUs/ContactUsContain';

// import PropTypes from 'prop-types'

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
            <Preloader/>
        )
    }
    return (
        <div>
            <BigSwiper data={props.swiperInfo} />
            <MobileSwiper data={props.swiperInfo} />
            <AboutUs />
            <Accardion />
            <ContactUsContain/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    requestStatus: state.home.requestStatus,
    swiperInfo: state.home.swiperInfo
})

export default connect(mapStateToProps,{getSwiperInfo})(HomeContainer)

HomeContainer.propTypes = {

}
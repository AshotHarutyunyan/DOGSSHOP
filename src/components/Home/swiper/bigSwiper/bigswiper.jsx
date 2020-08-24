import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './../swiper.module.scss';
import { SwiperFirstItem } from './bigSwiperFirstItem';
import { SwiperSecondtItem } from './bigSwiperSecondItem';
import PropTypes from 'prop-types';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

    
const BigSwiper = (props) => {
    let arr1 = props.data.filter((item,idx) =>  idx < 7 ? item : null ),
    arr2 = props.data.filter((item,idx) =>  idx >= 7 ? item : null );
    return (
        <div className={`container ${s.bigSwiper}`}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                navigation
                >
                <SwiperSlide><SwiperFirstItem arr={arr1}/></SwiperSlide>
                <SwiperSlide><SwiperSecondtItem arr={arr2} /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BigSwiper 

BigSwiper.propTypes = {
    data: PropTypes.array,
}
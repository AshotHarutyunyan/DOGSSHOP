import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './../swiper.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useWindowDimensions from '../../../common/windowWidthAndHeight';
import MoibleSwiperSlide from './mobileswiperitem';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';



const MobileSwiper = (props) => {
    let slides = [];
    for (let i = 2; i <= props.data.length; i += 2) {
        slides.push(props.data.slice(i - 2, i));
    }
    // eslint-disable-next-line no-unused-vars
    const { height, width } = useWindowDimensions();
    let slidesQty = width/250;
    if(width > 480){
        slidesQty = width/250;
    }else{
        slidesQty = width/150;
    }
    return (
        <div className={`container ${s.MobileSwiper}`}>
            <Swiper
                spaceBetween={10}
                slidesPerView={slidesQty}
            >
                {slides.map((item) => {
                        return <SwiperSlide key={nanoid()}><MoibleSwiperSlide item={item}/></SwiperSlide>;
                    })}
            </Swiper>
        </div>
    );
};

export default MobileSwiper 

MobileSwiper.propTypes = {
    data: PropTypes.array,
}
import React from 'react';
import s from './../swiper.module.scss';
import { nanoid } from 'nanoid';

let MoibleSwiperSlide = ({item}) => {
        return (
            <div key={nanoid()} className={s.MoibleSwiperSlide}>
                <div className={s.MoibleSwiperSlideItem}>
                    <div className={s.MoibleSwiperSlideImg}>
                        <img src={item[0].img} alt="breedImage" />
                    </div>
                    <div className={s.MoibleSwiperSlideInfo}>
                        <span>{item[0].breed}</span>
                        <p>Find Dog</p>
                    </div>
                </div>
                <div className={s.MoibleSwiperSlideItem}>
                    <div className={s.MoibleSwiperSlideImg}>
                        <img src={item[1].img} alt="breedImage" />
                    </div>
                    <div className={s.MoibleSwiperSlideInfo}>
                        <span>{item[1].breed}</span>
                        <p>Find Dog</p>
                    </div>
                </div>
            </div>
        )
}



export default MoibleSwiperSlide 
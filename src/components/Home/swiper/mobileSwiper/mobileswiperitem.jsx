import React from 'react';
import s from './../swiper.module.scss';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

let MoibleSwiperSlide = ({item}) => {
        return (
            <div key={nanoid()} className={s.MoibleSwiperSlide}>
                <div className={s.MoibleSwiperSlideItem}>
                    <NavLink to={`/breeds/${item[0].breed}/page/1`}>
                        <div className={s.MoibleSwiperSlideImg}>
                            <img src={item[0].img} alt="breedImage" />
                        </div>
                        <div className={s.MoibleSwiperSlideInfo}>
                            <span>{item[0].breed}</span>
                            <p>Find Dog</p>
                        </div>
                    </NavLink>
                </div>
                <div className={s.MoibleSwiperSlideItem}>
                    <NavLink to={`/breeds/${item[1].breed}/page/1`}>
                        <div className={s.MoibleSwiperSlideImg}>
                            <img src={item[1].img} alt="breedImage" />
                        </div>
                        <div className={s.MoibleSwiperSlideInfo}>
                            <span>{item[1].breed}</span>
                            <p>Find Dog</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
}

export default MoibleSwiperSlide 

MoibleSwiperSlide.propTypes = {
    item: PropTypes.object,
}
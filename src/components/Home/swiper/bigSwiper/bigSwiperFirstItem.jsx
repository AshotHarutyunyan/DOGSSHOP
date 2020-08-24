import React from 'react';
import s from '../swiper.module.scss'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const SwiperFirstItem = (props) => {
    return (
            <div className={s.swiperItem}>
                <div className={s.logo}>
                    <input />
                    <div className={s.buterflyImg}></div>
                </div>
                <div className={s.dogImg}></div>
                {
                    props.arr.map((item) => {
                        return (
                                <div key={nanoid()} className={s.swiperItemImgAndName}>
                                    <NavLink to={`/breeds/${item.breed}/page/1`}>
                                        <div className={s.swiperItemImg}><img src={item.img} alt="breedImg"></img></div>
                                        <div className={s.swiperItemName}>
                                            <span>{item.breed}</span>
                                            <button className={s.findBtn}>Find Dog</button>
                                        </div>
                                    </NavLink>
                                </div>
                        )
                    })
                }
            </div>
    )
}

SwiperFirstItem.propTypes = {
    arr: PropTypes.array,
}
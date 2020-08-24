import React from 'react';
import s from '../swiper.module.scss'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


export const SwiperSecondtItem = (props) => {
    return (
            <div className={s.swiperItem}>
                {
                    props.arr.map((item) => {
                        return (
                            <div key={nanoid()} className={`${s.swiperItemImgAndName} ${s.secondSwiperItem}`}>
                                <NavLink to={`/breeds/${item.breed}/page/1`}>
                                    <div className={s.swiperItemImg}><img src={item.img} alt="breedImg"></img></div>
                                    <div className={s.swiperItemName}><span>{item.breed}</span><button className={s.findBtn}>Find Dog</button></div>
                                </NavLink>
                            </div>
                        )
                    })
                }
                <div className={s.viewAll}>
                    <p className={s.viewAllTitle}>Need Help Finding the Right Puppy?</p>
                    <p>
                        <NavLink to={`/breeds/all/page/1`} className={s.viewAllbutton}>Breed Match Quiz</NavLink>
                    </p>
                    <p>
                        <NavLink to={`/breeds/all/page/1`} className={s.viewAllarrow__forward}>View All Puppies</NavLink>
                    </p>
                </div>
            </div>
    )
}

SwiperSecondtItem.propTypes = {
    arr: PropTypes.array,
}
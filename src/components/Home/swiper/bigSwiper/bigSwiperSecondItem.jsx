import React from 'react';
import s from '../swiper.module.scss'
import { nanoid } from 'nanoid'

export const SwiperSecondtItem = (props) => {
    return (
            <div className={s.swiperItem}>
                {
                    props.arr.map((item) => {
                        return (
                            <div key={nanoid()} className={`${s.swiperItemImgAndName} ${s.secondSwiperItem}`}>
                                <div className={s.swiperItemImg}><img src={item.img} alt="breedImg"></img></div>
                                <div className={s.swiperItemName}><span>{item.breed}</span><button className={s.findBtn}>Find Dog</button></div>
                            </div>
                        )
                    })
                }
                <div className={s.viewAll}>
                    <p className={s.viewAllTitle}>Need Help Finding the Right Puppy?</p>
                    <p>
                        <a href="/" className={s.viewAllbutton}>Breed Match Quiz</a>
                    </p>
                    <p>
                        <a href="/" className={s.viewAllarrow__forward}>View All Puppies</a>
                    </p>
                </div>
            </div>
    )
}
import React from 'react'
import s from '../Favorites.module.scss'


export default function EmptyFavorites() {
    return (
        <div className={s.emptyContain}>
            <div className={s.boxImgContain}>
                <div className={s.boxImg}></div>
            </div>
            <h2>You have not favorites</h2>
        </div>
    )
}

import React from 'react';
import s from './Preloader.module.scss';

export default function Preloader() {
    return (
        <div className={s.PreloaderContain}>
            <div className={s.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

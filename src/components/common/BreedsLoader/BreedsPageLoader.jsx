import React from 'react'
import {ReactComponent as LoaderSvg } from '../../../images/loader_page.svg'
import s from './loader.module.scss'


export default function BreedsPageLoader() {
    return (
        <div className={s.wrapper}>
            <div className={s.loader}>
                <LoaderSvg/>
            </div>
        </div>
    )
}

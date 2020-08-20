import React from 'react'
import s from '../Home.module.scss'

const AccardionBtn = (props) => {
    let bolleanActiveClass = String(props.value) === String(props.checkedItem)
    return (
            <div className={ bolleanActiveClass ? `${s.accardionBtn} ${s.activeaccardionBtn}` : `${s.accardionBtn}`}>
                <button value={props.value} onClick={props.changeItem}>{props.children}</button>
            </div>
    )
}

export default AccardionBtn
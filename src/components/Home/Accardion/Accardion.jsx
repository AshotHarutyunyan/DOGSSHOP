import React, { useState } from 'react'
import s from '../Home.module.scss'
import AccardionBtn from './AccardionBtn';
import AccardionContent from './AcardionContent';

const Accardion = (props) => {
    const [checkedItem, setcheckedItem] = useState(1);
    const [order, setorder] = useState(3);
    let changeItem = (event) => {
        setcheckedItem(event.target.value)
        setorder(Number(event.target.value) * 2 + 1)
    };


    return (
        <div className={s.accardionContain}>
            <div className={s.accardionBtns}>
                <AccardionBtn value="1" checkedItem={checkedItem} changeItem={changeItem}>Health Guarantee</AccardionBtn>
                <AccardionBtn value="2" checkedItem={checkedItem} changeItem={changeItem}>American Humane Collaboration</AccardionBtn>
                <AccardionBtn value="3" checkedItem={checkedItem} changeItem={changeItem}>AKC Collaboration</AccardionBtn>
                <AccardionBtn value="4" checkedItem={checkedItem} changeItem={changeItem}>Industry-Leading Standards</AccardionBtn>
                <AccardionBtn value="5" checkedItem={checkedItem} changeItem={changeItem}>Safest Travel</AccardionBtn>
                <AccardionContent accardionclass={s.accardionContentMobile} order={order} checkedItem={checkedItem}/>
            </div>
            <AccardionContent accardionclass={s.accardionContent} order={0} checkedItem={checkedItem}/>
        </div>
    )
}

export default Accardion
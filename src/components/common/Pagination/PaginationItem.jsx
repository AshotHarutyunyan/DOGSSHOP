import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './pagination.module.scss';

export default function PaginationItem(props) {
    const setPage = () => {
        props.setcurrentPage(props.page)
    };

    return (
            <NavLink to={`${props.link}`} onClick={setPage} className={s.paginationItem} activeClassName={s.active}>
                {props.page}
            </NavLink>
    )
}

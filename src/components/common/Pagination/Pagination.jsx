import React from 'react'
import PropTypes from 'prop-types';
import s from './pagination.module.scss';

export default function Pagination(props) {
    
    return (
        <div className={s.pagination}>
            <div className={s.paginationContain}>
                {props.filteredPages}
            </div>
        </div>
    )
}

Pagination.propTypes = {
    filteredPages: PropTypes.array,
};

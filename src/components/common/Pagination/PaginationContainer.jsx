import React, { useState } from 'react'
import PropTypes from 'prop-types';
import PaginationLogic from './PaginationLogic';
import PaginationLoader from './PaginationLoader';


const PaginationContainer = (props) => {

    let allItemsCount = props.allItemsCount;
    let pageItemsCount = props.pageItemsCount;
    let pagesCount = Math.ceil(allItemsCount / pageItemsCount);
    const [currentPage, setcurrentPage] = useState(1);
    if (props.currentPage !== currentPage && props.currentPage <= pagesCount) {
        setcurrentPage(props.currentPage)
    }
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    
    if (pagesCount > 0) {
        return <PaginationLogic defaultLink={props.defaultLink} currentPage={Number(currentPage)} setcurrentPage={setcurrentPage} pages={pages} pagesCount={pagesCount}/>
    } 
    return (
        <PaginationLoader/>
    )
}


PaginationContainer.propTypes = {
    allItemsCount: PropTypes.number,
    pageItemsCount: PropTypes.number,
};

export default PaginationContainer
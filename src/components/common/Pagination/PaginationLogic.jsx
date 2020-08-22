import React from 'react';
import { nanoid } from 'nanoid';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import PaginationItem from './PaginationItem';

const PaginationLogic = (props) => {



    let pages = props.pages.map((page) => {
        let key = nanoid();
        if (props.pagesCount <= 7) {
            return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
        } else if (props.pagesCount > 7 && props.pagesCount <= 9) {
            if (props.currentPage < 5) {
                if (page <= 5) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (page > 5 && page < 7) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (page > 7) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                }
            } else if (props.currentPage >= 5) {
                if (page < 3) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (page > 3 && page < 5) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (page >= 5) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                }
            }
        } else if (props.pagesCount >= 10) {
            if (props.currentPage <= 5) {
                if (page <= 6) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (page > 6 && page <= props.pages.length - 3) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (page > props.pages.length - 3) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                }
            } else if (props.currentPage > 5 && props.currentPage <= props.pages.length - 4) {
                if (page <= 3) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (page > 3 && page < props.currentPage - 1) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (props.currentPage - page >= -1 && props.currentPage - page <= 1) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (props.currentPage - page < -1 && page < props.pages.length - 2) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (page >= props.pages.length - 2) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                }
            } else if (props.currentPage > props.pages.length - 4) {
                if (page <= 3) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                } else if (page > 3 && page < props.pages.length - 4) {
                    return <span className={'spanETC'} key={key}>...</span>
                } else if (page >= props.pages.length - 4) {
                    return <PaginationItem key={key} link={`${props.defaultLink}/${page}`} setcurrentPage={props.setcurrentPage} page={page} />
                }
            }
        }
        return null
    }
    );

    let filteredPages = pages;
    if (props.pagesCount >= 10) {
        filteredPages = pages.map((page, idx) => {
            if(page.type === 'span' && pages[idx].type === pages[idx+1].type){
                return null
            }else if (page.type === 'span') {
                return page
            } else if (pages[idx].type.displayName !== 'span') {
                return page
            }
            return null
        })
    }

    return (
        <Pagination currentPage={props.currentPage} filteredPages={filteredPages} defaultLink={props.defaultLink} />
    )
}

PaginationLogic.propTypes = {
    setcurrentPage: PropTypes.func,
    key: PropTypes.string,
    pages: PropTypes.array,
    currentPage: PropTypes.number,
    pagesCount: PropTypes.number,
};

export default PaginationLogic
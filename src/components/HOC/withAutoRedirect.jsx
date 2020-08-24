import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'



const WithAutoRedirect = (props) => {
    
    if(props.location.pathname === "/"){
        return    <Redirect to={"/home"} />
    }
    return null
}
export default  withRouter(WithAutoRedirect)




WithAutoRedirect.propTypes = {
    pathname: PropTypes.string,
}


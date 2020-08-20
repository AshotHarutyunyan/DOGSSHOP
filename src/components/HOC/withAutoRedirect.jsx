import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login' />
        } else if(props.match.url === "/user"){
            return <Redirect to='/user/profile' />
        }

        return <Component {...props} />
    };

    let ConnectedAuthRedirectComponent = compose(
        connect(mapStateToPropsForRedirect),
        withRouter,
    )(RedirectComponent);

    return ConnectedAuthRedirectComponent;

}
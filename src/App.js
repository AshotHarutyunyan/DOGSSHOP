import React from 'react';
import { Route, withRouter } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer';
import BreedsContainer from './components/Breeds/BreedsContainer';
import Favorites from './components/Favorites/Favorites';
import { compose } from 'redux';
import HeaderContainer from './components/header/HeaderContainer';
import Contuctus from './components/ContactUs/Contactus';
import Footer from './components/footer/Footer';

const App = (props) => {

    return (
        <div className='app'>
            <HeaderContainer />
            <div className='app-content'>
                    <Route path="/home" render={() => < HomeContainer />} />
                    <Route path="/contactus" render={() => < Contuctus />} />
                    <Route path="/favorites" render={() => < Favorites />} />
                    <Route path="/breeds/:breed/:subbreed/:page" render={() => < BreedsContainer />} />
            </div>
            <Footer />
        </div>
    );
}



export default compose(
        withRouter,
    )(App);


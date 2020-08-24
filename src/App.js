import React from 'react';
import { Route, withRouter } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Contuctus from './components/ContactUs/Contactus';
import Footer from './components/footer/Footer';
import FavoritesContainer from './components/Favorites/FavoritesContainer';
import WithAutoRedirect from './components/HOC/withAutoRedirect';
import Breeds from './components/Breeds/breeds';


const App = () => {
    return (
        <div className='app'>
            <HeaderContainer />
            <div className='app-content'>
                    <Route path="/" render={() => < WithAutoRedirect />} />
                    <Route path="/home" render={() => < HomeContainer />} />
                    <Route path="/contactus" render={() => < Contuctus />} />
                    <Route path="/favorites" render={() => < FavoritesContainer />} />
                    <Route path="/breeds/:breed/:subbreed/:page" render={() => < Breeds />} />
            </div>
            <Footer />
        </div>
    );
}


export default  withRouter(App)


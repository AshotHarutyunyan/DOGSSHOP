import React from 'react'
import PropTypes from 'prop-types'
import BigSwiper from './swiper/bigSwiper/bigswiper'
import MobileSwiper from './swiper/mobileSwiper/mobileswiper'
import AboutUs from './AboutUs/AboutUs'
import Accardion from './Accardion/Accardion'
import ContactUsContain from './ContactUs/ContactUsContain'

function Home(props) {
    return (
        <div>
            <BigSwiper data={props.swiperInfo} />
            <MobileSwiper data={props.swiperInfo} />
            <AboutUs />
            <Accardion />
            <ContactUsContain />
        </div>
    )
}

Home.propTypes = {
    swiperInfo: PropTypes.array,
}

export default Home


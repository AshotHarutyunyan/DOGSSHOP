import React from 'react'
import s from '../Home.module.scss'
import LearnMore from '../../common/LearnMore'
// import PropTypes from 'prop-types'

function AboutUs(props) {
    return (
        <div className={s.AboutUs}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas hic earum aliquam
            vel et consequatur minus voluptates? Enim voluptatibus ex dolor laudantium iste cupiditate.
            Laborum?<LearnMore/>
        </div>
    )
}

AboutUs.propTypes = {

}

export default AboutUs


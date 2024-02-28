import React from 'react'

import PropTypes from 'prop-types'

import './card-freelance.css'

const CardFreelance = (props) => {
  return (
    <div className={`card-freelance-gallery-card ${props.rootClassName} `}>
      <div className="card-freelance-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="card-freelance-image"
        />
        <div className="card-freelance-container1">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="card-freelance-image1"
          />
          <h2 className="card-freelance-heading">{props.title1}</h2>
        </div>
        <div className="card-freelance-container2">
          <span className="card-freelance-text">{props.subtitle11}</span>
        </div>
        <div className="card-freelance-container3">
          <svg viewBox="0 0 1024 1024" className="card-freelance-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <span className="card-freelance-text1">{props.subtitle113}</span>
          <span className="card-freelance-text2">{props.subtitle1131}</span>
        </div>
      </div>
    </div>
  )
}

CardFreelance.defaultProps = {
  subtitle11: 'DescriptionDescription',
  imageSrc1: '/bruce-mars-200h.jpg',
  subtitle1131: '(9)',
  rootClassName: '',
  title1: 'ArtistName',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1500',
  imageAlt1: 'image',
  subtitle113: '5.0',
  imageAlt: 'image',
}

CardFreelance.propTypes = {
  subtitle11: PropTypes.string,
  imageSrc1: PropTypes.string,
  subtitle1131: PropTypes.string,
  rootClassName: PropTypes.string,
  title1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  subtitle113: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CardFreelance

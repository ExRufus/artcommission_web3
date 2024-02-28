import React from 'react'

import PropTypes from 'prop-types'

import './slider.css'

const Slider = (props) => {
  return (
    <div className={`slider-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="slider-icon">
        <path
          d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
          className=""
        ></path>
      </svg>
      <button type="button" className="slider-button button">
        <span className="slider-text">
          <span className="slider-text1">1</span>
          <br className=""></br>
        </span>
      </button>
      <button type="button" className="slider-button1 button">
        <span className="">
          <span className="slider-text4">2</span>
          <br className=""></br>
        </span>
      </button>
      <button type="button" className="slider-button2 button">
        <span className="">
          <span className="slider-text7">3</span>
          <br className=""></br>
        </span>
      </button>
      <svg viewBox="0 0 1024 1024" className="slider-icon2">
        <path
          d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

Slider.defaultProps = {
  rootClassName: '',
}

Slider.propTypes = {
  rootClassName: PropTypes.string,
}

export default Slider

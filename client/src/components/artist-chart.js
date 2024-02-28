import React from 'react'

import PropTypes from 'prop-types'

import './artist-chart.css'

const ArtistChart = (props) => {
  return (
    <div className={`artist-chart-container ${props.rootClassName} `}>
      <div className="artist-chart-container1">
        <div className="artist-chart-container2">
          <span className="artist-chart-text">{props.text}</span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="artist-chart-image"
          />
          <span className="artist-chart-text01">{props.text1}</span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="artist-chart-icon"
          >
            <path
              d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
              className=""
            ></path>
          </svg>
          <span className="artist-chart-text02">{props.text11}</span>
        </div>
        <div className="artist-chart-container3">
          <span className="artist-chart-text03">{props.text24}</span>
          <img
            alt={props.imageAlt14}
            src={props.imageSrc14}
            className="artist-chart-image1"
          />
          <span className="artist-chart-text04">{props.text124}</span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="artist-chart-icon2"
          >
            <path
              d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
              className=""
            ></path>
          </svg>
          <span className="artist-chart-text05">{props.text1114}</span>
        </div>
        <div className="artist-chart-container4">
          <span className="artist-chart-text06">{props.text23}</span>
          <img
            alt={props.imageAlt13}
            src={props.imageSrc13}
            className="artist-chart-image2"
          />
          <span className="artist-chart-text07">{props.text123}</span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="artist-chart-icon4"
          >
            <path
              d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
              className=""
            ></path>
          </svg>
          <span className="artist-chart-text08">{props.text1113}</span>
        </div>
        <div className="artist-chart-container5">
          <span className="artist-chart-text09">{props.text25}</span>
          <img
            alt={props.imageAlt15}
            src={props.imageSrc15}
            className="artist-chart-image3"
          />
          <span className="artist-chart-text10">{props.text125}</span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="artist-chart-icon6"
          >
            <path
              d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
              className=""
            ></path>
          </svg>
          <span className="artist-chart-text11">{props.text1115}</span>
        </div>
      </div>
    </div>
  )
}

ArtistChart.defaultProps = {
  text1114: '5.0',
  text9: '1',
  text110: "Artist's Username",
  text1110: '5.0',
  text7: '1',
  imageAlt6: 'image',
  imageAlt4: 'image',
  text1115: '5.0',
  imageAlt7: 'image',
  imageAlt10: 'image',
  text111: '5.0',
  imageAlt3: 'image',
  text23: '1',
  text115: '5.0',
  imageSrc12: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc5: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text124: "Artist's Username",
  imageSrc6: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text117: '5.0',
  text116: '5.0',
  text122: "Artist's Username",
  text6: '1',
  imageSrc10: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageAlt5: 'image',
  imageSrc8: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc3: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc11: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text4: '1',
  text8: '1',
  text11: '5.0',
  text123: "Artist's Username",
  imageAlt11: 'image',
  imageAlt12: 'image',
  text21: '1',
  text120: "Artist's Username",
  text24: '1',
  text15: "Artist's Username",
  text2: '1',
  text1: "Artist's Username",
  imageAlt8: 'image',
  imageSrc14: '/bruce-mars-200h.jpg',
  text1112: '5.0',
  text14: "Artist's Username",
  imageSrc2: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc: '/bruce-mars-200h.jpg',
  text1111: '5.0',
  imageAlt1: 'image',
  text1113: '5.0',
  text18: "Artist's Username",
  text119: '5.0',
  text125: "Artist's Username",
  imageAlt2: 'image',
  imageSrc7: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageAlt: 'image',
  text10: '1',
  imageAlt15: 'image',
  text22: '1',
  imageSrc9: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text5: '1',
  rootClassName: '',
  text112: '5.0',
  text13: "Artist's Username",
  imageSrc1: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc13: '/bruce-mars-200h.jpg',
  text118: '5.0',
  text121: "Artist's Username",
  text17: "Artist's Username",
  text113: '5.0',
  text3: '1',
  text20: '1',
  text: '1',
  imageSrc4: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text16: "Artist's Username",
  imageAlt9: 'image',
  text19: "Artist's Username",
  text114: '5.0',
  imageAlt13: 'image',
  imageSrc15: '/bruce-mars-200h.jpg',
  imageAlt14: 'image',
  text25: '1',
  text12: "Artist's Username",
}

ArtistChart.propTypes = {
  text1114: PropTypes.string,
  text9: PropTypes.string,
  text110: PropTypes.string,
  text1110: PropTypes.string,
  text7: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt4: PropTypes.string,
  text1115: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageAlt10: PropTypes.string,
  text111: PropTypes.string,
  imageAlt3: PropTypes.string,
  text23: PropTypes.string,
  text115: PropTypes.string,
  imageSrc12: PropTypes.string,
  imageSrc5: PropTypes.string,
  text124: PropTypes.string,
  imageSrc6: PropTypes.string,
  text117: PropTypes.string,
  text116: PropTypes.string,
  text122: PropTypes.string,
  text6: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc11: PropTypes.string,
  text4: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  text123: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt12: PropTypes.string,
  text21: PropTypes.string,
  text120: PropTypes.string,
  text24: PropTypes.string,
  text15: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageSrc14: PropTypes.string,
  text1112: PropTypes.string,
  text14: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  text1111: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1113: PropTypes.string,
  text18: PropTypes.string,
  text119: PropTypes.string,
  text125: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt: PropTypes.string,
  text10: PropTypes.string,
  imageAlt15: PropTypes.string,
  text22: PropTypes.string,
  imageSrc9: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text112: PropTypes.string,
  text13: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc13: PropTypes.string,
  text118: PropTypes.string,
  text121: PropTypes.string,
  text17: PropTypes.string,
  text113: PropTypes.string,
  text3: PropTypes.string,
  text20: PropTypes.string,
  text: PropTypes.string,
  imageSrc4: PropTypes.string,
  text16: PropTypes.string,
  imageAlt9: PropTypes.string,
  text19: PropTypes.string,
  text114: PropTypes.string,
  imageAlt13: PropTypes.string,
  imageSrc15: PropTypes.string,
  imageAlt14: PropTypes.string,
  text25: PropTypes.string,
  text12: PropTypes.string,
}

export default ArtistChart

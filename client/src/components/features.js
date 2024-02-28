import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div className={`features-features ${props.rootClassName} `}>
      <div className="features-container">
        <div className="features-container01">
          <div className="features-container02">
            <div className="features-container03">
              <span className="features-text">{props.text3}</span>
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="features-image"
              />
              <span className="features-text01">{props.text13}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text02">{props.text112}</span>
            </div>
            <div className="features-container04">
              <span className="features-text03">{props.text33}</span>
              <img
                alt={props.imageAlt23}
                src={props.imageSrc23}
                className="features-image1"
              />
              <span className="features-text04">{props.text133}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon02"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text05">{props.text1123}</span>
            </div>
            <div className="features-container05">
              <span className="features-text06">{props.text32}</span>
              <img
                alt={props.imageAlt22}
                src={props.imageSrc22}
                className="features-image2"
              />
              <span className="features-text07">{props.text132}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon04"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text08">{props.text1122}</span>
            </div>
            <div className="features-container06">
              <span className="features-text09">{props.text31}</span>
              <img
                alt={props.imageAlt21}
                src={props.imageSrc21}
                className="features-image3"
              />
              <span className="features-text10">{props.text131}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon06"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text11">{props.text1121}</span>
            </div>
          </div>
        </div>
        <div className="features-container07">
          <div className="features-container08">
            <div className="features-container09">
              <span className="features-text12">{props.text34}</span>
              <img
                alt={props.imageAlt24}
                src={props.imageSrc24}
                className="features-image4"
              />
              <span className="features-text13">{props.text134}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon08"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text14">{props.text1124}</span>
            </div>
            <div className="features-container10">
              <span className="features-text15">{props.text331}</span>
              <img
                alt={props.imageAlt231}
                src={props.imageSrc231}
                className="features-image5"
              />
              <span className="features-text16">{props.text1331}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon10"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text17">{props.text11231}</span>
            </div>
            <div className="features-container11">
              <span className="features-text18">{props.text321}</span>
              <img
                alt={props.imageAlt221}
                src={props.imageSrc221}
                className="features-image6"
              />
              <span className="features-text19">{props.text1321}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon12"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text20">{props.text11221}</span>
            </div>
            <div className="features-container12">
              <span className="features-text21">{props.text311}</span>
              <img
                alt={props.imageAlt211}
                src={props.imageSrc211}
                className="features-image7"
              />
              <span className="features-text22">{props.text1311}</span>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="features-icon14"
              >
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="features-text23">{props.text11211}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  imageSrc: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc132: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text1242: "Artist's Username",
  text13: "Artist's Username",
  imageSrc152: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text25: '1',
  text11132: '5.0',
  imageAlt15: 'image',
  text11231: '5.0',
  text251: '1',
  imageSrc131: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text1231: "Artist's Username",
  imageAlt: 'image',
  imageSrc2: '/bruce-mars-200h.jpg',
  text33: '1',
  text1331: "Artist's Username",
  imageSrc14: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc151: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text241: '1',
  text1: "Artist's Username",
  text131: "Artist's Username",
  text111: '5.0',
  text11131: '5.0',
  text1252: "Artist's Username",
  imageAlt14: 'image',
  imageAlt231: 'image',
  text: '1',
  text231: '1',
  imageAlt141: 'image',
  text11211: '5.0',
  imageAlt132: 'image',
  imageAlt221: 'image',
  text1321: "Artist's Username",
  text321: '1',
  text1113: '5.0',
  imageAlt211: 'image',
  text311: '1',
  rootClassName: '',
  rootClassName21: '',
  text125: "Artist's Username",
  text124: "Artist's Username",
  text11141: '5.0',
  imageAlt1: 'image',
  rootClassName2: '',
  imageAlt23: 'image',
  imageSrc22: '/bruce-mars-200h.jpg',
  imageSrc221: '/bruce-mars-200h.jpg',
  text1232: "Artist's Username",
  text123: "Artist's Username",
  text12: "Artist's Username",
  imageSrc141: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text11221: '5.0',
  text31: '1',
  text1115: '5.0',
  text1114: '5.0',
  text252: '1',
  text1121: '5.0',
  text11: '5.0',
  text232: '1',
  text1241: "Artist's Username",
  imageAlt2: 'image',
  rootClassName1: '',
  text1122: '5.0',
  text11152: '5.0',
  text1123: '5.0',
  text133: "Artist's Username",
  text331: '1',
  imageSrc142: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text11151: '5.0',
  text1124: '5.0',
  text132: "Artist's Username",
  text1251: "Artist's Username",
  imageAlt22: 'image',
  text2: '1',
  text34: '1',
  text242: '1',
  imageSrc13: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc1: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  text134: "Artist's Username",
  text32: '1',
  text23: '1',
  imageAlt21: 'image',
  imageAlt151: 'image',
  imageAlt13: 'image',
  imageSrc24: '/bruce-mars-200h.jpg',
  imageAlt142: 'image',
  imageAlt131: 'image',
  text24: '1',
  imageSrc21: '/bruce-mars-200h.jpg',
  text11142: '5.0',
  imageSrc15: '888972f9-7dd1-42f1-9979-2aa32080d59c',
  imageSrc231: '/bruce-mars-200h.jpg',
  imageAlt24: 'image',
  text112: '5.0',
  imageSrc23: '/bruce-mars-200h.jpg',
  text3: '1',
  text1311: "Artist's Username",
  imageSrc211: '/bruce-mars-200h.jpg',
  imageAlt152: 'image',
}

Features.propTypes = {
  imageSrc: PropTypes.string,
  imageSrc132: PropTypes.string,
  text1242: PropTypes.string,
  text13: PropTypes.string,
  imageSrc152: PropTypes.string,
  text25: PropTypes.string,
  text11132: PropTypes.string,
  imageAlt15: PropTypes.string,
  text11231: PropTypes.string,
  text251: PropTypes.string,
  imageSrc131: PropTypes.string,
  text1231: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  text33: PropTypes.string,
  text1331: PropTypes.string,
  imageSrc14: PropTypes.string,
  imageSrc151: PropTypes.string,
  text241: PropTypes.string,
  text1: PropTypes.string,
  text131: PropTypes.string,
  text111: PropTypes.string,
  text11131: PropTypes.string,
  text1252: PropTypes.string,
  imageAlt14: PropTypes.string,
  imageAlt231: PropTypes.string,
  text: PropTypes.string,
  text231: PropTypes.string,
  imageAlt141: PropTypes.string,
  text11211: PropTypes.string,
  imageAlt132: PropTypes.string,
  imageAlt221: PropTypes.string,
  text1321: PropTypes.string,
  text321: PropTypes.string,
  text1113: PropTypes.string,
  imageAlt211: PropTypes.string,
  text311: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName21: PropTypes.string,
  text125: PropTypes.string,
  text124: PropTypes.string,
  text11141: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName2: PropTypes.string,
  imageAlt23: PropTypes.string,
  imageSrc22: PropTypes.string,
  imageSrc221: PropTypes.string,
  text1232: PropTypes.string,
  text123: PropTypes.string,
  text12: PropTypes.string,
  imageSrc141: PropTypes.string,
  text11221: PropTypes.string,
  text31: PropTypes.string,
  text1115: PropTypes.string,
  text1114: PropTypes.string,
  text252: PropTypes.string,
  text1121: PropTypes.string,
  text11: PropTypes.string,
  text232: PropTypes.string,
  text1241: PropTypes.string,
  imageAlt2: PropTypes.string,
  rootClassName1: PropTypes.string,
  text1122: PropTypes.string,
  text11152: PropTypes.string,
  text1123: PropTypes.string,
  text133: PropTypes.string,
  text331: PropTypes.string,
  imageSrc142: PropTypes.string,
  text11151: PropTypes.string,
  text1124: PropTypes.string,
  text132: PropTypes.string,
  text1251: PropTypes.string,
  imageAlt22: PropTypes.string,
  text2: PropTypes.string,
  text34: PropTypes.string,
  text242: PropTypes.string,
  imageSrc13: PropTypes.string,
  imageSrc1: PropTypes.string,
  text134: PropTypes.string,
  text32: PropTypes.string,
  text23: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageAlt151: PropTypes.string,
  imageAlt13: PropTypes.string,
  imageSrc24: PropTypes.string,
  imageAlt142: PropTypes.string,
  imageAlt131: PropTypes.string,
  text24: PropTypes.string,
  imageSrc21: PropTypes.string,
  text11142: PropTypes.string,
  imageSrc15: PropTypes.string,
  imageSrc231: PropTypes.string,
  imageAlt24: PropTypes.string,
  text112: PropTypes.string,
  imageSrc23: PropTypes.string,
  text3: PropTypes.string,
  text1311: PropTypes.string,
  imageSrc211: PropTypes.string,
  imageAlt152: PropTypes.string,
}

export default Features

import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <div className="gallery-card3-container">
        <div className="gallery-card3-gallery-card1">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="gallery-card3-image"
          />
          <h2 className="gallery-card3-text">{props.title1}</h2>
          <span className="gallery-card3-text1">{props.subtitle1}</span>
        </div>
      </div>
    </div>
  )
}

GalleryCard3.defaultProps = {
  title1: 'Project Title',
  rootClassName1: '',
  imageAlt: 'image',
  text: 'Text',
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1500',
  imageSrc1:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1500',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  subtitle1: 'Lorem ipsum dolor sit amet',
  title: 'Project Title',
  rootClassName: '',
  imageAlt1: 'image',
}

GalleryCard3.propTypes = {
  title1: PropTypes.string,
  rootClassName1: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle1: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default GalleryCard3

import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard3 from './gallery-card3'
import './home-show-case.css'

const HomeShowCase = (props) => {
  return (
    <div className={`home-show-case-container ${props.rootClassName} `}>
      <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
      <GalleryCard3
        imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
        rootClassName="rootClassName1"
      ></GalleryCard3>
      <GalleryCard3
        imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
        rootClassName="rootClassName3"
      ></GalleryCard3>
      <GalleryCard3
        imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
        rootClassName="rootClassName2"
      ></GalleryCard3>
    </div>
  )
}

HomeShowCase.defaultProps = {
  rootClassName: '',
}

HomeShowCase.propTypes = {
  rootClassName: PropTypes.string,
}

export default HomeShowCase

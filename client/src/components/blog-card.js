import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './blog-card.css'


const BlogCard = (props) => {
  return (
    <Link to="/details-of-project" className="profile-other-people">
    <div className={`blog-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-card-image"
      />
      <div className="blog-card-container1">
        <h5 className="blog-card-text">{props.newProp}</h5>
        <span className="">{props.description}</span>
      </div>
    </div>
    </Link>
  )
  
}

BlogCard.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
  description:
    'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover',
  newProp: 'Rover raised $65 million',
  imageSrc:
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg',
}

BlogCard.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BlogCard

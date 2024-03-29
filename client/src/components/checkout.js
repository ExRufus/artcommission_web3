import React from 'react'

import PropTypes from 'prop-types'

import './checkout.css'

const Checkout = (props) => {
  return (
    <div className={`checkout-blog-post-card ${props.rootClassName} `}>
      <div className="checkout-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="checkout-image"
        />
        <div className="checkout-container1">
          <div className="checkout-container2">
            <div className="checkout-container3">
              <h1 className="checkout-text">{props.title}</h1>
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="checkout-icon"
              >
                <path
                  d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="checkout-container4">
            <span className="checkout-text1">{props.description}</span>
            <span className="checkout-text2">$ 100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Checkout.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=700',
  description: 'DescriptionDescriptionDescription',
  rootClassName: '',
  author: 'by Jon Doe 5 hours ago',
  imageAlt: 'image',
  title: 'Art Title',
}

Checkout.propTypes = {
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
}

export default Checkout

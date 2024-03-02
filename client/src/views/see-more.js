import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import Slider from '../components/slider'
import Footer from '../components/footer'
import './see-more.css'

const SeeMore = (props) => {
  return (
    <div className="see-more-container">
      <Helmet>
        <title>SeeMore - DevXPro</title>
        <meta property="og:title" content="SeeMore - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="see-more-blog-posts">
        <div className="see-more-container1">
          <Link
            to="/profile-other-people-how-they-see"
            className="see-more-navlink"
          >
            <svg viewBox="0 0 1024 1024" className="see-more-icon">
              <path d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"></path>
            </svg>
          </Link>
          <h1 className="see-more-text HeadingTwo">
            <span>My Artwork</span>
            <br></br>
          </h1>
        </div>
        <div className="see-more-container2">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>

        <div className="see-more-container3">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
        <Slider rootClassName="slider-root-class-name"></Slider>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SeeMore

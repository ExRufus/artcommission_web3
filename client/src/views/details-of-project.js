import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Slide1 from '../components/slide1'
import Footer from '../components/footer'
import './details-of-project.css'

const DetailsOfProject = (props) => {
  return (
    <div className="details-of-project-container">
      <Helmet>
        <title>Details-of-Project - DevXPro</title>
        <meta property="og:title" content="Details-of-Project - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="details-of-project-blog-posts">
        <div className="details-of-project-container01">
          <Link
            to="/profile-other-people-how-they-see"
            className="details-of-project-navlink"
          >
            <svg viewBox="0 0 1024 1024" className="details-of-project-icon">
              <path d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"></path>
            </svg>
          </Link>
          <h1 className="details-of-project-text">Title Artwork</h1>
        </div>
        <div className="details-of-project-container02">
          <img
            alt="image"
            src="/bruce-mars-1400w.jpg"
            className="details-of-project-image"
          />
          <div className="details-of-project-container03">
            <div className="details-of-project-container04">
              <h4 className="details-of-project-text01">Michael Roven</h4>
            </div>
            <div className="details-of-project-container05">
              <span className="details-of-project-text02">
                <span className="details-of-project-text03">323</span>
                <span> Art</span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="details-of-project-icon02"
              >
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <span className="details-of-project-text05">
                <span className="details-of-project-text06">5.0</span>
                <span> (55)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="details-of-project-container06">
          <img
            alt="image"
            src="/bruce-mars-1400w.jpg"
            className="details-of-project-image1"
          />
        </div>
        <div className="details-of-project-container07">
          <div className="details-of-project-previous-events section-container">
            <div data-type="slider" className="details-of-project-slider">
              <Slide1 rootClassName="slide1-root-class-name4"></Slide1>
              <Slide1
                heading="Slide #2"
                rootClassName="slide1-root-class-name1"
              ></Slide1>
              <Slide1
                heading="Slide #2"
                rootClassName="slide1-root-class-name6"
              ></Slide1>
              <Slide1
                heading="Slide #2"
                rootClassName="slide1-root-class-name5"
              ></Slide1>
              <Slide1
                heading="Slide #3"
                rootClassName="slide1-root-class-name"
              ></Slide1>
              <Slide1
                heading="Slide #4"
                rootClassName="slide1-root-class-name3"
              ></Slide1>
              <Slide1
                heading="Slide #5"
                rootClassName="slide1-root-class-name2"
              ></Slide1>
            </div>
            <div className="details-of-project-slider-controls">
              <div
                data-action="previousSlide"
                className="details-of-project-go-left"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="details-of-project-icon04"
                >
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <div
                data-action="nextSlide"
                className="details-of-project-go-right"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="details-of-project-icon06"
                >
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <span className="details-of-project-text08">About this Artwork</span>
        <div className="details-of-project-container08">
          <span className="details-of-project-text09">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there’s huge variety of the state of the
            ice.For a start, it does not automatically follow that a record
            amount of ice will melt this summer. More important for determining
            the size of the annual thaw is the state of the weather as the
            midnight sun approaches and temperatures rise. But over the more
            than 30 years of satellite records, scientists have observed a clear
            pattern of decline, decade-by-decade.&amp;#8203;The Arctic Ocean
            freezes every winter and much of the sea-ice then thaws every
            summer, and that process will continue whatever happens with climate
            change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there’s huge variety of the state of the
            ice.
          </span>
          <span className="details-of-project-text10">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there’s huge variety of the state of the
            ice.For a start, it does not automatically follow that a record
            amount of ice will melt this summer. More important for determining
            the size of the annual thaw is the state of the weather as the
            midnight sun approaches and temperatures rise. But over the more
            than 30 years of satellite records, scientists have observed a clear
            pattern of decline, decade-by-decade.&amp;#8203;The Arctic Ocean
            freezes every winter and much of the sea-ice then thaws every
            summer, and that process will continue whatever happens with climate
            change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there’s huge variety of the state of the
            ice.
          </span>
        </div>
        <div className="details-of-project-container09">
          <Link
            to="/payment-flow"
            className="details-of-project-navlink1 button"
          >
            <span className="details-of-project-text11">
              <span>Add to Cart</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="details-of-project-icon08">
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DetailsOfProject

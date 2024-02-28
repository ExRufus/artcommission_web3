import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard3 from '../components/gallery-card3'
import CardFreelance from '../components/card-freelance'
import Slider from '../components/slider'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DevXPro</title>
        <meta property="og:title" content="DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="home-container01">
        <div className="home-hero">
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1707430393809-784967fe6fee?ixid=M3w5MTMyMXwwfDF8YWxsfDEwOXx8fHx8fDJ8fDE3MDg0NDI4NDV8&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3 rootClassName="rootClassName7"></GalleryCard3>
          <GalleryCard3 rootClassName="rootClassName6"></GalleryCard3>
          <GalleryCard3 rootClassName="rootClassName4"></GalleryCard3>
        </div>
      </div>
      <h1 className="home-text">Discover our unique artists</h1>
      <div className="home-features">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <span className="home-text01">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image"
              />
              <span className="home-text02">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text03">5.0</span>
            </div>
            <div className="home-container05">
              <span className="home-text04">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image1"
              />
              <span className="home-text05">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text06">5.0</span>
            </div>
            <div className="home-container06">
              <span className="home-text07">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image2"
              />
              <span className="home-text08">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text09">5.0</span>
            </div>
            <div className="home-container07">
              <span className="home-text10">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image3"
              />
              <span className="home-text11">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text12">5.0</span>
            </div>
          </div>
          <div className="home-container08">
            <div className="home-container09">
              <span className="home-text13">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image4"
              />
              <span className="home-text14">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text15">5.0</span>
            </div>
            <div className="home-container10">
              <span className="home-text16">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image5"
              />
              <span className="home-text17">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text18">5.0</span>
            </div>
            <div className="home-container11">
              <span className="home-text19">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image6"
              />
              <span className="home-text20">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon12">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text21">5.0</span>
            </div>
            <div className="home-container12">
              <span className="home-text22">1</span>
              <img
                alt="image"
                src="/bruce-mars-200h.jpg"
                className="home-image7"
              />
              <span className="home-text23">Artist&apos;s Username</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
              </svg>
              <span className="home-text24">5.0</span>
            </div>
          </div>
        </div>
      </div>
      <section className="home-container13">
        <h1 className="home-text25">Artwork</h1>
        <div className="home-gallery">
          <CardFreelance rootClassName="rootClassName"></CardFreelance>
          <CardFreelance rootClassName="rootClassName5"></CardFreelance>
          <CardFreelance rootClassName="rootClassName4"></CardFreelance>
          <CardFreelance rootClassName="rootClassName3"></CardFreelance>
          <CardFreelance rootClassName="rootClassName2"></CardFreelance>
          <CardFreelance rootClassName="rootClassName1"></CardFreelance>
        </div>
        <Slider></Slider>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home

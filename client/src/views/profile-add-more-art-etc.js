import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import TransactionHistory from '../components/transaction-history'
import Slider from '../components/slider'
import Footer from '../components/footer'
import './profile-add-more-art-etc.css'

const ProfileAddMoreArtEtc = (props) => {
  return (
    <div className="profile-add-more-art-etc-container">
      <Helmet>
        <title>Profile-add-more-art-etc - DevXPro</title>
        <meta
          property="og:title"
          content="Profile-add-more-art-etc - DevXPro"
        />
      </Helmet>
      <Header></Header>
      <div className="profile-add-more-art-etc-profile">
        <img
          alt="image"
          src="/bruce-mars-200h.jpg"
          className="profile-add-more-art-etc-image"
        />
        <div className="profile-add-more-art-etc-container01">
          <div className="profile-add-more-art-etc-container02">
            <h4 className="profile-add-more-art-etc-text">Michael Roven</h4>
            <Link
              to="/profile-setting-and-stuff"
              className="profile-add-more-art-etc-navlink"
            >
              <svg
                viewBox="0 0 1024.5851428571427 1024"
                className="profile-add-more-art-etc-icon"
              >
                <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
              </svg>
            </Link>
          </div>
          <div className="profile-add-more-art-etc-container03">
            <span className="profile-add-more-art-etc-text01">
              <span className="profile-add-more-art-etc-text02">323</span>
              <span> Art</span>
            </span>
            <svg
              viewBox="0 0 1024 1024"
              className="profile-add-more-art-etc-icon2"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <span className="profile-add-more-art-etc-text04">
              <span className="profile-add-more-art-etc-text05">5.0</span>
              <span> (55)</span>
            </span>
          </div>
          <span className="profile-add-more-art-etc-text07 Medium">
            Decisions: If you can’t decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
        </div>
      </div>
      <div className="profile-add-more-art-etc-blog-posts">
        <div className="profile-add-more-art-etc-container04">
          <h1 className="profile-add-more-art-etc-text08 HeadingTwo">
            <span>Item&apos;s</span>
            <br></br>
          </h1>
          <svg viewBox="0 0 1024.5851428571427 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-add-more-art-etc-icon4">
<path d="M222.708 37.118H74.2361C64.3918 37.118 54.9507 41.0287 47.9897 47.9897C41.0287 54.9507 37.118 64.3918 37.118 74.2361V222.708C37.118 232.553 41.0287 241.994 47.9897 248.955C54.9507 255.916 64.3918 259.826 74.2361 259.826H222.708C232.553 259.826 241.994 255.916 248.955 248.955C255.916 241.994 259.826 232.553 259.826 222.708V74.2361C259.826 64.3918 255.916 54.9507 248.955 47.9897C241.994 41.0287 232.553 37.118 222.708 37.118ZM235.081 222.708C235.081 225.99 233.777 229.137 231.457 231.457C229.137 233.777 225.99 235.081 222.708 235.081H74.2361C70.9547 235.081 67.8076 233.777 65.4873 231.457C63.167 229.137 61.8634 225.99 61.8634 222.708V74.2361C61.8634 70.9547 63.167 67.8076 65.4873 65.4873C67.8076 63.167 70.9547 61.8634 74.2361 61.8634H222.708C225.99 61.8634 229.137 63.167 231.457 65.4873C233.777 67.8076 235.081 70.9547 235.081 74.2361V222.708Z" fill="#231F20"/>
<path d="M185.59 136.099H160.845V111.354C160.845 108.073 159.541 104.926 157.221 102.605C154.901 100.285 151.754 98.9814 148.472 98.9814C145.191 98.9814 142.044 100.285 139.723 102.605C137.403 104.926 136.099 108.073 136.099 111.354V136.099H111.354C108.073 136.099 104.926 137.403 102.605 139.723C100.285 142.044 98.9814 145.191 98.9814 148.472C98.9814 151.754 100.285 154.901 102.605 157.221C104.926 159.541 108.073 160.845 111.354 160.845H136.099V185.59C136.099 188.872 137.403 192.019 139.723 194.339C142.044 196.659 145.191 197.963 148.472 197.963C151.754 197.963 154.901 196.659 157.221 194.339C159.541 192.019 160.845 188.872 160.845 185.59V160.845H185.59C188.872 160.845 192.019 159.541 194.339 157.221C196.659 154.901 197.963 151.754 197.963 148.472C197.963 145.191 196.659 142.044 194.339 139.723C192.019 137.403 188.872 136.099 185.59 136.099Z" fill="#231F20"/>
</svg>

          {/* <svg
            viewBox="0 0 1024.5851428571427 1024"
            className="profile-add-more-art-etc-icon4"
          >
            <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
          </svg> */}
        </div>
        <div className="profile-add-more-art-etc-container05">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard
            imageSrc="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
          ></BlogCard>
        </div>
        <h1 className="profile-add-more-art-etc-text11 HeadingTwo">
          <span>Transaction History</span>
          <br></br><br></br>
        </h1>
        <div className="profile-add-more-art-etc-container06">
          <div className="profile-add-more-art-etc-container07">
            <span className="profile-add-more-art-etc-text14">
              Name/Business
            </span>
            <span className="profile-add-more-art-etc-text15">Date</span>
            <span className="profile-add-more-art-etc-text16">Invoice ID</span>
            <span className="profile-add-more-art-etc-text17">Amount</span>
            <span className="profile-add-more-art-etc-text18">Status</span>
            <span className="profile-add-more-art-etc-text19">Action</span>
          </div>
          <TransactionHistory></TransactionHistory>
          <div className="profile-add-more-art-etc-container08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwZW9wbGV8ZW58MHx8fHwxNzA4NTA1NTI5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
              className="profile-add-more-art-etc-image1"
            />
            <div className="profile-add-more-art-etc-container09">
              <span className="profile-add-more-art-etc-text20">
                William Madorch
              </span>
              <div className="profile-add-more-art-etc-container10">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="profile-add-more-art-etc-container11">
              <span className="profile-add-more-art-etc-text23">
                21 March 2021
              </span>
              <div className="profile-add-more-art-etc-container12">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="profile-add-more-art-etc-text26">OPXXXXXXXX</span>
            <span className="profile-add-more-art-etc-text27">$250 USD</span>
            <span className="profile-add-more-art-etc-text28">Deposit</span>
            <button
              type="button"
              className="profile-add-more-art-etc-button button"
            >
              Details
            </button>
          </div>
          <div className="profile-add-more-art-etc-container13">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwZW9wbGV8ZW58MHx8fHwxNzA4NTA1NTI5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
              className="profile-add-more-art-etc-image2"
            />
            <div className="profile-add-more-art-etc-container14">
              <span className="profile-add-more-art-etc-text29">
                William Madorch
              </span>
              <div className="profile-add-more-art-etc-container15">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="profile-add-more-art-etc-container16">
              <span className="profile-add-more-art-etc-text32">
                21 March 2021
              </span>
              <div className="profile-add-more-art-etc-container17">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="profile-add-more-art-etc-text35">OPXXXXXXXX</span>
            <span className="profile-add-more-art-etc-text36">-$250 USD</span>
            <span className="profile-add-more-art-etc-text37">Transfer</span>
            <button
              type="button"
              className="profile-add-more-art-etc-button1 button"
            >
              Details
            </button>
          </div>
          <div className="profile-add-more-art-etc-container18">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwZW9wbGV8ZW58MHx8fHwxNzA4NTA1NTI5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
              className="profile-add-more-art-etc-image3"
            />
            <div className="profile-add-more-art-etc-container19">
              <span className="profile-add-more-art-etc-text38">
                William Madorch
              </span>
              <div className="profile-add-more-art-etc-container20">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="profile-add-more-art-etc-container21">
              <span className="profile-add-more-art-etc-text41">
                21 March 2021
              </span>
              <div className="profile-add-more-art-etc-container22">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="profile-add-more-art-etc-text44">OPXXXXXXXX</span>
            <span className="profile-add-more-art-etc-text45">-$250 USD</span>
            <span className="profile-add-more-art-etc-text46">
              <span>Payment</span>
              <br></br>
            </span>
            <button
              type="button"
              className="profile-add-more-art-etc-button2 button"
            >
              Details
            </button>
          </div>
        </div>
        <Slider rootClassName="slider-root-class-name1"></Slider>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProfileAddMoreArtEtc

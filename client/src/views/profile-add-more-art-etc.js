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
          <svg
            viewBox="0 0 1024.5851428571427 1024"
            className="profile-add-more-art-etc-icon4"
          >
            <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
          </svg>
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
          <br></br>
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

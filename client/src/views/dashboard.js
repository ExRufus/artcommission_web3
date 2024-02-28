import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - DevXPro</title>
        <meta property="og:title" content="Dashboard - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="dashboard-blog-posts">
        <div className="dashboard-container01">
          <Link
            to="/profile-other-people-how-they-see"
            className="dashboard-navlink"
          >
            <svg viewBox="0 0 1024 1024" className="dashboard-icon">
              <path d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"></path>
            </svg>
          </Link>
          <h1 className="dashboard-text">
            <span>Dashboard</span>
            <br></br>
          </h1>
        </div>
        <div className="dashboard-container02">
          <div className="dashboard-container03">
            <div className="dashboard-container04">
              <span className="dashboard-text03">Projects</span>
              <span className="dashboard-text04">
                <span className="dashboard-text05">0</span>
                <span className="dashboard-text06"> </span>
                <span className="dashboard-text07">/</span>
                <span className="dashboard-text08">100</span>
              </span>
              <div className="dashboard-container05">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon02">
                  <path d="M384 214h426v426h-84v-282l-496 496-60-60 496-496h-282v-84z"></path>
                </svg>
                <span className="dashboard-text09">
                  <span className="dashboard-text10">10%</span>
                  <span> Increase from Last Month</span>
                </span>
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="dashboard-icon04">
              <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
            </svg>
          </div>
          <div className="dashboard-container06">
            <div className="dashboard-container07">
              <span className="dashboard-text12">Tasks</span>
              <span className="dashboard-text13">
                <span className="dashboard-text14">0</span>
                <span className="dashboard-text15"> </span>
                <span className="dashboard-text16">/</span>
                <span className="dashboard-text17">100</span>
              </span>
              <div className="dashboard-container08">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon06">
                  <path d="M146.746 237.254l530.742 530.746h-229.488c-35.346 0-64 28.654-64 64s28.654 64 64 64h384c25.884 0 49.222-15.594 59.126-39.508 3.284-7.924 4.84-16.242 4.838-24.492h0.036v-384c0-35.346-28.654-64-64-64-35.348 0-64 28.654-64 64v229.49l-530.746-530.744c-12.496-12.498-28.874-18.746-45.254-18.746s-32.758 6.248-45.254 18.746c-24.994 24.992-24.994 65.516 0 90.508z"></path>
                </svg>
                <span className="dashboard-text18">
                  <span className="dashboard-text19">10%</span>
                  <span className="dashboard-text20"> Decrease </span>
                  <span>from Last Month</span>
                </span>
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
              <path d="M928 128h-288c0-70.692-57.306-128-128-128-70.692 0-128 57.308-128 128h-288c-17.672 0-32 14.328-32 32v832c0 17.674 14.328 32 32 32h832c17.674 0 32-14.326 32-32v-832c0-17.672-14.326-32-32-32zM512 64c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64s28.654-64 64-64zM896 960h-768v-768h128v96c0 17.672 14.328 32 32 32h448c17.674 0 32-14.328 32-32v-96h128v768z"></path>
              <path d="M448 858.51l-205.254-237.254 58.508-58.51 146.746 114.744 274.742-242.744 58.514 58.508z"></path>
            </svg>
          </div>
          <div className="dashboard-container09">
            <div className="dashboard-container10">
              <span className="dashboard-text22">Resources</span>
              <span className="dashboard-text23">
                <span className="dashboard-text24">0</span>
                <span className="dashboard-text25"> </span>
                <span className="dashboard-text26">/</span>
                <span className="dashboard-text27">100</span>
              </span>
              <div className="dashboard-container11">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon11">
                  <path d="M384 214h426v426h-84v-282l-496 496-60-60 496-496h-282v-84z"></path>
                </svg>
                <span className="dashboard-text28">
                  <span className="dashboard-text29">10%</span>
                  <span> Increase from Last Month</span>
                </span>
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="dashboard-icon13">
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
        </div>
        <div className="dashboard-container12">
          <h1 className="dashboard-text31">
            <span>Project Summary</span>
            <br></br>
          </h1>
          <div className="dashboard-container13">
            <span className="dashboard-text34">Project Name</span>
            <span className="dashboard-text35">Due Date</span>
            <span className="dashboard-text36">Invoice ID</span>
            <span className="dashboard-text37">Amount</span>
            <span className="dashboard-text38">Status</span>
            <span className="dashboard-text39">Action</span>
          </div>
          <div className="dashboard-container14">
            <span className="dashboard-text40">
              _________________________________________________________________________________________________________________________________________________________________
            </span>
          </div>
          <div className="dashboard-container15">
            <div className="dashboard-container16">
              <span className="dashboard-text41">William Madorch</span>
              <div className="dashboard-container17">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="dashboard-container18">
              <span className="dashboard-text44">21 March 2021</span>
              <div className="dashboard-container19">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="dashboard-text47">OPXXXXXXXX</span>
            <span className="dashboard-text48">$250 USD</span>
            <span className="dashboard-text49">Completed</span>
            <button type="button" className="dashboard-button button">
              Details
            </button>
          </div>
          <div className="dashboard-container20">
            <div className="dashboard-container21">
              <span className="dashboard-text50">William Madorch</span>
              <div className="dashboard-container22">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="dashboard-container23">
              <span className="dashboard-text53">21 March 2021</span>
              <div className="dashboard-container24">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="dashboard-text56">OPXXXXXXXX</span>
            <span className="dashboard-text57">$250 USD</span>
            <span className="dashboard-text58">On Track</span>
            <button type="button" className="dashboard-button1 button">
              Details
            </button>
          </div>
          <div className="dashboard-container25">
            <div className="dashboard-container26">
              <span className="dashboard-text59">William Madorch</span>
              <div className="dashboard-container27">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="dashboard-container28">
              <span className="dashboard-text62">21 March 2021</span>
              <div className="dashboard-container29">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="dashboard-text65">OPXXXXXXXX</span>
            <span className="dashboard-text66">$250 USD</span>
            <span className="dashboard-text67">Delayed</span>
            <button type="button" className="dashboard-button2 button">
              Details
            </button>
          </div>
          <div className="dashboard-container30">
            <div className="dashboard-container31">
              <span className="dashboard-text68">William Madorch</span>
              <div className="dashboard-container32">
                <span>ID: </span>
                <span>00000000</span>
              </div>
            </div>
            <div className="dashboard-container33">
              <span className="dashboard-text71">21 March 2021</span>
              <div className="dashboard-container34">
                <span>At </span>
                <span>00.00 AM</span>
              </div>
            </div>
            <span className="dashboard-text74">OPXXXXXXXX</span>
            <span className="dashboard-text75">$250 USD</span>
            <span className="dashboard-text76">
              <span className="dashboard-text77">At Risk</span>
              <br className="dashboard-text78"></br>
            </span>
            <button type="button" className="dashboard-button3 button">
              Details
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Dashboard

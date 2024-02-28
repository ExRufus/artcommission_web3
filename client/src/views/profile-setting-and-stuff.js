import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './profile-setting-and-stuff.css'

const ProfileSettingAndStuff = (props) => {
  return (
    <div className="profile-setting-and-stuff-container">
      <Helmet>
        <title>Profile-setting-and-stuff - DevXPro</title>
        <meta
          property="og:title"
          content="Profile-setting-and-stuff - DevXPro"
        />
      </Helmet>
      <Header></Header>
      <div className="profile-setting-and-stuff-container1">
        <h1 className="profile-setting-and-stuff-text">Personal Info</h1>
        <span className="profile-setting-and-stuff-text01">
          Tell use a bit about yourself. This information will appear on your
          public profile, so that potential buyers can get to know you better.
        </span>
        <span className="profile-setting-and-stuff-text02">
          ________________________________________________________________________________________________________________________________
        </span>
        <div className="profile-setting-and-stuff-container2">
          <div className="profile-setting-and-stuff-container3">
            <span className="profile-setting-and-stuff-text03">
              <span className="profile-setting-and-stuff-text04">
                Display Name
              </span>
              <span className="profile-setting-and-stuff-text05">
                *
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <input
              type="text"
              required="true"
              placeholder="Type your display name"
              autoComplete="name"
              className="input profile-setting-and-stuff-input"
            />
          </div>
          <div className="profile-setting-and-stuff-container4">
            <span className="profile-setting-and-stuff-text06">
              <span className="profile-setting-and-stuff-text07">
                Profile Picture
              </span>
              <span className="profile-setting-and-stuff-text08">
                *
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <img
              alt="image"
              src="/bruce-mars-200h.jpg"
              className="profile-setting-and-stuff-image"
            />
          </div>
          <div className="profile-setting-and-stuff-container5">
            <div className="profile-setting-and-stuff-container6">
              <span className="profile-setting-and-stuff-text09">
                <span className="profile-setting-and-stuff-text10">
                  Description
                </span>
                <span className="profile-setting-and-stuff-text11">
                  *
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <textarea
                placeholder="Share a bit about your work experience, cool projects you've completed, and your area of expertise"
                className="profile-setting-and-stuff-textarea textarea"
              ></textarea>
            </div>
            <div className="profile-setting-and-stuff-container7">
              <span className="profile-setting-and-stuff-text12">
                min. 150 characters
              </span>
              <span className="profile-setting-and-stuff-text13">0/600</span>
            </div>
          </div>
        </div>
        <Link
          to="/profile-add-more-art-etc"
          className="profile-setting-and-stuff-button button"
        >
          <span>
            <span>Submit</span>
            <br></br>
          </span>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProfileSettingAndStuff

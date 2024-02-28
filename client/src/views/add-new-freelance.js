import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './add-new-freelance.css'

const AddNewFreelance = (props) => {
  return (
    <div className="add-new-freelance-container">
      <Helmet>
        <title>Add-New-Freelance - DevXPro</title>
        <meta property="og:title" content="Add-New-Freelance - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="add-new-freelance-container01">
        <h1 className="add-new-freelance-text">Information Product</h1>
        <span className="add-new-freelance-text01">
          ________________________________________________________________________________________________________________________________
        </span>
        <div className="add-new-freelance-container02">
          <div className="add-new-freelance-container03">
            <span className="add-new-freelance-text02">
              <span>Product Picture</span>
              <span className="add-new-freelance-text04">*</span>
            </span>
            <img
              alt="image"
              src="/bruce-mars-200h.jpg"
              className="add-new-freelance-image"
            />
          </div>
          <div className="add-new-freelance-container04">
            <span className="add-new-freelance-text05">
              <span className="add-new-freelance-text06">Title Product</span>
              <span className="add-new-freelance-text07">
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
              placeholder="Type your display product"
              autoComplete="name"
              className="add-new-freelance-input input"
            />
          </div>
          <div className="add-new-freelance-container05">
            <span className="add-new-freelance-text08">
              <span className="add-new-freelance-text09">Price</span>
              <span className="add-new-freelance-text10">
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
              placeholder="Type your price"
              autoComplete="name"
              className="add-new-freelance-input1 input"
            />
            <span className="add-new-freelance-text11">ETH</span>
          </div>
          <div className="add-new-freelance-container06">
            <span className="add-new-freelance-text12">
              <span className="add-new-freelance-text13">Max Revision</span>
              <span className="add-new-freelance-text14">
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
              placeholder="Max revision"
              autoComplete="name"
              className="add-new-freelance-input2 input"
            />
          </div>
          <div className="add-new-freelance-container07">
            <span className="add-new-freelance-text15">
              <span className="add-new-freelance-text16">Availability</span>
              <span className="add-new-freelance-text17">
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
              placeholder="Available"
              autoComplete="name"
              className="add-new-freelance-input3 input"
            />
          </div>
          <div className="add-new-freelance-container08">
            <div className="add-new-freelance-container09">
              <span className="add-new-freelance-text18">
                <span className="add-new-freelance-text19">Description</span>
                <span className="add-new-freelance-text20">
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
                className="add-new-freelance-textarea textarea"
              ></textarea>
            </div>
            <div className="add-new-freelance-container10">
              <span className="add-new-freelance-text21">0/600</span>
            </div>
          </div>
        </div>
        <Link
          to="/profile-add-more-art-etc"
          className="add-new-freelance-button button"
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

export default AddNewFreelance

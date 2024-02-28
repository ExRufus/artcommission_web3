import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './revision-and-project.css'

const RevisionAndProject = (props) => {
  return (
    <div className="revision-and-project-container">
      <Helmet>
        <title>Revision-and-Project - DevXPro</title>
        <meta property="og:title" content="Revision-and-Project - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="revision-and-project-container01">
        <div className="revision-and-project-container02">
          <div className="revision-and-project-container03">
            <div className="revision-and-project-container04">
              <span className="revision-and-project-text">Project Name</span>
              <span className="revision-and-project-text01">
                Design Web and Mobile Full Service
              </span>
            </div>
            <div className="revision-and-project-container05">
              <span className="revision-and-project-text02">Enquiry Date</span>
              <span className="revision-and-project-text03">dd/mm/yyyy</span>
            </div>
            <div className="revision-and-project-container06">
              <span className="revision-and-project-text04">Total Price</span>
              <span className="revision-and-project-text05">$250</span>
            </div>
            <div className="revision-and-project-container07">
              <div className="revision-and-project-container08">
                <button
                  type="button"
                  className="revision-and-project-button button"
                >
                  Decline
                </button>
                <button
                  type="button"
                  className="revision-and-project-button1 button"
                >
                  <span>
                    <span>Finish Project</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="revision-and-project-profile">
            <img
              alt="image"
              src="/bruce-mars-200h.jpg"
              className="revision-and-project-image"
            />
            <div className="revision-and-project-container09">
              <h4 className="revision-and-project-text09">Michael Roven</h4>
              <span className="revision-and-project-text10 Medium">
                Decisions: If you can’t decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Choose the
                path that leaves you more equanimous.
              </span>
            </div>
          </div>
          <div className="revision-and-project-container10">
            <div className="revision-and-project-container11">
              <span className="revision-and-project-text11">Milestone</span>
              <span className="revision-and-project-text12">
                Design Web Dashboard All Screens
              </span>
              <span className="revision-and-project-text13">
                Landing Page Design
              </span>
              <span className="revision-and-project-text14">
                Mobile App Design
              </span>
              <button
                type="button"
                className="revision-and-project-button2 button"
              >
                Upload Files
              </button>
            </div>
            <div className="revision-and-project-container12">
              <span className="revision-and-project-text15">Cost</span>
              <span className="revision-and-project-text16">$250 </span>
              <span className="revision-and-project-text17">$250 </span>
              <span className="revision-and-project-text18">$250 </span>
            </div>
            <div className="revision-and-project-container13">
              <span className="revision-and-project-text19">Due Date</span>
              <span className="revision-and-project-text20">dd/mm/yyyy</span>
              <span className="revision-and-project-text21">dd/mm/yyyy</span>
              <span className="revision-and-project-text22">dd/mm/yyyy</span>
            </div>
          </div>
          <div className="revision-and-project-container14">
            <span className="revision-and-project-text23">Files Uploaded</span>
            <div className="revision-and-project-container15">
              <div className="revision-and-project-container16">
                <span className="revision-and-project-text24">Lorem Ipsum</span>
              </div>
            </div>
          </div>
          <div className="revision-and-project-container17">
            <span className="revision-and-project-text25">Description</span>
            <input
              type="text"
              className="revision-and-project-textinput input"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RevisionAndProject

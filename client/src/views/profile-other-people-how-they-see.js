import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './profile-other-people-how-they-see.css'

const ProfileOtherPeopleHowTheySee = (props) => {
  return (
    <div className="profile-other-people-how-they-see-container">
      <Helmet>
        <title>Profile-other-people-how-they-see - DevXPro</title>
        <meta
          property="og:title"
          content="Profile-other-people-how-they-see - DevXPro"
        />
      </Helmet>
      <Header></Header>
      <div className="profile-other-people-how-they-see-profile">
        <img
          alt="image"
          src="/bruce-mars-200h.jpg"
          className="profile-other-people-how-they-see-image"
        />
        <div className="profile-other-people-how-they-see-container01">
          <div className="profile-other-people-how-they-see-container02">
            <h4 className="profile-other-people-how-they-see-text">
              Michael Roven
            </h4>
          </div>
          <div className="profile-other-people-how-they-see-container03">
            <span className="profile-other-people-how-they-see-text01">
              <span className="profile-other-people-how-they-see-text02">
                323
              </span>
              <span> Art</span>
            </span>
            <svg
              viewBox="0 0 1024 1024"
              className="profile-other-people-how-they-see-icon"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <span className="profile-other-people-how-they-see-text04">
              <span className="profile-other-people-how-they-see-text05">
                5.0
              </span>
              <span> (55)</span>
            </span>
          </div>
          <span className="Medium">
            Decisions: If you can’t decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
        </div>
      </div>
      <div className="profile-other-people-how-they-see-blog-posts">
        <div className="profile-other-people-how-they-see-container04">
          <h1 className="profile-other-people-how-they-see-text08 HeadingTwo">
            <span>My Artwork</span>
            <br></br>
          </h1>
          <Link to="/see-more" className="profile-other-people">
            <span className="profile-other-people-how-they-see-text11 Small">
              See more &gt;
            </span>
          </Link>
        </div>
        <div className="profile-other-people-how-they-see-container05">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard
            imageSrc="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
          ></BlogCard>
          <div className="profile-other-people-how-they-see-container06">
            <h1 className="profile-other-people-how-they-see-text12">
              Flexible work hours
            </h1>
            <span className="profile-other-people-how-they-see-text13">
              <span className="profile-other-people-how-they-see-text14">
                Rather than worrying about switching offices every couple years,
                you stay in the same place.
              </span>
            </span>
            <div className="profile-other-people-how-they-see-container07">
              <button className="profile-other-people-how-they-see-button button">
                <span className="profile-other-people-how-they-see-text15">
                  Read more
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="profile-other-people-how-they-see-icon2"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <h1 className="profile-other-people-how-they-see-text16 HeadingTwo">
          <span>Pricing</span>
          <br></br>
        </h1>
        <div className="profile-other-people-how-they-see-container08">
          <div className="profile-other-people-how-they-see-card">
            <div className="profile-other-people-how-they-see-container09">
              <div className="profile-other-people-how-they-see-pricing-card">
                <span className="profile-other-people-how-they-see-text19">
                  Free
                </span>
                <div className="profile-other-people-how-they-see-container10">
                  <span className="profile-other-people-how-they-see-text20">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="profile-other-people-how-they-see-text23">
                    0
                  </span>
                </div>
                <div className="profile-other-people-how-they-see-container11">
                  <span className="profile-other-people-how-they-see-text24">
                    <span>✔ Full access to design tool</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text26">
                    <span>✔ Publish with Teleport</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text28">
                    <span>✔ Subdomain publish</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text30">
                    <span>✔ Download code</span>
                  </span>
                </div>
                <button className="profile-other-people-how-they-see-button1 button">
                  Learn More
                </button>
              </div>
              <div className="profile-other-people-how-they-see-pricing-card1">
                <span className="profile-other-people-how-they-see-text32">
                  basic
                </span>
                <div className="profile-other-people-how-they-see-container12">
                  <span className="profile-other-people-how-they-see-text33">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="profile-other-people-how-they-see-text36">
                    9
                  </span>
                  <span className="profile-other-people-how-they-see-text37">
                    <span>/ monthly</span>
                  </span>
                </div>
                <span className="profile-other-people-how-they-see-text39">
                  <span>Billed annualy or $12 month-to-month.</span>
                  <span></span>
                </span>
                <div className="profile-other-people-how-they-see-container13">
                  <span className="profile-other-people-how-they-see-text42">
                    <span>✔ All features of FREE plan</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text44">
                    <span>✔ Connect to custom domains</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text46">
                    ✔ Private projects
                  </span>
                  <span className="profile-other-people-how-they-see-text47">
                    <span>✔ No project limitations</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text49">
                    <span>✔ Unlimited collabotators</span>
                  </span>
                </div>
                <button className="profile-other-people-how-they-see-button2 button">
                  Learn More
                </button>
              </div>
              <div className="profile-other-people-how-they-see-pricing-card2">
                <span className="profile-other-people-how-they-see-text51">
                  Pro
                </span>
                <div className="profile-other-people-how-they-see-container14">
                  <span className="profile-other-people-how-they-see-text52">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="profile-other-people-how-they-see-text55">
                    29
                  </span>
                  <span className="profile-other-people-how-they-see-text56">
                    <span>/ monthly</span>
                  </span>
                </div>
                <span className="profile-other-people-how-they-see-text58">
                  <span>Billed annualy or $32 month-to-month.</span>
                  <span></span>
                </span>
                <div className="profile-other-people-how-they-see-container15">
                  <span className="profile-other-people-how-they-see-text61">
                    <span>✔ All features of BASIC plan</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text63">
                    <span>✔ Priority support</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text65">
                    <span>✔ Premium analytics</span>
                  </span>
                  <span className="profile-other-people-how-they-see-text67">
                    <span>✔ Version history</span>
                  </span>
                </div>
                <button className="profile-other-people-how-they-see-button3 button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProfileOtherPeopleHowTheySee

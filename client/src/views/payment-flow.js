import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Checkout from '../components/checkout'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './payment-flow.css'

const PaymentFlow = (props) => {
  return (
    <div className="payment-flow-container">
      <Helmet>
        <title>Payment-Flow - DevXPro</title>
        <meta property="og:title" content="Payment-Flow - DevXPro" />
      </Helmet>
      <Header></Header>
      <div className="payment-flow-container01">
        <h1 className="payment-flow-text">
          <span>Shopping Cart</span>
          <br></br>
        </h1>
        <span className="payment-flow-text03">
          <span>DescriptionDescriptionDescription</span>
          <br></br>
        </span>
        <div className="payment-flow-container02">
          <div className="payment-flow-blog">
          <Link to="/details-of-project" className="cart-detail-of-project">
            <div className="payment-flow-container03">
              <Checkout rootClassName="rootClassName4"></Checkout>
            </div>
          </Link>
            <div className="payment-flow-container04">
              <Checkout rootClassName="rootClassName6"></Checkout>
            </div>
            <div className="payment-flow-container05">
              <Checkout
                imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName5"
              ></Checkout>
            </div>
            <div className="payment-flow-container06">
              <Checkout
                imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName7"
              ></Checkout>
            </div>
          </div>
          <div className="payment-flow-pricing">
            <div className="payment-flow-container07">
              <div className="payment-flow-container08">
                <span className="payment-flow-text06">
                  <span>Order Summary</span>
                  <br></br>
                  <span className="payment-flow-text09">
                    ______________________________
                  </span>
                  <br></br>
                </span>
                <span className="payment-flow-text11">$0</span>
                <div className="payment-flow-container09">
                  <span className="payment-flow-text12">Order Value</span>
                  <span className="payment-flow-text13">$10.00</span>
                </div>
                <div className="payment-flow-container10">
                  <span className="payment-flow-text14">
                    <span>Fee</span>
                    <br></br>
                  </span>
                  <span className="payment-flow-text17">$10.00</span>
                </div>
                <span className="payment-flow-text18">
                  ________________________________
                </span>
                <div className="payment-flow-container11">
                  <span className="payment-flow-text19">
                    <span>Total</span>
                    <br></br>
                  </span>
                  <span className="payment-flow-text22">$10.00</span>
                </div>
                <Link
                  to="/thankyou-for-ordering"
                  className="payment-flow-navlink button"
                >
                  Buy Now &gt;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-flow-blog-posts">
        <h1 className="payment-flow-text23 HeadingOne">
          <span>Similar Product</span>
          <br></br>
        </h1>
        <div className="payment-flow-container12">
          <BlogCard></BlogCard>
          <BlogCard rootClassName="blog-card-root-class-name2"></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard
            imageSrc="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
            rootClassName="blog-card-root-class-name"
          ></BlogCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PaymentFlow

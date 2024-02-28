import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './invoice.css'

const Invoice = (props) => {
  return (
    <div className="invoice-container">
      <Helmet>
        <title>Invoice - DevXPro</title>
        <meta property="og:title" content="Invoice - DevXPro" />
      </Helmet>
      <header data-role="Header" className="invoice-header">
        <span className="invoice-text">DevXPro</span>
      </header>
      <div className="invoice-container01">
        <div className="invoice-container02">
          <div className="invoice-container03">
            <h1 className="invoice-text01">
              <span>Invoice | Project Name</span>
              <br></br>
            </h1>
            <svg viewBox="0 0 1024 1024" className="invoice-icon">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="invoice-container04">
          <div className="invoice-container05">
            <div className="invoice-container06">
              <span className="invoice-text04">Client details</span>
              <span className="invoice-text05">Client Name</span>
              <span className="invoice-text06">Client email ID</span>
            </div>
            <div className="invoice-container07">
              <span className="invoice-text07">Billed to</span>
              <span className="invoice-text08">Your Name</span>
              <span className="invoice-text09">Your Address</span>
            </div>
            <div className="invoice-container08">
              <span className="invoice-text10">Invoice details</span>
              <span className="invoice-text11">Invoice number:</span>
              <span className="invoice-text12">
                <span className="invoice-text13">Issue date:</span>
                <br></br>
              </span>
              <span className="invoice-text15">Due date:</span>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice-blog-posts">
        <h1 className="invoice-text16 HeadingOne">
          <span>Project details</span>
          <br></br>
        </h1>
        <span className="invoice-text19">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </span>
        <div className="invoice-container09">
          <div className="invoice-container10">
            <span className="invoice-text20">Deliverables</span>
            <span className="invoice-text21">Price</span>
          </div>
          <span className="invoice-text22">
            ___________________________________________________________________________________________________________________________________
          </span>
          <div className="invoice-container11">
            <span className="invoice-text23">Deliverables #1</span>
            <span className="invoice-text24">$00.00</span>
          </div>
          <div className="invoice-container12">
            <span className="invoice-text25">Deliverables #2</span>
            <span className="invoice-text26">$00.00</span>
          </div>
          <div className="invoice-container13">
            <span className="invoice-text27">Discount</span>
            <span className="invoice-text28">$00.00</span>
          </div>
          <div className="invoice-container14">
            <span className="invoice-text29">TOTAL</span>
            <span className="invoice-text30">$00.00</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Invoice

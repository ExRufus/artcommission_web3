import React from 'react'

import PropTypes from 'prop-types'

import './transaction-history.css'

const TransactionHistory = (props) => {
  return (
    <div className="transaction-history-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="transaction-history-image"
      />
      <div className="transaction-history-container1">
        <span className="transaction-history-text">{props.text3}</span>
        <div className="transaction-history-container2">
          <span>{props.text5}</span>
          <span>{props.text6}</span>
        </div>
      </div>
      <div className="transaction-history-container3">
        <span className="transaction-history-text3">{props.text4}</span>
        <div className="transaction-history-container4">
          <span>{props.text7}</span>
          <span>{props.text8}</span>
        </div>
      </div>
      <span className="transaction-history-text6">{props.text}</span>
      <span className="transaction-history-text7">{props.text1}</span>
      <span className="transaction-history-text8">{props.text2}</span>
      <button type="button" className="transaction-history-button button">
        {props.button}
      </button>
    </div>
  )
}

TransactionHistory.defaultProps = {
  text2: 'Receive',
  text4: '21 March 2021',
  text3: 'William Madorch',
  text1: '$250 USD',
  text5: 'ID: ',
  imageSrc:
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwZW9wbGV8ZW58MHx8fHwxNzA4NTA1NTI5fDA&ixlib=rb-4.0.3&w=200',
  imageAlt: 'image',
  text6: '00000000',
  text7: 'At ',
  button: 'Details',
  text8: '00.00 AM',
  text: 'OPXXXXXXXX',
}

TransactionHistory.propTypes = {
  text2: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  button: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
}

export default TransactionHistory

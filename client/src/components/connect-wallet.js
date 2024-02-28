import React from 'react'

import PropTypes from 'prop-types'

import './connect-wallet.css'

const ConnectWallet = (props) => {
  return (
    <div className="connect-wallet-container">
      <div className="connect-wallet-container1">
        <span className="connect-wallet-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="connect-wallet-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </div>
      <div className="connect-wallet-container2">
        <div className="connect-wallet-container3">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="connect-wallet-image"
          />
          <span className="connect-wallet-text1">{props.text1}</span>
        </div>
        <div className="connect-wallet-container4">
          <img
            alt={props.imageAlt8}
            src="/external/coin98-logo-200h.png"
            className="connect-wallet-image1"
          />
          <span className="connect-wallet-text2">{props.text18}</span>
        </div>
        <div className="connect-wallet-container5">
          <img
            alt={props.imageAlt7}
            src={props.imageSrc7}
            className="connect-wallet-image2"
          />
          <span className="connect-wallet-text3">{props.text17}</span>
        </div>
      </div>
      <div className="connect-wallet-container6">
        <div className="connect-wallet-container7">
          <img
            alt={props.imageAlt9}
            src={props.imageSrc9}
            className="connect-wallet-image3"
          />
          <span className="connect-wallet-text4">{props.text19}</span>
        </div>
        <div className="connect-wallet-container8">
          <img
            alt={props.imageAlt10}
            src={props.imageSrc10}
            className="connect-wallet-image4"
          />
          <span className="connect-wallet-text5">{props.text110}</span>
        </div>
      </div>
    </div>
  )
}

ConnectWallet.defaultProps = {
  imageAlt10: 'image',
  text110: 'BitKeep',
  text17: 'WalletConnect',
  imageAlt9: 'image',
  imageSrc9: '/external/coinbase-wallet-200h.png',
  imageSrc7: '/external/wallet-connect-logo-200h.png',
  imageSrc10: '/external/bitkeep-200h.png',
  text19: 'Coinbase wallet',
  text1: 'Metamask',
  imageAlt8: 'image',
  imageAlt: 'image',
  imageAlt7: 'image',
  text18: 'Coin98',
  text: 'WalletConnect',
  imageSrc: '/external/metamask.svg',
}

ConnectWallet.propTypes = {
  imageAlt10: PropTypes.string,
  text110: PropTypes.string,
  text17: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageSrc9: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc10: PropTypes.string,
  text19: PropTypes.string,
  text1: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt7: PropTypes.string,
  text18: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ConnectWallet

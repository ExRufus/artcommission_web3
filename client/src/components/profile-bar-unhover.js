import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './profile-bar-unhover.css'

const ProfileBarUnhover = (props) => {
  return (
    <div className="profile-bar-unhover-container">
      <div className="profile-bar-unhover-container1">
        <Link
          to="/profile-other-people-how-they-see"
          className="profile-bar-unhover-navlink"
        >
          <div className="profile-bar-unhover-container2">
            <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon">
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
            <span>{props.text}</span>
          </div>
        </Link>
        <Link to="/dashboard" className="profile-bar-unhover-navlink1">
          <div className="profile-bar-unhover-dashboard">
            <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon02">
              <path d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"></path>
            </svg>
            <span>{props.text1112}</span>
          </div>
        </Link>
        <div className="profile-bar-unhover-become-seller">
          <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon04">
            <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
          </svg>
          <span>{props.text1111}</span>
        </div>
        <Link to="/add-new-freelance" className="profile-bar-unhover-navlink2">
          <div className="profile-bar-unhover-add-new-freelance">
            <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon06">
              <path d="M448 640l-96-128-74 96-54-64-74 96h298zM512 384v256q0 34-26 60t-60 26h-256q-34 0-59-26t-25-60v-256q0-34 25-60t59-26h256q34 0 60 26t26 60zM598 726v-86h340v86h-340zM938 298v86h-340v-86h340zM938 554h-340v-84h340v84z"></path>
            </svg>
            <span>{props.text111}</span>
          </div>
        </Link>
        <Link
          to="/profile-setting-and-stuff"
          className="profile-bar-unhover-navlink3"
        >
          <div className="profile-bar-unhover-setting-personal-info">
            <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon08">
              <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
            </svg>
            <span>{props.text11}</span>
          </div>
        </Link>
        <div className="profile-bar-unhover-container3">
          <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon10">
            <path d="M298 682q34 0 60 26t26 60-26 60-60 26h-128q-52 0-90-38t-38-90 38-90 90-38q90 0 120 84h8zM474 516q66 128 183 184t211 46q-58 90-152 142t-204 52q-68 0-134-22 92-52 92-150 0-54-36-101t-88-63q-66-92-176-92-46 0-84 18 0-2-1-8t-1-10q0-172 120-296t292-130q-30 46-50 100t-19 148 47 182z"></path>
          </svg>
          <span>{props.text1}</span>
        </div>
        <div className="profile-bar-unhover-container4">
          <svg viewBox="0 0 1024 1024" className="profile-bar-unhover-icon12">
            <path d="M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"></path>
          </svg>
          <span className="profile-bar-unhover-text6">{props.text12}</span>
        </div>
      </div>
    </div>
  )
}

ProfileBarUnhover.defaultProps = {
  text111: 'Add Artworks',
  text1112: 'Dashboard',
  text1111: 'Become Seller',
  text11: 'Setting',
  text: 'Profile',
  text1: 'Night Mode',
  text12: 'Log Out',
}

ProfileBarUnhover.propTypes = {
  text111: PropTypes.string,
  text1112: PropTypes.string,
  text1111: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
}

export default ProfileBarUnhover

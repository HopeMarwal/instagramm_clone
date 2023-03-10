import React from 'react'
//import style
import '../assets/scss/sidebar.scss'
//import components
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
//import profile img
import image from '../assets/img/clear_n.jpeg'


export default function Sidebar() {
  return (
    <div className='sidebar_wrap'>
      <div className='sidebar'>
        <Profile
          username="name.lname"
          caption="Name Lastname"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </div>
  )
}

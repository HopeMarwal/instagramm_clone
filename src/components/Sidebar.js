import React from 'react'
import Sticky from 'react-sticky-el'
//import style
import '../assets/scss/instagram/sidebar.scss'
//import components
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
//import profile img
import image from '../assets/clear_n.jpeg'


export default function Sidebar() {
  return (
      <Sticky topOffset={-80} scrollElement='window'>
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
      </Sticky>
  )
}

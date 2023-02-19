import React from 'react'
//import styles
import '../assets/scss/instagram/menu.scss'
//import icons
import { ReactComponent as Home } from '../assets/img/instagram/home.svg'
import { ReactComponent as Inbox } from '../assets/img/instagram/inbox.svg'
import { ReactComponent as Explore } from '../assets/img/instagram/explore.svg'
import { ReactComponent as Notifications } from '../assets/img/instagram/notifications.svg'
//import img
import Image from '../assets/img/clear_n.jpeg'
//import components
import ProfileIcon from './ProfileIcon'


export default function Menu() {
  return (
    <div className='menu'>
      <Home className='icon' />
      <Inbox className='icon' />
      <Explore className='icon' />
      <Notifications className='icon' />
      <ProfileIcon iconSize='small' image={Image} />
    </div>
  )
}

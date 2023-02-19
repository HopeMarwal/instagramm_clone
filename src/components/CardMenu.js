import React from 'react'
//import style
import '../assets/scss/instagram/cardMenu.scss'
//import svg img
import { ReactComponent as Inbox } from "../assets/img/instagram/inbox.svg";
import { ReactComponent as Comments } from "../assets/img/instagram/comments.svg";
import { ReactComponent as Notifications } from "../assets/img/instagram/notifications.svg";
import { ReactComponent as Bookmark } from "../assets/img/instagram/bookmark.svg";


export default function CardMenu() {
  return (
    <div className='cardMenu'>

      <div className='interactions'>
        <Notifications className='icon' />
        <Comments className='icon' />
        <Inbox className='icon' />
      </div>

      <Bookmark className='icon' />
    </div>
  )
}

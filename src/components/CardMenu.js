import React from 'react'
//import style
import '../assets/scss/cardMenu.scss'
//import svg img
import { ReactComponent as Inbox } from "../assets/img/inbox.svg";
import { ReactComponent as Comments } from "../assets/img/comments.svg";
import { ReactComponent as Notifications } from "../assets/img/notifications.svg";
import { ReactComponent as Bookmark } from "../assets/img/bookmark.svg";


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

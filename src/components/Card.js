import React from 'react'
//import style
import '../assets/scss/card.scss'
//import components
import Profile from './Profile'
import Comment from './Comment'
import CardMenu from './CardMenu'
//import img
import {ReactComponent as CardButton} from '../assets/img/cardButton.svg'

export default function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours
  } = props

  return (
    <div className='card'>

      <header>
        <Profile iconSize='medium' storyBorder={storyBorder} />
        <CardButton className='cardButton' />
      </header>

      <img className='cardImage' src={image} alr="card content" />

      <CardMenu />

      <div className='likedBy'>
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{' '}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>

      <div className='comments'>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          )
        })}
      </div>

      <div className='timePosted'>{hours} HOURS AGO</div>

      <div className='addComment'>
        <div className='commentText'>Add a comment...</div>
        <div className='postText'>POST</div>
      </div>
    </div>
  )
}

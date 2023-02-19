import React from 'react'
//import styles
import '../assets/scss/instagram/profileIcon.scss'

export default function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props

  let randomId = getRandomInt(1, 70)
  let profileImg = image ? image : `https://i.pravatar.cc/150?img=${randomId}`

  return (
    <div className={storyBorder ? 'storyBorder' : ''}>
      <img 
        className={`profileIcon ${iconSize}`} 
        src={profileImg}
        alt="profile" 
      />
    </div>
  )
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
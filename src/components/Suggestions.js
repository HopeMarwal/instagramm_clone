import React from 'react'
//import styles
import '../assets/scss/suggestions.scss'
//import components
import Profile from './Profile'

export default function Suggestions() {
  return (
    <div className='suggestions'>

      <div className='titleContainer'>
        <div className='title'>Suggestions for you</div>
        <a href="/">See all</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />

    </div>
  )
}

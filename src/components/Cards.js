import React from 'react'
//import style
import '../assets/scss/instagram/cards.scss'
//import data
import cards from '../data/comments'
//import components
import Stories from './Stories'
import Card from './Card'

export default function Cards() {

  return (
    <div className='cards'>

      <Stories />
      {
        cards.map((card, index) => {
          return (
            <Card
              key={index}
              accountNam={card.accountName}
              storyBorder={true}
              image={card.image}
              comments={card.comments}
              likedByText={card.liked.text}
              likedByNumber={card.liked.number}
              hours={card.hours}
            />
          )
        })
      }

    </div>
  )
}

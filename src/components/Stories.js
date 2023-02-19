import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
//import style
import '../assets/scss/stories.scss'
//import components
import Story from './Story'


export default function Stories() {
  return (
    <div className='stories'>
      <HorizontalScroll className='scroll' reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  )
}

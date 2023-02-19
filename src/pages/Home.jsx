import React from 'react'
//import style
import '../assets/scss/instagram.scss'
//import components
import Navigation from '../components/Navigation'
import Cards from '../components/Cards'
import Sidebar from '../components/Sidebar'

export default function InstagramClone() {
  return (
    <div className='instagram'>
      <Navigation />
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

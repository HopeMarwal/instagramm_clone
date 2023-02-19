import React from 'react'
//import style
import '../assets/scss/instagram/instagram.scss'
//import components
import Navigation from '../components/instagram/Navigation'
import Cards from '../components/instagram/Cards'
import Sidebar from '../components/instagram/Sidebar'

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

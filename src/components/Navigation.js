import React from 'react';
//import styles
import '../assets/scss/navigation.scss'
//import img
import logo from '../assets/img/instagramLogo.png'
import searchIcon from '../assets/img/searchIcon.png'
//import components
import Menu from './Menu';



export default function Navigation() {
  return (
    <div className='navigation'>

      <div className='container'>

        <img className='logo' src={logo} alt="instagram logo" />

        <div className='search'>
          <img className=' searchIcon' src={searchIcon} alt="search icon" />
          <span className='searchText'>Search</span>
        </div>
        <Menu />
      </div>

    </div>
  )
}

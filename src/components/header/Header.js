import React from 'react'
import './Header.css'
import milogo from '../images/download.png'
import search from '../images/search_FILL0_wght400_GRAD0_opsz24.svg'
import person from '../images/person_FILL0_wght400_GRAD0_opsz24.svg'


function Header() {
  return (
    <div className='container'>
        <div className="navbar">
          <div className="navlogo">
            <ul>
              <img src={milogo} alt="" />
              <li><a href="">Phone</a></li>
              <li><a href="">Smart home</a></li>
              <li><a href="">Life style</a></li>
            </ul>
          </div>
          <div className="navlist">
            <ul>
              <li><a href="">Discover</a></li>
              <li><a href="">Support</a></li>
              <img src={search} alt="" />
              <img src={person} alt="" />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header
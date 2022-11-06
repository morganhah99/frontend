import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
            <div className='header__right'>
                <button a href="" >My Tickets</button>
                <button a href="" >Sell</button>
                <button a href="" >Create Event</button>
            </div>
            <div className='header__left'>
            <button a href="" >Concert</button>
            <button a href="" >Concert</button>
            <button a href="" >Concert</button>
            </div>
    </div>
  )
}

export default Header
import React from 'react'
import style from './navigation.module.css';
const Navigation = () => {
  return (
    <>
    <nav className={`${style.nav} section-p `}>
        <div className='logo'>
        <img src='/image/logo.png'/>
        </div>
        <ul className={`${style.ul}`}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
    )
}

export default Navigation
import React from 'react';
import './Header.css';
import imageLogo from './Images/logo.png'
import {Link} from 'react-router-dom'
import SingIn from './SingIn';



function Header() {
  return (
    <div className='header'>
        <div className="header-nav">
        <Link to='/' ><img className='logo' src={imageLogo} alt="logo"/></Link>

            <div className='header-btn'> 
                <button className='language-btn'>
                    <select value="">
                         <option>English</option>
                          <option>Portugues</option>
                          <option>Spanish</option>
                         <option>French</option>
                         <option>Russian</option>
                    </select>
                </button>
                <Link to='/sign-in'><button className='sign-in-btn'>Sign In</button></Link>
            </div> 
        </div>

        <div className='header-body'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <form className='email-signup'>
                <input type="email" name="" id="" placeholder='Email Adress' required/>
                <button className='gret-started-btn' type='submit'>Get Started</button>
            </form>


        </div>
      
    </div>
  )
}

export default Header

import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <a className="ll" href="#">Questions? Contact us.</a>

        <div className="row">
            <div className="col">
                <a href="#">FAQ</a>
                <a href="#">Media Center</a>
                <a href="#">Ways to Watch</a>
                <a href="#">Cookie Preferences</a>
                <a href="#">Speed Test</a>
            </div>

            <div className="col">
                <a href="#">Help Center</a>
                <a href="#">
                    Investor Relations</a>
                <a href="#">Terms of Use</a>
                <a href="#">
                    Corporate Information</a>
                <a href="#">
                    Legal Notices</a>
            </div>

            <div className="col">
                <a href="#">Account</a>
                <a href="#">
                    Jobs</a>
                <a href="#">
                    Privacy</a>
                <a href="#">Contact Us</a>
                <a href="#">Only on Netflix</a>
            </div>
        </div>

        <div className='btn'>
            <button className='language-btn'>
                    <select value="">
                         <option>English</option>
                          <option>Portugues</option>
                          <option>Spanish</option>
                         <option>French</option>
                         <option>Russian</option>
                    </select>
                </button>
        </div>

        <p>Netflix Angola</p>
    </div>
  )
}

export default Footer

import React from 'react'
import '../Styles/Home.sass'
import '../Styles/Home1.sass'
import { Link } from 'react-router-dom'
import Profile1 from '../Components/Profile1'



const Home = () => {
  return (
    <div id='boddy'>
      
        <nav className='nav'>
          <div className='links-container'>

            <div className='sep'>
         
            <div className='links'>
              <Link to={'/'}>HOME</Link>
            </div>
                
            <div className="links">
              <Link to='/profile'>PROFILE</Link>
            </div>
                
            <div className="links">
              <Link to="/experience">EXPERIENCE</Link>
            </div>
            <div className="links">
              <Link to="/education">EDUCATION</Link>
            </div>

            <div className="links">
              <Link to='/skils'>SKILS</Link>
            </div>

            </div>
            
 

          </div>

        </nav>
      
      


      <div className='body-page'>
        <div className='body-page-container'>
          <Profile1/>
        </div>

      </div>



    </div>
  )
}

export default Home

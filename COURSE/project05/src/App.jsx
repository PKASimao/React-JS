
import './App.css'
import Faq from './Components/Faq'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SingIn from './Components/SingIn'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Header/>}/>
          <Route path='/sign-in' element={<SingIn/>}/>
        </Routes>
        <Feature/>
        <Faq/>
        <Footer/>
      </Router>


     
    </>
  )
}

export default App

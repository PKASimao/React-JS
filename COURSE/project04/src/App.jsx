import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';



function App() {
  
  return (
   <div className="App">

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </BrowserRouter>
    
     

   </div>
  )
}

export default App;

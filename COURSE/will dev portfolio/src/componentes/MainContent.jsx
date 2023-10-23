import React from 'react'

import '../Styles/componentes/mainContent.sass';
import ProjectContainer from './ProjectContainer';
import TecnologContainer from './TecnologContainer';
import AboutContainer from './AboutContainer';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TecnologContainer/>
      <ProjectContainer/>
      
    </main>
  )
}

export default MainContent

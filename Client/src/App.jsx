import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import CustomErrorPage from './Pages/CustomErrorPage'
import JoinCommunity from './Pages/JoinCommunity'
import Project_submission from './Pages/Project_submission'

// Import the new project page components
import Kgslar from './Pages/Kgslar'
import Kgcar from './Pages/Kgcar'
import Kgaps from './Pages/Kgaps'
import Kgbites from './Pages/Kgbites'
import Pyexpowebsite from './Pages/Pyexpowebsite'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='*' element={<CustomErrorPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/join-community" element={<JoinCommunity />} />
          <Route path="/project-submission" element={<Project_submission />} />
          
          {/* New project routes */}
          <Route path="/kgslar" element={<Kgslar />} />
          <Route path="/kgcar" element={<Kgcar />} />
          <Route path="/kgaps" element={<Kgaps />} />
          <Route path="/kgbites" element={<Kgbites />} />
          <Route path="/pyexpowebsite" element={<Pyexpowebsite />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
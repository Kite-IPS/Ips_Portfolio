import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import CustomErrorPage from './Pages/CustomErrorPage'
import JoinCommunity from './Pages/CommunityInteraction/JoinCommunity'
import Project_submission from './Pages/CommunityInteraction/ProjectSubmission'

// Import the new project page components
import Kgslar from './Pages/Projects/Kgslar'
import Kgcar from './Pages/Projects/Kgcar'
import Kgaps from './Pages/Projects/Kgaps'
import Kgbites from './Pages/Projects/Kgbites'
import Pyexpowebsite from './Pages/Projects/Pyexpowebsite'

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
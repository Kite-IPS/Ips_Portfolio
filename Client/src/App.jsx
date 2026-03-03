import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import CustomErrorPage from './Pages/CustomErrorPage'
import JoinCommunity from './Pages/CommunityInteraction/JoinCommunity'
import Project_submission from './Pages/CommunityInteraction/ProjectSubmission'
import Internship from './Pages/CommunityInteraction/Internship'

// Import the new project page components
import Kgslar from './Pages/Projects/Kgslar'
import Kgcar from './Pages/Projects/Kgcar'
import Kgaps from './Pages/Projects/Kgaps'
import Kgbites from './Pages/Projects/Kgbites'
import Pyexpowebsite from './Pages/Projects/Pyexpowebsite'
import IqacPortal from './Pages/Projects/IqacPortal'
import FacultyAppraisalSystem from './Pages/Projects/FacultyAppraisalSystem'
import TaskScheduler from './Pages/Projects/TaskScheduler'
import RecordGenerator from './Pages/Projects/RecordGenerator'
import GateEPassSystem from './Pages/Projects/GateEPassSystem'
import LetterGenerator from './Pages/Projects/LetterGenerator'
import EduManageCFaculties from './Pages/Projects/EduManageCFaculties'
import IssueAddressPortal from './Pages/Projects/IssueAddressPortal'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='*' element={<CustomErrorPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/join-community" element={<JoinCommunity />} />
          <Route path="/project-submission" element={<Project_submission />} />
          <Route path="/internship" element={<Internship />} />
          
          {/* New project routes */}
          <Route path="/kgslar" element={<Kgslar />} />
          <Route path="/kgcar" element={<Kgcar />} />
          <Route path="/kgaps" element={<Kgaps />} />
          <Route path="/kgbites" element={<Kgbites />} />
          <Route path="/pyexpowebsite" element={<Pyexpowebsite />} />
          <Route path="/iqacportal" element={<IqacPortal />} />
          <Route path="/facultyappraisalsystem" element={<FacultyAppraisalSystem />} />
          <Route path="/taskscheduler" element={<TaskScheduler />} />
          <Route path="/recordgenerator" element={<RecordGenerator />} />
          <Route path="/gateepasssystem" element={<GateEPassSystem />} />
          <Route path="/lettergenerator" element={<LetterGenerator />} />
          <Route path="/edumanagecfaculties" element={<EduManageCFaculties />} />
          <Route path="/issueaddressportal" element={<IssueAddressPortal />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import JoinCommunity from './Pages/JoinCommunity'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/join-community" element={<JoinCommunity />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
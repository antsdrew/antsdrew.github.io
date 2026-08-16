import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

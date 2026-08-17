import { Link } from 'react-router-dom'
import ApertureMark from './ApertureMark.jsx'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/#top" className="brand">
          <ApertureMark size={22} ticks={6} />
          Andrew
        </Link>
        <nav>
          <Link to="/#about">About</Link>
          <Link to="/#education">Education</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#certifications">Certifications</Link>
          <Link to="/#involvements">Involvements</Link>
          <Link to="/#awards">Awards</Link>
          <Link to="/#contact">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-resume">Resume</a>
        </nav>
      </div>
    </header>
  )
}

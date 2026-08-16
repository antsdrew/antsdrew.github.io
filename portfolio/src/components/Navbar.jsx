import ApertureMark from './ApertureMark.jsx'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="brand">
          <ApertureMark size={22} ticks={6} />
          Andrew
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-resume">Resume</a>
        </nav>
      </div>
    </header>
  )
}

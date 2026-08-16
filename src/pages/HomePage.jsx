import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import Certifications from '../components/Certifications.jsx'
import Involvements from '../components/Involvements.jsx'
import Awards from '../components/Awards.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Involvements />
      <Awards />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon } from './Icons.jsx'
import Typewriter from './Typewriter.jsx'
import andrewPhoto from '../assets/images/andrewphoto.jpg'

const roles = [
  'Software Engineer',
  'AI & Computer Vision',
  'Embedded Systems',
  'Accessibility Tech',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Hello, I'm</span>
          <h1>Andrew Pheng Qi Jinn</h1>
          <p className="role-line">
            <Typewriter phrases={roles} />
          </p>

          <div className="social-row">
            <a href="https://github.com/antsdrew" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://linkedin.com/in/andrewphengqijinn" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="mailto:andrewwwpqj@gmail.com" aria-label="Email"><MailIcon /></a>
          </div>

          <p className="lead">
            I build AI-integrated systems that hold up outside a notebook — from computer
            vision running on embedded hardware to a wearable assistive device for visually
            impaired users that's won national recognition.
          </p>

          <div className="actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowIcon />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">Resume</a>
          </div>
        </div>

        <div className="hero-mark">
          <img src={andrewPhoto} alt="Andrew Pheng Qi Jinn" className="hero-photo" />
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  )
}

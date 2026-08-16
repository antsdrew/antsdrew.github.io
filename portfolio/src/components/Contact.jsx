import SectionHead from './SectionHead.jsx'

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <SectionHead eyebrow="Contact" title="Let's talk" counterName="section-contact" />
        <p style={{ color: 'var(--muted)', maxWidth: 480 }}>
          Open to software engineering and AI-related roles. Reach out through any of these.
        </p>
        <div className="contact-links">
          <a href="mailto:andrewwwpqj@gmail.com">Email</a>
          <a href="https://linkedin.com/in/andrewphengqijinn" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/antsdrew" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

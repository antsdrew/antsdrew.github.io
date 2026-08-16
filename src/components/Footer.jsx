import ViewBadge from './ViewBadge.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} Andrew Pheng Qi Jinn · Built with React &amp; Vite</span>
        <ViewBadge name="total-site-views" label="total views" immediate />
      </div>
    </footer>
  )
}

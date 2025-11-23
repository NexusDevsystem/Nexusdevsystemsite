import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import ProductPage from './components/ProductPage'
import DownloadPage from './components/DownloadPage'
import BlogPage from './components/BlogPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import FaqPage from './components/FaqPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <ParticlesBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <div className="container" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Looton, seu radar de ofertas de gamers e hardware</h1>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                  <Link to="/download" className="download-btn-link">
                    <button className="download-android-btn">Download for Android</button>
                  </Link>
                  <Link to="/produto" className="learn-more-btn-link">
                    <button className="learn-more-btn">Saiba mais</button>
                  </Link>
                </div>
              </div>
            } />
            <Route path="/produto" element={<ProductPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <footer className="simple-footer">
          <div className="footer-content">
            <div className="footer-info">
              <p>&copy; {new Date().getFullYear()} Nexus Dev System. Todos os direitos reservados.</p>
              <p>Email de suporte: nexusdevsystem@gmail.com</p>
            </div>
            <div className="footer-links">
              <Link to="/">Início</Link>
              <Link to="/produto">Produto</Link>
              <Link to="/download">Download</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/privacy-policy">Política de Privacidade</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

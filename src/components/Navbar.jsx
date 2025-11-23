import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import nexusLogo from '../assets/logos/faviconpreto.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-left">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img
                        src={nexusLogo}
                        alt="Nexus Dev System Logo"
                        className="logo-icon"
                    />
                </Link>
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`navbar-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>Início</Link>
                <Link to="/produto" className="nav-link" onClick={closeMobileMenu}>Produto</Link>
                <Link to="/blog" className="nav-link" onClick={closeMobileMenu}>Blog</Link>
                <div className="nav-link dropdown">
                    Recursos
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                    <div className="dropdown-menu">
                        <Link to="/faq" className="dropdown-link" onClick={closeMobileMenu}>FAQ</Link>
                        <Link to="/privacy-policy" className="dropdown-link" onClick={closeMobileMenu}>Política de Privacidade</Link>
                    </div>
                </div>
                <Link to="/download" className="nav-link mobile-download" onClick={closeMobileMenu}>
                    Download
                </Link>
            </div>

            <div className="navbar-right">
                <Link to="/download" className="nav-link desktop-download" onClick={closeMobileMenu}>
                    Download
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const mainLinks = [
    { to: 'home', label: 'Início' },
    { 
      label: 'Produto', 
      submenu: [
        { to: 'about', label: 'Sobre' },
        { to: 'features', label: 'Recursos' },
        { to: 'screenshots', label: 'Telas' },
        { to: 'how-it-works', label: 'Como Funciona' }
      ]
    },
    { 
      label: 'Mais', 
      submenu: [
        { to: 'for-whom', label: 'Para Quem' },
        { to: 'differences', label: 'Diferenciais' },
        { to: 'privacy', label: 'Privacidade' },
        { to: 'roadmap', label: 'Atualizações' }
      ]
    },
    { to: 'download', label: 'Download' }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-shadow
        ${scrolled
          ? 'backdrop-blur-md bg-primary/80 shadow-md'
          : 'backdrop-blur-md bg-primary/60'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img
            src="/nexuslogo.png"
            alt="Looton - Radar de Ofertas Gamer"
            className="h-14 md:h-16 lg:h-20"
          />
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex space-x-6">
          {mainLinks.map((link, index) => (
            <li 
              key={index}
              className="relative"
              onMouseEnter={() => setDropdownOpen(index)}
            >
              {link.submenu ? (
                <>
                  <button className="cursor-pointer px-2 py-1 text-white hover:text-secondary transition flex items-center cursor-hover">
                    <span className="flex items-center h-full">{link.label}</span>
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-200 mt-0.5" 
                      style={{ transform: dropdownOpen === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {dropdownOpen === index && (
                    <ul 
                      className="absolute left-0 mt-2 w-48 bg-primary/90 backdrop-blur-md rounded-md py-2 z-50 border border-secondary/30"
                      onMouseEnter={() => setDropdownOpen(index)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {link.submenu.map((sublink, subindex) => (
                        <li key={subindex} className="py-1">
                          <Link
                            to={sublink.to}
                            spy
                            smooth
                            offset={-80}
                            duration={500}
                            className="block px-4 py-1 text-white hover:text-accent transition"
                            activeClass="text-accent"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer px-2 py-1 text-white hover:text-secondary transition flex items-center cursor-hover"
                  activeClass="text-secondary border-b-2 border-secondary"
                >
                  <span className="flex items-center h-full">{link.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* botão mobile (2 barras → X) */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative focus:outline-none"
          onClick={() => setOpen(o => !o)}
        >
          {/* Linha superior */}
          <span
            className={`
              block absolute h-0.5 w-6 bg-white transition-transform duration-300
              ${open ? 'rotate-45' : '-translate-y-1.5'}
            `}
          />
          {/* Linha inferior */}
          <span
            className={`
              block absolute h-0.5 w-6 bg-white transition-transform duration-300
              ${open ? '-rotate-45' : 'translate-y-1.5'}
            `}
          />
        </button>
      </div>

      {/* menu móvel */}
      <div
        className={`
          md:hidden
          backdrop-blur-md bg-primary/60
          transition-max-height duration-300 ease-in-out overflow-y-auto
          ${open ? 'max-h-[70vh]' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col px-4 pb-4 space-y-2 max-h-[65vh] overflow-y-auto">
          {mainLinks.flatMap((link, index) => {
            if (link.submenu) {
              return [
                <li key={index} className="py-2 font-semibold text-accent">
                  {link.label}
                </li>,
                ...link.submenu.map((sublink, subindex) => (
                  <li key={`sub-${index}-${subindex}`} className="pl-4">
                    <Link
                      to={sublink.to}
                      spy
                      smooth
                      offset={-80}
                      duration={500}
                      className="block py-2 text-white hover:text-secondary transition"
                      activeClass="text-secondary font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))
              ]
            } else {
              return (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    className="block py-2 text-white hover:text-secondary transition"
                    activeClass="text-secondary font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </nav>
  )
}

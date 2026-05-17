'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="#inicio" onClick={closeMenu}>
          <Image src="/logo.svg" alt="NodoGamer" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '32px' }} />
          <span className="navbar-name">NodoGamer</span>
        </Link>

        <button
          className={`navbar-burger ${menuOpen ? 'is-active' : ''}`}
          aria-label="menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
          <a className="navbar-item" href="#quienes-somos" onClick={closeMenu}>Quiénes somos</a>
          <a className="navbar-item" href="#servicios" onClick={closeMenu}>Servicios</a>
          <a className="navbar-item" href="#planes" onClick={closeMenu}>Planes</a>
          <a
            className="navbar-item navbar-cta"
            href="https://wa.me/5491111111111?text=Hola!%20Quiero%20info%20sobre%20el%20hosting"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  )
}

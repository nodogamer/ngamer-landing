'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUserMenuOpen(false)
    router.refresh()
  }

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

          {user ? (
            <div className="navbar-user" ref={userMenuRef}>
              <button
                className="navbar-user-btn"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                aria-expanded={userMenuOpen}
              >
                <span className="navbar-user-avatar">{user.email?.[0].toUpperCase()}</span>
                <span className="navbar-user-chevron">{userMenuOpen ? '▴' : '▾'}</span>
              </button>
              {userMenuOpen && (
                <div className="navbar-user-menu">
                  <span className="navbar-user-email">{user.email}</span>
                  <button className="navbar-user-item" onClick={handleSignOut}>
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link className="navbar-item navbar-login" href="/login" onClick={closeMenu}>
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Services',  href: '/services' },
  { label: 'About',     href: '/about' },
  { label: 'Partners',  href: '/partners' },
  { label: 'Contact',   href: '/contact' },
]

function EverguardLogo() {
  return (
    <Link href="/" aria-label="Everguard Group — Home" className="flex items-center gap-3">
      {/* Shield icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M14 2L4 6.5V13.5C4 19.2 8.4 24.6 14 26C19.6 24.6 24 19.2 24 13.5V6.5L14 2Z" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14L12.5 16.5L18 11" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 800, fontSize: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap' }}>
        <span style={{ color: '#FFFFFF' }}>EVER</span>
        <span style={{ color: '#C9A84C' }}>GUARD</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,13,24,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <EverguardLogo />

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-150 group"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)' }}
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" style={{ background: '#C9A84C' }} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact" className="btn-primary text-sm" style={{ padding: '9px 20px' }}>
              Enquire Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.7)', background: mobileOpen ? 'rgba(201,168,76,0.1)' : 'transparent' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.svg key="close" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
                  initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.15 }}>
                  <path d="M3 3L15 15M15 3L3 15" />
                </motion.svg>
              ) : (
                <motion.svg key="menu" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
                  initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -45 }} transition={{ duration: 0.15 }}>
                  <path d="M2 4.5H16M2 9H16M2 13.5H16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ background: 'rgba(6,13,24,0.98)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="px-6 py-5">
              <nav className="space-y-0.5" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: i * 0.04 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-sm font-medium border-b"
                      style={{ color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.3 }}>
                        <path d="M3 7H11M7 3L11 7L7 11" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div className="pt-5" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: navLinks.length * 0.04 + 0.05 }}>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary block w-full text-sm font-semibold text-center" style={{ padding: '14px 22px' }}>
                  Enquire Now
                </Link>
              </motion.div>
              <motion.div className="pt-5 flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.3 }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 6px rgba(201,168,76,0.8)', flexShrink: 0 }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Licensed investigators across Australia</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

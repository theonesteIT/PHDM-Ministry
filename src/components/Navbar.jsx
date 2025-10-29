import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-lg">
        <nav className="container-xl flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="PHDM Church" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">PHD Ministry</span>
              <p className="text-xs text-brandYellow">Prayer • Healing • Discipleship</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/team', label: 'Team' },
              { to: '/news', label: 'News' },
              { to: '/events', label: 'Events' },
              { to: '/give', label: 'Support' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${isActive ? 'text-brandYellow bg-brandYellow/10' : 'text-white hover:text-brandYellow hover:bg-white/10'}`}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{label}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/20 to-brandYellow/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="group inline-flex items-center justify-center rounded-xl p-3 text-white hover:bg-white/10 transition-all duration-300 md:hidden relative overflow-hidden"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/20 to-brandYellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </nav>
        <div className="h-1 w-full bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
      </header>

      {/* Left Side Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-r border-white/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="PHDM Church" className="h-8 w-auto" />
                <span className="text-lg font-bold text-white">PHD Ministry</span>
              </div>
              <button
                onClick={closeModal}
                className="group p-2 text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                aria-label="Close menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/20 to-brandYellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-4">
                {[
                  { to: '/', label: 'Home', icon: '🏠' },
                  { to: '/about', label: 'About', icon: 'ℹ️' },
                  { to: '/team', label: 'Team', icon: '👥' },
                  { to: '/news', label: 'News', icon: '📰' },
                  { to: '/events', label: 'Events', icon: '📅' },
                  { to: '/give', label: 'Support', icon: '💝' },
                  { to: '/contact', label: 'Contact', icon: '📞' },
                ].map(({ to, label, icon }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={closeModal}
                      className={({ isActive }) => `group flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                        isActive 
                          ? 'text-brandYellow bg-brandYellow/10 border-l-4 border-brandYellow' 
                          : 'text-white hover:text-brandYellow hover:bg-white/10'
                      }`}
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                          <span className="relative z-10">{label}</span>
                          {!isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/10 to-brandYellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Support Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <NavLink 
                  to="/give" 
                  onClick={closeModal}
                  className="group relative overflow-hidden bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange text-black font-bold px-8 py-5 rounded-2xl w-full text-center block hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-brandYellow/40 border-2 border-transparent hover:border-brandYellow/30"
                >
                  {/* Animated background elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brandYellow to-brandOrange opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full group-hover:scale-150 transition-all duration-500 delay-100"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                    <span className="group-hover:rotate-12 transition-transform duration-300 text-2xl">💝</span>
                    <span className="group-hover:tracking-wide transition-all duration-300">Support Ministry</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl">→</span>
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </NavLink>
              </div>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <p className="text-xs text-white/60 text-center">
                Prayer • Healing • Discipleship
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar



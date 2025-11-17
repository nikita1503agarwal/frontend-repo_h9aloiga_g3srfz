import { Link, NavLink } from 'react-router-dom'
import { Shield, LogIn } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/what-we-protect', label: 'What We Protect' },
  { to: '/why-salus', label: 'Why Choose SALUS' },
  { to: '/k9-division', label: 'K9 Division' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-semibold tracking-wider">SALUS Security</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#client-portal"
              className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30 hover:bg-emerald-500/30 transition"
              aria-label="Client Portal"
            >
              <LogIn className="w-4 h-4" /> Client Portal
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

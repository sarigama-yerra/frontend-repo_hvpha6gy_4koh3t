import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">W3Dev</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm hover:text-blue-600 transition ${isActive ? 'text-blue-600' : 'text-slate-700'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `py-2 text-sm ${isActive ? 'text-blue-600' : 'text-slate-700'}`}>{n.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

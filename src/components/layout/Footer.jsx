import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold text-lg">W3Dev</div>
          <p className="text-sm text-slate-600 mt-2">Product engineering studio building custom platforms, APIs and internal tools.</p>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>About</li>
            <li>Projects</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Contact</div>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Email: hello@w3dev.co.za</li>
            <li>Phone: +27 10 123 4567</li>
            <li>Johannesburg, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-slate-100">© {new Date().getFullYear()} W3Dev. All rights reserved.</div>
    </footer>
  );
}

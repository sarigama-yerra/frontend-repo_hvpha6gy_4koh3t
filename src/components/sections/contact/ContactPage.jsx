import React from 'react';
import PageTransition from '../../animations/PageTransition';

export default function ContactPage(){
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">Tell us about your project. We typically respond within one working day.</p>
        <form className="mt-8 grid gap-4 max-w-xl">
          <input className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" placeholder="Full name" />
          <input className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" placeholder="Email" type="email" />
          <textarea className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" placeholder="Project details" rows={6} />
          <button type="button" className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-500 transition-transform hover:-translate-y-0.5">Send</button>
        </form>
        <div className="mt-10">
          <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Book a call via Calendly</a>
        </div>
      </div>
    </PageTransition>
  );
}

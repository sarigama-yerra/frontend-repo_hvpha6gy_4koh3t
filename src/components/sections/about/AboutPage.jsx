import React from 'react';
import PageTransition from '../../animations/PageTransition';

export default function AboutPage(){
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">We’re a South African engineering studio focused on complex systems. We partner long-term, favour clarity and ship quality.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-slate-200 rounded-xl bg-white">
            <div className="font-medium">Philosophy</div>
            <p className="mt-2 text-sm text-slate-600">Strong fundamentals, boring tech where it matters, innovation where it counts.</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl bg-white">
            <div className="font-medium">Approach</div>
            <p className="mt-2 text-sm text-slate-600">Tight feedback loops, clear scopes, measurable outcomes.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

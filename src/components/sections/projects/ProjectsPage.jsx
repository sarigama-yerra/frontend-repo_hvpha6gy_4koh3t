import React from 'react';
import PageTransition from '../../animations/PageTransition';
import { Link } from 'react-router-dom';
import { projects } from '../../../lib/getProjects';

export default function ProjectsPage(){
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">A few examples from the types of systems we build.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link to={`/projects/${p.slug}`} key={p.slug} className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition block">
              <div className="h-40 bg-slate-100" style={{backgroundImage:`url(${p.featuredImage})`, backgroundSize:'cover', backgroundPosition:'center'}} />
              <div className="p-4">
                <div className="font-medium group-hover:text-blue-600 transition">{p.title}</div>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.slice(0,3).map(t => <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

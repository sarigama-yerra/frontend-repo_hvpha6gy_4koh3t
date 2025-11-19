import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../../animations/PageTransition';
import { getProjectBySlug } from '../../../lib/getSingleProject';

export default function ProjectDetailPage(){
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if(!project){
    return (
      <PageTransition>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/projects" className="text-blue-600 underline mt-4 inline-block">Back to projects</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map(t => <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{t}</span>)}
        </div>
        <div className="mt-10 grid gap-8">
          {project.sections.map((s, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-medium">{s.heading}</h2>
              <p className="mt-2 text-slate-700">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

import React from 'react';
import PageTransition from '../../animations/PageTransition';

const services = [
  {
    title: 'Custom Web Apps',
    desc: 'End-to-end product builds with Next.js, Node, and robust data architectures.'
  },
  {
    title: 'SaaS Development',
    desc: 'Subscription platforms with auth, billing, tenant isolation and scale.'
  },
  {
    title: 'API Development',
    desc: 'REST and GraphQL APIs with clean contracts, documentation and observability.'
  },
  {
    title: 'Automation & Integrations',
    desc: 'Glue systems together with resilient workflows across Slack, Stripe, Zapier and more.'
  },
  {
    title: 'Dashboards & Internal Systems',
    desc: 'Operational dashboards, admin portals and data pipelines for teams.'
  },
  {
    title: 'Multi-Tenant Platforms',
    desc: 'Architectures for multi-tenant SaaS with data partitioning and performance.'
  },
];

export default function ServicesPage(){
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">We’re a product engineering studio. We ship reliable software for complex problems.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 border border-slate-200 rounded-xl bg-white hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-blue-600 text-sm">{s.title}</div>
              <div className="mt-2 font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

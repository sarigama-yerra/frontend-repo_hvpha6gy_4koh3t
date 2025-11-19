import React from 'react';
import PageTransition from '../../animations/PageTransition';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20">
          <motion.h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            We build custom web apps that solve real problems.
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            W3Dev specialises in Next.js platforms, internal systems, dashboards, APIs and multi-tenant apps.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-500 transition-transform hover:-translate-y-0.5">Start a Project</Link>
            <Link to="/services" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:border-slate-400 hover:bg-slate-50 transition">View Services</Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {['Custom Web Apps','SaaS Development','APIs & Integrations','Automation','Dashboards','Multi-tenant Platforms'].map((t) => (
            <div key={t} className="group p-6 border border-slate-200 rounded-xl bg-white hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-sm text-blue-600">Service</div>
              <div className="mt-2 font-medium">{t}</div>
              <p className="mt-2 text-sm text-slate-600">We design and deliver robust systems tailored to your business.</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

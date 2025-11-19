import React from 'react';
import PageTransition from '../animations/PageTransition';
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-semibold">404</h1>
        <p className="mt-2 text-slate-600">That page doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-block px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-500">Back home</Link>
      </div>
    </PageTransition>
  );
}

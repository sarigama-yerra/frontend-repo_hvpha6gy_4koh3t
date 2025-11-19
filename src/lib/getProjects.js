export const projects = [
  {
    title: 'Abacus Platform',
    slug: 'abacus-platform',
    description: 'Multi-tenant communication and reporting system.',
    tags: ['Next.js', 'PHP APIs', 'MySQL', 'Vercel'],
    featuredImage: '/images/placeholders/abacus.jpg',
    sections: [
      { heading: 'The Problem', content: 'Legacy processes, fragmented data, poor visibility across tenants.' },
      { heading: 'The Solution', content: 'Unified platform with tenant isolation, role-based access and real-time reporting.' },
      { heading: 'Tech Stack', content: 'Next.js App Router, Node/Express, PHP bridges, MySQL, Redis, Vercel, Fly.io' },
      { heading: 'Outcome', content: 'Operational efficiency up 35%, support requests down 40%.' }
    ]
  },
  {
    title: 'Ledger Ops',
    slug: 'ledger-ops',
    description: 'Automation suite for finance ops and reconciliations.',
    tags: ['Next.js', 'PostgreSQL', 'BullMQ', 'Stripe'],
    featuredImage: '/images/placeholders/ledger.jpg',
    sections: [
      { heading: 'The Problem', content: 'Manual reconciliations and brittle spreadsheets.' },
      { heading: 'The Solution', content: 'Automated pipelines with robust audit trails and reporting.' },
      { heading: 'Tech Stack', content: 'Next.js, Node, Postgres, Redis, Stripe API' },
      { heading: 'Outcome', content: 'Processing time reduced from days to minutes.' }
    ]
  },
  {
    title: 'Nimbus Dash',
    slug: 'nimbus-dash',
    description: 'Executive dashboards and KPI observability.',
    tags: ['Next.js', 'ClickHouse', 'Railway', 'Framer Motion'],
    featuredImage: '/images/placeholders/nimbus.jpg',
    sections: [
      { heading: 'The Problem', content: 'Leaders lacked a single source of truth.' },
      { heading: 'The Solution', content: 'Interactive dashboards with realtime cues and alerts.' },
      { heading: 'Tech Stack', content: 'Next.js, Tailwind, ClickHouse, Kafka' },
      { heading: 'Outcome', content: 'Faster decision-making and transparent performance.' }
    ]
  }
];

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Clock, FileText, Search, CheckCircle, Phone, Mail, ArrowRight, Lock, Award, Users, Eye, Cpu, Scale, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Everguard Group — Licensed Investigations & Intelligence | Australia',
  description:
    'Licensed private investigators and intelligence specialists for insurance companies, law firms, and corporate clients across Australia. Professional, discreet, and court-ready.',
  keywords: 'private investigators Australia, insurance investigations, workers compensation fraud, surveillance, litigation support, court-ready reports, fraud investigations',
  openGraph: {
    title: 'Everguard Group — Licensed Investigations & Intelligence',
    description: 'Licensed investigators across Australia. Professional, discreet, and court-ready for insurers, law firms, and corporate clients.',
    type: 'website',
    locale: 'en_AU',
  },
}

const services = [
  {
    icon: <Shield size={22} />,
    title: 'Insurance Investigations',
    description: 'Comprehensive investigation services for claims managers and fraud teams. We verify, document, and report — so your team can make defensible decisions.',
    href: '/services#insurance',
  },
  {
    icon: <Search size={22} />,
    title: 'Surveillance & Activity Checks',
    description: 'Covert mobile surveillance, activity monitoring, and evidence capture. All conducted by licensed operatives with full chain of custody documentation.',
    href: '/services#surveillance',
  },
  {
    icon: <FileText size={22} />,
    title: 'Litigation Support',
    description: 'Court-ready reports, witness statements, and evidence packages prepared to the standard required by Australian courts and tribunals.',
    href: '/services#litigation',
  },
  {
    icon: <Users size={22} />,
    title: 'Workers Compensation Fraud',
    description: 'Targeted investigations into fraudulent or exaggerated workers compensation claims. Protect your scheme and your premium pool.',
    href: '/services#workers-comp',
  },
  {
    icon: <Lock size={22} />,
    title: 'Corporate Intelligence',
    description: 'Due diligence, background investigations, and corporate intelligence for risk managers and executive teams. Discreet. Thorough. Documented.',
    href: '/services#corporate',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Digital Forensics',
    description: 'Electronic evidence collection, cybercrime investigation, and digital forensics to support fraud and insurance claims requiring technical analysis.',
    href: '/services#digital',
  },
]

const audiences = [
  {
    title: 'Insurance Companies',
    description: 'Claims managers, fraud teams, and TP/legal departments trust Everguard for investigations that hold up under scrutiny.',
    cta: 'Learn about insurance partnerships',
    href: '/partners',
    badge: 'Primary Client',
  },
  {
    title: 'Law Firms',
    description: 'Personal injury, workers comp, and commercial litigation practices rely on our court-ready documentation and expert field investigators.',
    cta: 'Explore litigation support',
    href: '/services#litigation',
    badge: null,
  },
  {
    title: 'Corporate & Government',
    description: 'Risk managers, procurement teams, and government agencies use Everguard for due diligence, background checks, and workplace investigations.',
    cta: 'View all capabilities',
    href: '/services',
    badge: null,
  },
]

const whyItems = [
  { title: 'Licensed across Australia', body: 'Every investigator holds a current Australian private investigator licence for the state they operate in. No exceptions.' },
  { title: 'Court-ready documentation', body: 'Reports are prepared to the evidentiary standard required by Australian courts, tribunals, and claims processes from day one.' },
  { title: 'Strict confidentiality', body: 'Client identity, case details, and investigation methodology are protected by contract and professional obligation — always.' },
  { title: 'Fast, clearly scoped delivery', body: 'Investigation timelines are scoped at instruction and communicated clearly upfront. Urgent matters are prioritised where operationally possible.' },
  { title: 'National capability', body: 'Operating across all Australian states and territories. Metropolitan, regional, and remote locations covered through our investigator network.' },
  { title: 'No lock-in', body: 'Case-by-case engagement with no minimum volumes, no retainer requirements, and no lock-in periods. Use us when you need us.' },
]

const processSteps = [
  {
    num: '01',
    icon: <Mail size={20} />,
    title: 'Instruct',
    description: 'Contact us with your case details. We confirm scope, timeline, and pricing within hours — not days.',
  },
  {
    num: '02',
    icon: <Search size={20} />,
    title: 'Investigate',
    description: 'Licensed operatives are deployed. Surveillance, interviews, evidence gathering — all conducted within Australian law.',
  },
  {
    num: '03',
    icon: <FileText size={20} />,
    title: 'Report',
    description: 'A comprehensive, court-ready report is compiled with all evidence, chain of custody documentation, and findings.',
  },
  {
    num: '04',
    icon: <CheckCircle size={20} />,
    title: 'Deliver',
    description: 'A complete report is delivered in line with the agreed scope and timeline, with follow-up support available where required.',
  },
]

const testimonials = [
  {
    quote: "We built Everguard to deliver investigation work that is disciplined, discreet, and fit for professional scrutiny.",
    role: 'Everguard Group',
    company: 'Service Standard',
  },
  {
    quote: "Our approach is simple: clear scope, rigorous investigation, and reporting that stands on its own merit.",
    role: 'Everguard Group',
    company: 'Operating Principle',
  },
  {
    quote: "Every engagement is handled with confidentiality, professionalism, and respect for the evidentiary standard the matter demands.",
    role: 'Everguard Group',
    company: 'Client Commitment',
  },
]

export default function HomePage() {
  return (
    <main style={{ background: '#060D18' }} className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#060D18' }}>
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-35" aria-hidden="true" />
        {/* Gold glow top-right */}
        <div className="absolute pointer-events-none" style={{
          top: '-15%', right: '-8%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(0,200,200,0.06) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }} aria-hidden="true" />
        {/* Secondary glow bottom-left */}
        <div className="absolute pointer-events-none" style={{
          bottom: '-10%', left: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,200,200,0.03) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} aria-hidden="true" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-xl">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2.5 mb-8" style={{
                  fontFamily: 'var(--font-geist-sans)', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.10em', textTransform: 'uppercase', color: '#00C8C8',
                  border: '1px solid rgba(0,200,200,0.22)', background: 'rgba(0,200,200,0.05)',
                  borderRadius: '5px', padding: '7px 14px',
                }}>
                  <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                    <span style={{
                      display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
                      background: '#00C8C8', boxShadow: '0 0 8px rgba(0,200,200,0.9)',
                    }} />
                  </span>
                  Licensed Investigations &amp; Intelligence — Australia
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-display font-bold text-white leading-[1.03] mb-6" style={{
                  fontSize: 'clamp(40px, 5.5vw, 72px)', letterSpacing: '-0.035em',
                  fontFamily: 'var(--font-geist-sans)',
                }}>
                  Investigation you can<br />
                  <span className="text-gradient-gold">take to court.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg leading-relaxed mb-10" style={{
                  fontFamily: 'var(--font-dm-sans)', color: 'rgba(255,255,255,0.6)', maxWidth: '520px',
                }}>
                  Everguard Group provides licensed private investigators and intelligence specialists
                  for insurance companies, law firms, and corporate clients across Australia.
                  Professional. Discreet. Thorough.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact" className="btn-primary px-8 py-4 text-center inline-flex items-center justify-center gap-2" style={{ fontSize: '15px' }}>
                    <Mail size={16} />
                    Enquire About a Case
                  </Link>
                  <Link href="/services" className="btn-ghost px-8 py-4 text-center inline-flex items-center justify-center gap-2" style={{ fontSize: '15px' }}>
                    View All Services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                  {['Licensed investigators', 'Professional reporting', 'National coverage', 'Strict confidentiality'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="7" fill="rgba(0,200,200,0.12)" />
                        <path d="M4 7L6.2 9.2L10 5" stroke="#00C8C8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Hero SVG — Case Dashboard Mockup */}
            <div className="hidden lg:flex items-center justify-center relative" style={{ height: '520px' }}>
              <ScrollReveal direction="right">
                <div style={{ position: 'absolute', inset: '10%', background: 'radial-gradient(ellipse, rgba(0,200,200,0.05) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} aria-hidden="true" />
                <svg viewBox="0 0 520 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
                  <defs>
                    <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
                      <stop offset="0%" stopColor="#00C8C8" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#00C8C8" stopOpacity="0" />
                    </radialGradient>
                    <filter id="card-shadow" x="-15%" y="-15%" width="130%" height="130%">
                      <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                    <linearGradient id="bar-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00C8C8" />
                      <stop offset="100%" stopColor="#00E8E8" />
                    </linearGradient>
                    <linearGradient id="bar-green" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#16A34A" />
                    </linearGradient>
                    <linearGradient id="bar-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>

                  <ellipse cx="260" cy="240" rx="260" ry="230" fill="url(#hero-glow)" />

                  {/* Connector lines */}
                  <line x1="200" y1="148" x2="92" y2="180" stroke="rgba(0,200,200,0.20)" strokeWidth="1" strokeDasharray="5 4" />
                  <circle cx="92" cy="180" r="2.5" fill="#00C8C8" opacity="0.5" />
                  <line x1="320" y1="148" x2="430" y2="168" stroke="rgba(0,200,200,0.20)" strokeWidth="1" strokeDasharray="5 4" />
                  <circle cx="430" cy="168" r="2.5" fill="#00C8C8" opacity="0.5" />
                  <line x1="260" y1="330" x2="200" y2="398" stroke="rgba(0,200,200,0.20)" strokeWidth="1" strokeDasharray="5 4" />
                  <circle cx="200" cy="398" r="2.5" fill="#00C8C8" opacity="0.5" />

                  {/* Main dashboard card */}
                  <g filter="url(#card-shadow)">
                    <rect x="100" y="80" width="320" height="250" rx="6" fill="#112240" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                    <rect x="100" y="80" width="320" height="3" rx="1.5" fill="url(#bar-gold)" opacity="0.6" />

                    <text x="124" y="112" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" letterSpacing="0.10em">CASE MANAGEMENT DASHBOARD</text>

                    <circle cx="390" cy="108" r="4" fill="#22C55E" opacity="0.9">
                      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="400" y="112" fill="rgba(34,197,94,0.7)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">LIVE</text>

                    <line x1="124" y1="122" x2="396" y2="122" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                    {/* Case rows */}
                    <text x="124" y="148" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter, system-ui, sans-serif">Active Cases</text>
                    <text x="380" y="148" fill="#00C8C8" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" textAnchor="end">24</text>
                    <rect x="124" y="153" width="256" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
                    <rect x="124" y="153" width="200" height="6" rx="3" fill="url(#bar-gold)" />

                    <text x="124" y="182" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter, system-ui, sans-serif">Reports Delivered (MTD)</text>
                    <text x="380" y="182" fill="#22C55E" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" textAnchor="end">47</text>
                    <rect x="124" y="187" width="256" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
                    <rect x="124" y="187" width="235" height="6" rx="3" fill="url(#bar-green)" />

                    <text x="124" y="216" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter, system-ui, sans-serif">Avg. Turnaround</text>
                    <text x="380" y="216" fill="#3B82F6" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" textAnchor="end">52 hrs</text>
                    <rect x="124" y="221" width="256" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
                    <rect x="124" y="221" width="218" height="6" rx="3" fill="url(#bar-blue)" />

                    <text x="124" y="250" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter, system-ui, sans-serif">Evidence Compliance</text>
                    <text x="380" y="250" fill="#00C8C8" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" textAnchor="end">100%</text>
                    <rect x="124" y="255" width="256" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
                    <rect x="124" y="255" width="256" height="6" rx="3" fill="url(#bar-gold)" />

                    <rect x="100" y="307" width="320" height="23" rx="0" fill="rgba(0,200,200,0.04)" />
                    <text x="124" y="322" fill="rgba(255,255,255,0.25)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">Last updated: just now</text>
                    <text x="380" y="322" fill="rgba(0,200,200,0.5)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" textAnchor="end">All states active</text>
                  </g>

                  {/* Side card — Surveillance */}
                  <g filter="url(#card-shadow)">
                    <rect x="14" y="168" width="154" height="76" rx="6" fill="#112240" stroke="rgba(0,200,200,0.22)" strokeWidth="1" />
                    <rect x="26" y="182" width="28" height="28" rx="6" fill="rgba(0,200,200,0.10)" stroke="rgba(0,200,200,0.28)" strokeWidth="1" />
                    <circle cx="40" cy="196" r="7" fill="none" stroke="#00C8C8" strokeWidth="1.2" />
                    <circle cx="40" cy="196" r="2.5" fill="#00C8C8" opacity="0.6" />
                    <line x1="45" y1="201" x2="48" y2="204" stroke="#00C8C8" strokeWidth="1.2" strokeLinecap="round" />
                    <text x="62" y="194" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.06em">SURVEILLANCE OPS</text>
                    <text x="62" y="212" fill="#FFFFFF" fontSize="22" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" letterSpacing="-0.03em">12</text>
                    <text x="62" y="226" fill="rgba(0,200,200,0.8)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">active this week</text>
                  </g>

                  <circle cx="154" cy="175" r="3.5" fill="#00C8C8" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.25;0.8" dur="2.4s" repeatCount="indefinite" />
                  </circle>

                  {/* Side card — Turnaround */}
                  <g filter="url(#card-shadow)">
                    <rect x="352" y="156" width="154" height="76" rx="6" fill="#112240" stroke="rgba(0,200,200,0.22)" strokeWidth="1" />
                    <rect x="364" y="170" width="28" height="28" rx="6" fill="rgba(0,200,200,0.10)" stroke="rgba(0,200,200,0.28)" strokeWidth="1" />
                    <circle cx="378" cy="184" r="7" fill="none" stroke="#00C8C8" strokeWidth="1.3" />
                    <line x1="378" y1="178" x2="378" y2="184" stroke="#00C8C8" strokeWidth="1.3" strokeLinecap="round" />
                    <line x1="378" y1="184" x2="382" y2="187" stroke="#00C8C8" strokeWidth="1.3" strokeLinecap="round" />
                    <text x="400" y="182" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.06em">AVG TURNAROUND</text>
                    <text x="400" y="200" fill="#00C8C8" fontSize="20" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" letterSpacing="-0.03em">&lt; 52h</text>
                    <text x="400" y="215" fill="rgba(255,255,255,0.35)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">report delivery</text>
                  </g>

                  <circle cx="352" cy="163" r="3.5" fill="#00C8C8" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite" begin="0.6s" />
                  </circle>

                  {/* Bottom card — Court-ready */}
                  <g filter="url(#card-shadow)">
                    <rect x="80" y="386" width="154" height="78" rx="6" fill="#112240" stroke="rgba(34,197,94,0.28)" strokeWidth="1" />
                    <rect x="80" y="386" width="154" height="3" rx="1.5" fill="#22C55E" opacity="0.5" />
                    <rect x="92" y="400" width="28" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.28)" strokeWidth="1" />
                    <path d="M106 408 L108 416 L114 406" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="128" y="412" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.06em">COURT-READY</text>
                    <text x="128" y="430" fill="#22C55E" fontSize="24" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" letterSpacing="-0.03em">100%</text>
                    <text x="128" y="447" fill="rgba(255,255,255,0.35)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">evidentiary standard</text>
                  </g>

                  <circle cx="80" cy="393" r="3.5" fill="#22C55E" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
                  </circle>

                  {/* Floating particles */}
                  <circle cx="455" cy="290" r="2" fill="#00C8C8" opacity="0.25">
                    <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="340" r="1.5" fill="#00C8C8" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
                  </circle>
                </svg>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0D1B2E)' }} aria-hidden="true" />
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section style={{ background: '#0D1B2E' }}>
        <div className="divider-subtle" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { value: 'Australia-wide', label: 'Operational Coverage' },
              { value: '100%', label: 'Licensed Investigators' },
              { value: 'National', label: 'Coverage Across Australia' },
              { value: 'Professional', label: 'Reporting Standard' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center px-6 py-6">
                  {i < 3 && (
                    <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-px" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
                  )}
                  <p className="stat-number mb-2 text-gradient-gold" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>{stat.value}</p>
                  <p className="text-sm text-white/50 max-w-[130px]" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.4 }}>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="divider-subtle" />
      </section>

      {/* ── Services overview ────────────────────────────────── */}
      <section id="services" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0D1B2E' }}>
        <div className="absolute inset-0 bg-grid-corporate pointer-events-none opacity-100" aria-hidden="true" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <span className="section-eyebrow mb-4 inline-block">Investigation Capabilities</span>
              <h2 className="font-display font-bold text-white mb-4" style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
              }}>
                Full-spectrum investigation<br />
                <span className="text-gradient-gold">services</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                From routine claims verification to complex fraud investigations — we scale our investigative effort to the case. Every engagement is handled with the same rigour, documentation standard, and confidentiality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 80}>
                <Link href={svc.href} className="relative rounded-md p-7 flex flex-col card-corporate group block h-full" style={{ transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease' }}>
                  <div className="absolute left-0 top-8 bottom-8 w-0.5 rounded-r" style={{ background: 'linear-gradient(to bottom, transparent, #00C8C8, transparent)' }} aria-hidden="true" />
                  <div className="w-10 h-10 flex items-center justify-center mb-5 shrink-0" style={{
                    background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.2)', borderRadius: '4px', color: '#00C8C8',
                  }}>
                    {svc.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.01em' }}>{svc.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>{svc.description}</p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1.5 mt-auto" style={{ color: '#00C8C8', fontFamily: 'var(--font-dm-sans)' }}>
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <path d="M2 6H10M6 2L10 6L6 10" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we work with ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#060D18' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <span className="section-eyebrow mb-4 inline-block">Who We Work With</span>
              <h2 className="font-display font-bold text-white mb-4" style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
              }}>
                Built for professionals who<br />
                <span className="text-gradient-gold">need results</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                We work exclusively with verified business clients. No walk-ins. No consumer investigations. Our clients are insurance companies, law firms, and corporate risk teams who need professional-grade outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 100}>
                <div className="p-8 flex flex-col h-full" style={{
                  background: i === 0 ? '#112240' : '#0F1C30',
                  border: i === 0 ? '1px solid rgba(0,200,200,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '6px',
                  boxShadow: i === 0 ? '0 0 40px rgba(0,200,200,0.06)' : 'none',
                }}>
                  {a.badge && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded mb-4 self-start" style={{
                      background: 'rgba(0,200,200,0.12)', color: '#00C8C8', border: '1px solid rgba(0,200,200,0.25)',
                      fontFamily: 'var(--font-geist-sans)',
                    }}>{a.badge}</span>
                  )}
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: '20px', fontFamily: 'var(--font-geist-sans)' }}>{a.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>{a.description}</p>
                  <Link href={a.href} className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: '#00C8C8' }}>
                    {a.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works / Process ────────────────────────────── */}
      <section id="process" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#060D18' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,200,0.05), transparent 65%)',
        }} aria-hidden="true" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <span className="section-eyebrow mb-4 inline-block">How It Works</span>
              <h2 className="font-display font-bold text-white mb-4" style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
              }}>
                From instruction to <span className="text-gradient-gold">evidence</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                A proven four-step process designed for speed, accuracy, and evidentiary integrity.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-px pointer-events-none" style={{ background: 'rgba(0,200,200,0.25)' }} aria-hidden="true" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center px-6 pt-8 pb-10 group">
                  {/* Large background number */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none font-bold leading-none" style={{
                    fontSize: 'clamp(72px, 8vw, 96px)', color: 'rgba(255,255,255,0.04)',
                    fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.04em', top: '-8px',
                  }} aria-hidden="true">{step.num}</span>

                  {/* Circle icon */}
                  <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-110" style={{
                    background: '#00C8C8', boxShadow: '0 0 24px rgba(0,200,200,0.35)', color: '#060D18',
                  }}>
                    {step.icon}
                  </div>

                  <span className="relative z-10 inline-block text-xs font-semibold mb-3 px-2 py-0.5 rounded" style={{
                    color: '#00C8C8', background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.25)',
                    fontFamily: 'var(--font-geist-sans)', letterSpacing: '0.06em',
                  }}>{step.num}</span>

                  {/* Dot on connecting line */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute right-0 top-[88px] w-2 h-2 rounded-full -translate-y-1/2 translate-x-1/2 z-20" style={{
                      background: '#00C8C8', boxShadow: '0 0 8px rgba(0,200,200,0.6)',
                    }} aria-hidden="true" />
                  )}

                  <h3 className="relative z-10 font-display font-bold text-white text-lg mb-3" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p className="relative z-10 text-white/55 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>{step.description}</p>

                  {i < 3 && <div className="lg:hidden mt-8 w-px h-8 self-center" style={{ background: 'rgba(0,200,200,0.3)' }} aria-hidden="true" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Everguard ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0D1B2E' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,200,200,0.06), transparent 65%)',
        }} aria-hidden="true" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left" className="w-full lg:w-2/5 flex-shrink-0">
              <div className="mb-12 lg:mb-0">
                <span className="section-eyebrow mb-4 block">Why Everguard</span>
                <h2 className="font-display font-bold text-white mb-4" style={{
                  fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
                }}>
                  The standard your cases <span className="text-gradient-gold">demand</span>
                </h2>
                <p className="text-white/60 text-lg mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Every investigation we conduct is designed to withstand scrutiny — from a claims assessor, a legal counsel, or a judge. We operate to the same standard regardless of case size or client.
                </p>
                <Link href="/contact" className="btn-primary inline-block">Enquire Now</Link>
              </div>
            </ScrollReveal>

            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="p-5 h-full" style={{
                    background: 'rgba(0,200,200,0.03)', border: '1px solid rgba(0,200,200,0.12)', borderRadius: '4px',
                  }}>
                    <h4 className="font-semibold text-white mb-2 text-sm" style={{ fontFamily: 'var(--font-geist-sans)' }}>{item.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#060D18' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-eyebrow mb-4 inline-block">Trusted By Professionals</span>
              <h2 className="font-display font-bold text-white mb-4" style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
              }}>
                What our clients <span className="text-gradient-gold">say</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="p-8 flex flex-col h-full" style={{
                  background: '#0F1C30', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px',
                }}>
                  {/* Quote mark */}
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-5" style={{ opacity: 0.15 }}>
                    <path d="M0 24V14.4C0 10.56 0.8 7.44 2.4 5.04C4.08 2.64 6.72 0.96 10.32 0L12 3.36C9.84 4.08 8.16 5.28 6.96 6.96C5.84 8.56 5.28 10.4 5.28 12.48H12V24H0ZM20 24V14.4C20 10.56 20.8 7.44 22.4 5.04C24.08 2.64 26.72 0.96 30.32 0L32 3.36C29.84 4.08 28.16 5.28 26.96 6.96C25.84 8.56 25.28 10.4 25.28 12.48H32V24H20Z" fill="#00C8C8" />
                  </svg>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <p className="text-white/80 text-sm font-semibold" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.role}</p>
                    <p className="text-white/30 text-xs mt-0.5" style={{ fontFamily: 'var(--font-dm-sans)' }}>{t.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: '#060D18' }}>
        <ScrollReveal>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #00C8C8 0%, #8B6914 100%)' }} aria-hidden="true" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)',
            }} aria-hidden="true" />

            <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
              <h2 className="font-display font-bold mb-4" style={{
                fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans)',
                color: '#060D18',
              }}>
                Ready to discuss a case?
              </h2>
              <p className="text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: 'var(--font-dm-sans)', color: 'rgba(6,13,24,0.7)' }}>
                Tell us what you need. We will scope the engagement, confirm timelines, and get to work — typically within 24 hours of instruction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base" style={{
                  background: '#060D18', color: '#00C8C8', borderRadius: '4px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}>
                  <Mail size={16} />
                  Contact Us
                </Link>
                <a href="tel:+61730070000" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base" style={{
                  background: 'transparent', color: '#060D18', border: '1px solid rgba(6,13,24,0.3)', borderRadius: '4px',
                }}>
                  <Phone size={16} />
                  07 3007 0000
                </a>
              </div>
              <p className="text-sm font-medium tracking-wider" style={{ color: 'rgba(6,13,24,0.5)' }}>
                All enquiries handled in strict confidence
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}

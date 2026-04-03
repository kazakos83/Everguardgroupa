import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'
import { CheckCircle, Phone, Mail, Clock, Shield, Search, FileText, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insurance Partnership — Everguard Group',
  description:
    'Partner with Everguard for outsourced insurance investigation services. Earn 10% commission on all referred cases. Licensed investigators across Australia.',
}

const benefits = [
  {
    icon: <Clock size={20} />,
    title: '48-72 Hour Turnaround',
    description: 'From referral to completed report — faster than most in-house teams.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Licensed & Confidential',
    description: 'Every investigator is licensed. Every case is handled with strict confidentiality.',
  },
  {
    icon: <Search size={20} />,
    title: 'Full Case Documentation',
    description: 'Court-ready reports with complete chain of custody and evidence standards.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Fraud Savings',
    description: 'Our insurer partners typically recover far more in fraudulent claims than they pay in investigation fees.',
  },
]

const caseTypes = [
  'Workers compensation fraud investigations',
  'Public liability fraud (slip, trip, injury claims)',
  'Motor vehicle accident investigations',
  'Income protection and total permanent disability claims',
  'Digital forensics and cybercrime investigation',
  'Background checks and due diligence',
  'Surveillance and activity checks',
  'Arson and property fraud investigation',
]

export default function PartnersPage() {
  return (
    <main style={{ background: '#060D18' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 border-b" style={{ borderColor: 'rgba(30,32,37,0.8)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: '#00D4B4' }}
            >
              Insurance Investigation Partnership Program
            </span>
            <h1
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Your outsourced
              <br />
              <span style={{ color: '#00D4B4' }}>investigation team.</span>
            </h1>
            <p className="text-white/55 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Everguard provides licensed private investigators and intelligence specialists for
              insurance companies across Australia. Refer cases to us — we investigate, document,
              and report. You earn 10% commission on every case referred and closed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:garry@everguard.com.au?subject=Insurance%20Partnership%20Enquiry"
                className="btn-primary px-6 py-3 text-base inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Enquire About Partnership
              </a>
              <a
                href="tel:+61730070000"
                className="px-6 py-3 text-base inline-flex items-center gap-2 border text-white/70 hover:text-white transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.15)', borderRadius: '4px' }}
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-20 border-b" style={{ borderColor: 'rgba(30,32,37,0.6)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
              >
                Case types we handle
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                From routine claims verification to complex fraud investigations — we scale
                our investigative effort to match the case. No minimum case size.
              </p>
              <ul className="space-y-3">
                {caseTypes.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#00D4B4' }} />
                    <span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
              >
                Why insurers partner with us
              </h2>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 shrink-0 flex items-center justify-center"
                      style={{
                        background: 'rgba(0,212,180,0.08)',
                        border: '1px solid rgba(0,212,180,0.2)',
                        borderRadius: '4px',
                        color: '#00D4B4',
                      }}
                    >
                      {b.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1 text-sm">{b.title}</p>
                      <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <section className="py-20 border-b" style={{ borderColor: 'rgba(30,32,37,0.6)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div
            className="p-8 lg:p-12"
            style={{
              background: 'rgba(0,212,180,0.04)',
              border: '1px solid rgba(0,212,180,0.15)',
              borderRadius: '6px',
            }}
          >
            <div className="max-w-2xl">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#00D4B4' }}
              >
                Commission Structure
              </span>
              <h2
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
              >
                Earn 10% on every case you refer
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                No cap. No minimum volume. Commission is paid within 30 days of case completion
                and invoice approval. We handle the entire investigation — you just refer and earn.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Commission rate', value: '10%' },
                  { label: 'Payment timing', value: '30 days' },
                  { label: 'Volume cap', value: 'None' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display font-bold mb-1"
                      style={{ fontSize: '28px', color: '#00D4B4' }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="mailto:garry@everguard.com.au?subject=Partnership%20Agreement%20Request"
                className="btn-primary px-6 py-3 text-base inline-flex items-center gap-2"
              >
                <FileText size={16} />
                Request Partnership Agreement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-20 border-b" style={{ borderColor: 'rgba(30,32,37,0.6)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h2
            className="font-display font-bold text-white mb-8"
            style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
          >
            What our insurance partners experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '48hrs', label: 'Average case turnaround' },
              { stat: '94%', label: 'Client satisfaction score' },
              { stat: '$2.3M+', label: 'Fraudulent claims identified in 90 days (typical partner)' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8"
                style={{
                  background: '#0E0E10',
                  border: '1px solid rgba(30,32,37,0.8)',
                  borderRadius: '4px',
                }}
              >
                <p
                  className="font-display font-bold mb-2"
                  style={{ fontSize: '40px', color: '#00D4B4' }}
                >
                  {item.stat}
                </p>
                <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em' }}
          >
            Ready to strengthen your investigation capability?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Book a 15-minute call to discuss your current caseload, pain points, and
            how our investigation team can support your claims operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:garry@everguard.com.au?subject=15min%20Insurance%20Call"
              className="btn-primary px-8 py-4 text-base inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Book a 15-Minute Call
            </a>
            <a
              href="tel:+61730070000"
              className="px-8 py-4 text-base inline-flex items-center justify-center gap-2 border text-white/70 hover:text-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.15)', borderRadius: '4px' }}
            >
              <Phone size={16} />
              07 3007 0000
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

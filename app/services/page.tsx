import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Search, FileText, Users, Lock, Cpu, CheckCircle, ArrowRight, Clock, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investigation Services — Everguard Group',
  description:
    'Full-spectrum investigation capabilities for insurance companies, law firms, and corporate clients. Insurance investigations, surveillance, workers comp fraud, litigation support, and digital forensics.',
}

const capabilities = [
  {
    id: 'insurance',
    icon: <Shield size={28} />,
    title: 'Insurance Investigations',
    tagline: 'Claims-grade investigations for insurers and scheme managers',
    body: `Everguard provides end-to-end investigation services for Australian insurance companies handling property, liability, motor vehicle, workers compensation, and life insurance claims.

Our investigations are structured around the information your claims team needs to make a defensible decision — not just surveillance footage or a surface-level report.`,
    capabilities: [
      'Claims liability investigations',
      'Personal injury and TPD investigations',
      'Income protection claims verification',
      'Motor vehicle accident investigations',
      'Property and arson investigations',
      'Public liability fraud detection',
    ],
    deliverables: [
      'Detailed written investigation report',
      'Photographic and video evidence',
      'Witness statements (where applicable)',
      'Activity chronology and timeline',
      'Recommendations for further action',
    ],
  },
  {
    id: 'workers-comp',
    icon: <Users size={28} />,
    title: 'Workers Compensation Fraud',
    tagline: 'Targeted fraud detection for insurers and self-insurers',
    body: `Workers compensation fraud is one of the largest cost drivers in Australian insurance. Exaggerated incapacity claims, unreported secondary employment, and fraudulent injury claims cost the industry hundreds of millions annually.

Everguard investigates suspected workers compensation fraud with the care and precision required to support claim denial, recovery action, or prosecution referral.`,
    capabilities: [
      'Incapacity and activity level investigations',
      'Undisclosed employment investigations',
      'Rehabilitation compliance monitoring',
      'Medical appointment surveillance',
      'Social media and OSINT investigations',
      'Fraud referral package preparation',
    ],
    deliverables: [
      'Comprehensive fraud investigation report',
      'Video and photographic evidence',
      'Comparative activity analysis',
      'Legal referral package (where required)',
      'Expert witness support',
    ],
  },
  {
    id: 'surveillance',
    icon: <Search size={28} />,
    title: 'Surveillance & Activity Monitoring',
    tagline: 'Covert mobile surveillance by licensed operatives',
    body: `All Everguard surveillance is conducted by licensed, experienced operatives using professional-grade recording equipment. We operate within Australian privacy law and document our methodology to ensure admissibility.

Whether you need a single-day activity check or an extended mobile surveillance programme, we scope to your requirement and deliver to a professional standard.`,
    capabilities: [
      'Mobile covert surveillance',
      'Static observation',
      'Multi-operative coordinated surveillance',
      'Extended or repeat surveillance programmes',
      'Activity and capability assessment',
      'Physical evidence documentation',
    ],
    deliverables: [
      'Surveillance log and operative diary',
      'Video footage (timestamped and watermarked)',
      'Photographic evidence',
      'Surveillance report with analysis',
      'Chain of custody documentation',
    ],
  },
  {
    id: 'litigation',
    icon: <FileText size={28} />,
    title: 'Litigation Support',
    tagline: 'Investigation and evidence services for legal practitioners',
    body: `Law firms engaged in personal injury, workers compensation, commercial, and insurance litigation rely on Everguard for investigation services that meet the evidentiary standards of Australian courts and tribunals.

We understand the demands of the litigation environment — including deadlines, disclosure obligations, and the standard required for evidence to be admitted. Our reports are written with that in mind from the outset.`,
    capabilities: [
      'Witness location and verification',
      'Evidence gathering and preservation',
      'Scene investigations and documentation',
      'Background and asset investigations',
      'Social media and OSINT research',
      'Expert witness report preparation',
    ],
    deliverables: [
      'Court-ready investigation report',
      'Witness statements and affidavits',
      'Photographic scene documentation',
      'Digital evidence packages',
      'Expert witness availability',
    ],
  },
  {
    id: 'corporate',
    icon: <Lock size={28} />,
    title: 'Corporate Intelligence & Due Diligence',
    tagline: 'Discreet intelligence for risk managers and executive teams',
    body: `Corporate risk managers, procurement teams, and boards of directors use Everguard for investigations that require discretion, thoroughness, and professional documentation.

From pre-acquisition due diligence to workplace investigation, we deliver structured intelligence that supports decisions without creating unnecessary legal exposure.`,
    capabilities: [
      'Pre-employment and contractor background checks',
      'Business and personal due diligence',
      'Workplace investigations',
      'Asset and liability investigations',
      'Competitive intelligence (within legal bounds)',
      'Executive background investigations',
    ],
    deliverables: [
      'Due diligence investigation report',
      'Source and verification notes',
      'Risk assessment summary',
      'Recommendations',
    ],
  },
  {
    id: 'digital',
    icon: <Cpu size={28} />,
    title: 'Digital Forensics & Cybercrime',
    tagline: 'Electronic evidence for insurance and litigation',
    body: `Digital evidence is increasingly central to insurance and litigation outcomes. Everguard provides digital forensics support for claims and legal matters that involve electronic devices, online activity, or cybercrime.

All digital forensics work is conducted using court-accepted methodology, with full chain of custody documentation and expert reporting.`,
    capabilities: [
      'Device forensic imaging and analysis',
      'Email and communication investigations',
      'Social media evidence capture',
      'Financial fraud and cybercrime investigation',
      'Electronic document authentication',
      'Expert digital evidence reports',
    ],
    deliverables: [
      'Forensic investigation report',
      'Forensic images and copies (where required)',
      'Evidence chain of custody log',
      'Expert witness support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ background: '#060D18' }} className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-eyebrow mb-5 block">Investigation Capabilities</span>
            <h1 className="font-display font-bold text-white mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Everything you need.
              <br />
              <span className="text-gradient-gold">Nothing you don&apos;t.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Everguard delivers licensed investigation services across every major case type handled by Australian insurance companies and law firms. Court-ready documentation is standard — not optional.
            </p>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-3">
              {capabilities.map((c) => (
                <a key={c.id} href={`#${c.id}`}
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 transition-colors"
                  style={{ background: 'rgba(0,200,200,0.07)', border: '1px solid rgba(0,200,200,0.2)', borderRadius: '3px', color: '#00C8C8' }}>
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — detailed */}
      {capabilities.map((cap, i) => (
        <section
          key={cap.id}
          id={cap.id}
          className="py-20 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.05)', background: i % 2 === 1 ? '#0A1628' : '#060D18' }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: description */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.2)', borderRadius: '6px', color: '#00C8C8' }}>
                    {cap.icon}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-white" style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{cap.title}</h2>
                    <p className="text-white/40 text-sm mt-0.5" style={{ fontFamily: 'var(--font-dm-sans)' }}>{cap.tagline}</p>
                  </div>
                </div>
                {cap.body.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-white/55 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>{para}</p>
                ))}
              </div>

              {/* Right: capabilities + deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">What we investigate</h3>
                  <ul className="space-y-2.5">
                    {cap.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: '#00C8C8' }} />
                        <span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Deliverables</h3>
                  <ul className="space-y-2.5">
                    {cap.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <FileText size={14} className="shrink-0 mt-0.5" style={{ color: 'rgba(0,200,200,0.5)' }} />
                        <span className="text-white/55 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Turnaround / process strip */}
      <section className="py-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#0D1B2E' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={20} />, title: 'Clear investigation timelines', body: 'Every matter is scoped with delivery expectations agreed upfront, including priority handling for urgent engagements where possible.' },
              { icon: <Shield size={20} />, title: 'Licensed and insured', body: 'All investigators hold current Australian private investigator licences. Full professional indemnity insurance.' },
              { icon: <FileText size={20} />, title: 'Court-ready by default', body: 'Every report is written to Australian evidentiary standards. No redrafting, no reworking — ready to use.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.15)', borderRadius: '4px', color: '#00C8C8' }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 text-sm">{item.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Ready to instruct a case?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Contact us with your case details. We will confirm scope, timeline, and pricing within a few hours.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 justify-center">
            <Mail size={16} />
            Contact Everguard
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

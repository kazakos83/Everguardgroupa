'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { Mail, Phone, Clock, Shield, CheckCircle, Send } from 'lucide-react'

const enquiryTypes = [
  'Insurance claim investigation',
  'Workers compensation fraud',
  'Surveillance / activity monitoring',
  'Litigation support',
  'Corporate due diligence',
  'Digital forensics',
  'General enquiry',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto string as fallback
    const subject = encodeURIComponent(`Enquiry: ${formData.enquiryType || 'General'} — ${formData.company || formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEnquiry type: ${formData.enquiryType}\n\n${formData.message}`
    )
    window.location.href = `mailto:garry@everguard.com.au?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#060D18' }} className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-5 block">Contact Everguard Group</span>
            <h1 className="font-display font-bold text-white mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Instruct a case.
              <br />
              <span className="text-gradient-gold">Or just ask us a question.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              All enquiries are handled in strict confidence. We typically respond within a few hours during business hours, and same-day for urgent matters.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
                Send us an enquiry
              </h2>

              {submitted ? (
                <div className="p-8 text-center" style={{ background: 'rgba(0,200,200,0.05)', border: '1px solid rgba(0,200,200,0.2)', borderRadius: '6px' }}>
                  <CheckCircle size={40} className="mx-auto mb-4" style={{ color: '#00C8C8' }} />
                  <h3 className="font-display font-bold text-white text-xl mb-2">Enquiry sent</h3>
                  <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Your email client should have opened. If it did not, email us directly at{' '}
                    <a href="mailto:garry@everguard.com.au" style={{ color: '#00C8C8' }}>garry@everguard.com.au</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                        style={{
                          background: '#0D1B2E',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-dm-sans)',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Company / Organisation *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organisation"
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                        style={{
                          background: '#0D1B2E',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-dm-sans)',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@yourcompany.com.au"
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                        style={{
                          background: '#0D1B2E',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-dm-sans)',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07 or 02..."
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                        style={{
                          background: '#0D1B2E',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-dm-sans)',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors appearance-none"
                      style={{
                        background: '#0D1B2E',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-dm-sans)',
                        color: formData.enquiryType ? 'white' : 'rgba(255,255,255,0.3)',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    >
                      <option value="" style={{ background: '#0D1B2E' }}>Select enquiry type</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t} style={{ background: '#0D1B2E' }}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Tell us about your case or enquiry *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief description of what you need investigated, timeline, and any other relevant details..."
                      className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none"
                      style={{
                        background: '#0D1B2E',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-dm-sans)',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,200,200,0.4)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
                      <Send size={16} />
                      Send Enquiry
                    </button>
                    <p className="text-white/25 text-xs mt-3" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      This form opens your email client. All correspondence is treated as strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Contact details sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-white mb-5" style={{ fontSize: '18px', letterSpacing: '-0.02em' }}>
                  Direct contact
                </h3>
                <div className="space-y-4">
                  <a href="mailto:garry@everguard.com.au" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.15)', borderRadius: '4px', color: '#00C8C8' }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        garry@everguard.com.au
                      </p>
                    </div>
                  </a>
                  <a href="tel:+61730070000" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.15)', borderRadius: '4px', color: '#00C8C8' }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        07 3007 0000
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(0,200,200,0.08)', border: '1px solid rgba(0,200,200,0.15)', borderRadius: '4px', color: '#00C8C8' }}>
                      <Clock size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Response time</p>
                      <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        Within a few hours (business hours).<br />Same-day for urgent matters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider-subtle" />

              {/* Confidentiality note */}
              <div className="p-5" style={{ background: 'rgba(0,200,200,0.04)', border: '1px solid rgba(0,200,200,0.12)', borderRadius: '4px' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={16} style={{ color: '#00C8C8' }} />
                  <span className="text-white text-sm font-semibold">Strict confidentiality</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  All enquiries are treated as strictly confidential. We do not disclose client identity, case details, or the fact that an enquiry was made to any third party.
                </p>
              </div>

              {/* What to include */}
              <div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Useful to include</p>
                <ul className="space-y-2">
                  {[
                    'Subject name and location (city/state)',
                    'Type of investigation needed',
                    'Preferred timeline or urgency',
                    'Any relevant case reference numbers',
                    'Your role (claims manager, solicitor, etc.)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: 'rgba(0,200,200,0.5)' }} />
                      <span className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

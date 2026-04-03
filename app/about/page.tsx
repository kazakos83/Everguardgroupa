import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'
import { Shield, Award, Lock, Users, CheckCircle, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Everguard Group — Licensed Investigators Across Australia',
  description:
    'Everguard Group is a licensed private investigation and intelligence firm supporting insurance companies, law firms, and corporate clients across Australia.',
}

const values = [
  {
    icon: <Shield size={22} />,
    title: 'Licensed & Compliant',
    description:
      'All operatives hold current licences under the relevant state and territory legislation. We operate within the law — always.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Absolute Confidentiality',
    description:
      'Every engagement is handled with strict confidentiality protocols. Client identities, case details, and findings are never disclosed outside the authorised chain.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Evidence-Grade Standards',
    description:
      'Our reports and documentation are prepared to court-ready standards from the outset. Chain of custody is maintained on every piece of evidence we collect.',
  },
  {
    icon: <Award size={22} />,
    title: 'Professional Integrity',
    description:
      'We are honest about what we find. If the evidence does not support the theory, we say so. Our clients rely on our integrity, not just our results.',
  },
  {
    icon: <Users size={22} />,
    title: 'Experienced Operatives',
    description:
      'Our investigation team is built around licensed operatives and professional investigators selected for discretion, judgement, and reporting quality.',
  },
  {
    icon: <CheckCircle size={22} />,
    title: 'Results Without Excuses',
    description:
      'We take on engagements we can deliver on and we deliver on what we take on. Our clients do not chase us for updates — we report proactively.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0f1e] text-white">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
          <p className="text-[#00C8C8] uppercase tracking-widest text-sm font-semibold mb-4">
            About Everguard Group
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Professional Investigators. <br className="hidden md:block" />
            Trusted Intelligence.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everguard Group is a licensed private investigation and intelligence firm operating across Australia.
            We exist to help insurance companies, law firms, and corporate clients get to the truth — quickly,
            professionally, and with documentation that stands up.
          </p>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-6 bg-[#0d1426]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-400 mb-4">
                Everguard Group Pty Ltd is a specialist investigations and intelligence business. We work with
                clients who need reliable, professional investigation services — and who cannot afford for
                those services to be anything less than court-ready.
              </p>
              <p className="text-gray-400 mb-4">
                Our clients include insurance companies managing complex claims, law firms conducting litigation
                support, and corporate entities investigating fraud, misconduct, or risk exposure. For all of
                them, we bring the same standard: thorough, documented, defensible.
              </p>
              <p className="text-gray-400">
                We operate with a lean, experienced team augmented by a vetted network of licensed operatives
                and intelligence specialists across every Australian state and territory. We can move fast
                because we are built to move fast.
              </p>
            </div>
            <div className="bg-[#111827] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-6 text-[#00C8C8]">At a Glance</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Licensed investigators across all Australian states and territories</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Court-ready documentation and evidence management on every engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Clearly scoped timelines and professional reporting on every engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Strict confidentiality — client identities protected on every case</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Built to support insurance companies, law firms, and corporate clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00C8C8] mt-0.5 shrink-0" />
                  <span>Part of Everguard Group Pty Ltd — a purpose-built professional services group</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">How We Operate</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                These are not aspirational values on a wall. This is how every Everguard engagement runs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#111827] rounded-2xl p-6 border border-gray-800 hover:border-[#00C8C8]/40 transition"
                >
                  <div className="text-[#00C8C8] mb-4">{v.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#0d1426]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-400 mb-8">
              If you have an investigation requirement, we are ready to discuss it. Confidentially,
              professionally, and without obligation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00C8C8] text-[#0a0f1e] font-semibold px-8 py-4 rounded-xl hover:bg-[#00C8C8] transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

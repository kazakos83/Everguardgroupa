import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Insurance Investigations', href: '/services' },
  { label: 'Workers Compensation',     href: '/services' },
  { label: 'Surveillance',             href: '/services' },
  { label: 'Fraud Investigations',     href: '/services' },
  { label: 'Litigation Support',       href: '/services' },
]

const company = [
  { label: 'About Us',  href: '/about' },
  { label: 'Partners',  href: '/partners' },
  { label: 'Contact',   href: '/contact' },
]

function FooterLinkGroup({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        {heading}
      </p>
      {links.map((link) => (
        <Link key={link.label} href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-150" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: '#060D18', borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5" aria-label="Everguard Group">
              <Image
                src="/everguard-logo.png"
                alt="Everguard Group"
                width={140}
                height={32}
                style={{ height: 'auto', width: 'auto', maxHeight: 32, objectFit: 'contain' }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-3 max-w-[300px]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Everguard Group Pty Ltd — Licensed investigations and intelligence services for insurance companies, law firms, and corporate clients across Australia.
            </p>
            <p className="text-white/25 text-xs mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Everguard Group Pty Ltd
            </p>
            <p className="text-white/25 text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              All investigators hold current Australian private investigator licences.
            </p>
          </div>

          <FooterLinkGroup heading="Services" links={services} />
          <FooterLinkGroup heading="Company"  links={company}  />
        </div>

        <div className="divider-subtle mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            &copy; {new Date().getFullYear()} Everguard Group Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/25 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <a href="/privacy" className="hover:text-white/50 transition-colors duration-150">Privacy Policy</a>
            <span className="mx-2 text-white/15">&middot;</span>
            <a href="/terms" className="hover:text-white/50 transition-colors duration-150">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

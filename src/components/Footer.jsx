export function Footer() {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'How It Works', href: '/#showcase' },
        { label: 'Open App', href: '/app' },
        { label: 'Pricing', href: '/subscription' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/about' },
        { label: 'Contact Us', href: '/about' },
        { label: 'FAQ', href: '/about' },
      ],
    },
    {
      title: 'PhoneX',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about' },
        { label: 'Blog', href: '/about' },
        { label: 'Newsroom', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookies', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-[#F5F5F7] pt-10 pb-6 border-t border-apple-border/50">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        {/* Legal line */}
        <div className="pb-6 border-b border-apple-border">
          <p className="text-[12px] text-apple-text-2 leading-[1.4]">
            A subscription may be required for some PhoneX features.
          </p>
        </div>

        {/* Links grid */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold text-apple-text mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[12px] text-apple-text-2 hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-apple-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[12px] text-apple-text-2">
            Copyright © {new Date().getFullYear()} PhoneX Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="text-[12px] text-apple-text-2 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[12px] text-apple-text-2 hover:underline">
              Terms of Use
            </a>
            <a href="/features" className="text-[12px] text-apple-text-2 hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

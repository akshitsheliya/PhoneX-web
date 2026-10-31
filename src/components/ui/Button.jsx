export const AppleButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center font-normal text-[17px] rounded-apple-btn transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-apple-blue text-white px-6 py-3 hover:bg-apple-blue-hover",
    secondary: "bg-apple-bg text-apple-blue border border-apple-blue px-6 py-3 hover:bg-apple-blue/5",
    dark: "bg-apple-text text-white px-6 py-3 hover:bg-apple-text/90",
  };
  
  return (
    <button {...props} className={`${base} ${variants[variant] || variants.primary} ${className}`.trim()}>
      {children}
    </button>
  );
};

// Apple's signature "Learn more >" link style
export const AppleLink = ({ children, href = "#", className = "" }) => (
  <a href={href} className={`apple-link inline-flex items-center gap-1 group ${className}`.trim()}>
    {children} 
    <span className="group-hover:translate-x-0.5 transition-transform">›</span>
  </a>
);

// Blue pill button (small, like "Learn more" in product cards)
export const AppleBluePill = ({ children, className = '', ...props }) => (
  <button {...props} className={`bg-apple-blue hover:bg-apple-blue-hover text-white text-[14px] font-normal px-4 py-1.5 rounded-apple-btn transition-colors cursor-pointer ${className}`.trim()}>
    {children}
  </button>
);

// Mapped aliases for backwards-compatibility with existing sections
export const PrimaryButton = ({ children, className = '', ...props }) => (
  <AppleButton variant="primary" className={className} {...props}>
    {children}
  </AppleButton>
);

export const SecondaryButton = ({ children, className = '', ...props }) => (
  <AppleButton variant="secondary" className={className} {...props}>
    {children}
  </AppleButton>
);

import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const PrimaryButton = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center gap-2 bg-ink-primary text-bg-primary font-medium text-[15px] px-6 py-3.5 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-medium cursor-pointer ${className}`}
  >
    <span>{children}</span>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
      <path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

export const SecondaryButton = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center gap-2 bg-transparent text-ink-primary font-medium text-[15px] px-6 py-3.5 rounded-full border border-border-default hover:border-ink-primary hover:bg-white transition-all duration-300 cursor-pointer ${className}`}
  >
    {children}
  </button>
);

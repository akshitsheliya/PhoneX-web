import { motion } from 'framer-motion';
import { PhoneFrame as AppPhoneFrame } from './PhoneFrame.tsx';

export default function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative flex justify-center w-full max-w-[300px] mx-auto ${className}`}>
      {/* Soft glow behind phone */}
      <div className="absolute inset-0 bg-accent/15 blur-[60px] rounded-full scale-90 -z-10" />
      
      {/* Premium Outer Frame (Matches Hero exactly) */}
      <div 
        className="relative w-full aspect-[9/19.5] rounded-[2.5rem] p-[3px]"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          boxShadow: '0 40px 80px -20px rgba(91, 79, 233, 0.25), 0 20px 40px -10px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        {/* Inner Bezel */}
        <div className="w-full h-full rounded-[2.35rem] bg-black p-[2.5px] overflow-hidden shadow-inner">
          
          {/* Screen Container */}
          <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-white flex flex-col">
            
            {/* Premium Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[24px] bg-black rounded-full z-40" />
            
            {/* Inner HTML/CSS UI Content injected here */}
            {children}
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Re-export named PhoneFrame so any app routes importing { PhoneFrame } from '@/components/PhoneFrame' continue to work
export { AppPhoneFrame as PhoneFrame };

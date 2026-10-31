import { PhoneFrame as AppPhoneFrame } from './PhoneFrame.tsx';

export default function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="relative w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[3rem] p-[8px] bg-black mx-auto"
        style={{ boxShadow: '0 20px 60px -15px rgba(0,0,0,0.25)' }}
      >
        <div className="w-full h-full rounded-[2.5rem] bg-white overflow-hidden relative flex flex-col">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[32%] h-[22px] bg-black rounded-full z-40" />
          {children}
        </div>
      </div>
    </div>
  );
}

// Re-export named PhoneFrame so internal app routes continue to work
export { AppPhoneFrame as PhoneFrame };

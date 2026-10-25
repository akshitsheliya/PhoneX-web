export function PhoneMockup({
  children,
  className = "w-[260px]",
}) {
  return (
    <div
      className={`relative aspect-[9/19.5] rounded-[2.8rem] p-[3px] select-none ${className}`}
      style={{
        background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        boxShadow:
          "0 40px 80px -15px rgba(91, 79, 233, 0.22), 0 25px 50px -12px rgba(0, 0, 0, 0.22), inset 0 0 0 1px rgba(255,255,255,0.1)",
      }}
    >
      {/* Inner bezel */}
      <div className="w-full h-full rounded-[2.6rem] bg-black p-[2px] overflow-hidden">
        {/* Screen */}
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-[#F5F3FF] via-white to-[#FFF4F0]">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[84px] h-[22px] bg-black rounded-full z-20 flex items-center justify-end pr-2 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
          </div>

          {/* Screen inner content */}
          <div className="w-full h-full pt-11 px-4 pb-4 flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;

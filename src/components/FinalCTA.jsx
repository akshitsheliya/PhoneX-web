export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <h2 className="text-apple-headline text-apple-text mb-4 tracking-tight font-semibold">
          Ready for your PhoneX?
        </h2>
        <p className="text-[17px] text-apple-text-2 leading-[1.47] mb-8 max-w-md mx-auto">
          Start your journey with a companion that remembers what matters.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="/get-started"
            className="bg-apple-blue hover:bg-apple-blue-hover text-white text-[17px] font-normal px-6 py-3 rounded-apple-btn transition-colors"
          >
            Get PhoneX
          </a>
          <a
            href="/features"
            className="apple-link inline-flex items-center gap-1 group text-[17px]"
          >
            Learn more <span className="group-hover:translate-x-0.5 transition-transform">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

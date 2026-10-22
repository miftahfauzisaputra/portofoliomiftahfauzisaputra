interface MarqueeTickerProps {
  reverse?: boolean;
  className?: string;
}

export default function MarqueeTicker({ reverse = false, className = '' }: MarqueeTickerProps) {
  const items = [
    'DIGITAL ADVERTISING',
    'META ADS & PIXEL CAPI',
    'TIKTOK ADS SPECIALIST',
    'SHOPEE & TOKOPEDIA ADS',
    'ROAS 4.8X AVERAGE',
    'VIDEOGRAPHY & FILM MAKING',
    'INTERIOR INDUSTRY EXPERT',
    'CREATIVE MEDIA PRODUCTION',
    'GOOGLE SEARCH & PMAX',
    'FULL FUNNEL CONVERSION'
  ];

  return (
    <div className={`overflow-hidden select-none py-3.5 border-y border-zinc-900 bg-black ${className}`}>
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6 gap-6 shrink-0">
            <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold tracking-widest text-zinc-300 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-sm shadow-red-600/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

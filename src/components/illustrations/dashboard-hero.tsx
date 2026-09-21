interface DashboardHeroProps {
  className?: string;
}

export default function DashboardHero({ className }: DashboardHeroProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="dashBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="chart1Grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="chart2Grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="chart3Grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="dashCardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <filter id="dashShadow" x="-8%" y="-8%" width="120%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
      </defs>

      <rect width="400" height="200" fill="url(#dashBg)" rx="12" />

      <circle cx="370" cy="30" r="30" fill="#818cf8" opacity="0.08" />
      <circle cx="30" cy="170" r="25" fill="#f97316" opacity="0.08" />

      {/* Card 1 - Bar Chart */}
      <rect x="15" y="20" width="115" height="85" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <rect x="25" y="30" width="35" height="3" rx="1.5" fill="#4f46e5" opacity="0.5" />
      <rect x="25" y="36" width="20" height="2" rx="1" fill="#c7d2fe" />

      {/* Bars */}
      <rect x="25" y="62" width="12" height="30" rx="3" fill="url(#chart1Grad)" />
      <rect x="42" y="50" width="12" height="42" rx="3" fill="url(#chart2Grad)" />
      <rect x="59" y="58" width="12" height="34" rx="3" fill="url(#chart3Grad)" />
      <rect x="76" y="45" width="12" height="47" rx="3" fill="url(#chart1Grad)" />
      <rect x="93" y="55" width="12" height="37" rx="3" fill="url(#chart2Grad)" />

      {/* Card 2 - Line Chart */}
      <rect x="142" y="20" width="120" height="85" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <rect x="152" y="30" width="40" height="3" rx="1.5" fill="#f97316" opacity="0.5" />
      <rect x="152" y="36" width="25" height="2" rx="1" fill="#fdba74" />

      {/* Grid lines */}
      <line x1="152" y1="55" x2="252" y2="55" stroke="#e2e8f0" strokeWidth="0.8" />
      <line x1="152" y1="65" x2="252" y2="65" stroke="#e2e8f0" strokeWidth="0.8" />
      <line x1="152" y1="75" x2="252" y2="75" stroke="#e2e8f0" strokeWidth="0.8" />
      <line x1="152" y1="85" x2="252" y2="85" stroke="#e2e8f0" strokeWidth="0.8" />

      {/* Line */}
      <polyline
        points="152,85 172,70 192,78 212,55 232,60 252,48"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Area fill */}
      <polygon
        points="152,85 172,70 192,78 212,55 232,60 252,48 252,95 152,95"
        fill="#f97316"
        opacity="0.08"
      />

      {/* Dots */}
      <circle cx="152" cy="85" r="3" fill="white" stroke="#f97316" strokeWidth="2" />
      <circle cx="172" cy="70" r="3" fill="white" stroke="#f97316" strokeWidth="2" />
      <circle cx="192" cy="78" r="3" fill="white" stroke="#f97316" strokeWidth="2" />
      <circle cx="212" cy="55" r="3" fill="white" stroke="#f97316" strokeWidth="2" />
      <circle cx="232" cy="60" r="3" fill="white" stroke="#f97316" strokeWidth="2" />
      <circle cx="252" cy="48" r="3" fill="white" stroke="#f97316" strokeWidth="2" />

      {/* Card 3 - Donut */}
      <rect x="275" y="20" width="110" height="85" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <rect x="285" y="30" width="30" height="3" rx="1.5" fill="#10b981" opacity="0.5" />
      <rect x="285" y="36" width="22" height="2" rx="1" fill="#a7f3d0" />

      {/* Donut chart */}
      <circle cx="330" cy="68" r="22" fill="none" stroke="#e2e8f0" strokeWidth="8" />
      <circle cx="330" cy="68" r="22" fill="none" stroke="#4f46e5" strokeWidth="8" strokeDasharray="50 88" strokeLinecap="round" transform="rotate(-90 330 68)" />
      <circle cx="330" cy="68" r="22" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="30 108" strokeDashoffset="-50" strokeLinecap="round" transform="rotate(-90 330 68)" />
      <circle cx="330" cy="68" r="22" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="25 113" strokeDashoffset="-80" strokeLinecap="round" transform="rotate(-90 330 68)" />
      <circle cx="330" cy="68" r="14" fill="white" />
      <text x="330" y="66" textAnchor="middle" fill="#1e1b4b" fontSize="8" fontWeight="bold" fontFamily="Arial">75%</text>
      <text x="330" y="76" textAnchor="middle" fill="#6b7280" fontSize="5" fontFamily="Arial">Total</text>

      {/* Bottom stat cards */}
      <rect x="15" y="115" width="85" height="70" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <circle cx="35" cy="135" r="10" fill="#4f46e5" opacity="0.1" />
      <rect x="30" y="130" width="10" height="10" rx="2" fill="url(#chart1Grad)" />
      <rect x="52" y="130" width="35" height="4" rx="2" fill="#c7d2fe" />
      <rect x="52" y="138" width="25" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="25" y="155" width="60" height="3" rx="1.5" fill="#10b981" opacity="0.3" />
      <rect x="25" y="162" width="45" height="3" rx="1.5" fill="#10b981" opacity="0.2" />

      <rect x="112" y="115" width="85" height="70" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <circle cx="132" cy="135" r="10" fill="#f97316" opacity="0.1" />
      <rect x="127" y="130" width="10" height="10" rx="2" fill="url(#chart2Grad)" />
      <rect x="149" y="130" width="35" height="4" rx="2" fill="#fdba74" />
      <rect x="149" y="138" width="25" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="122" y="155" width="60" height="3" rx="1.5" fill="#f97316" opacity="0.3" />
      <rect x="122" y="162" width="45" height="3" rx="1.5" fill="#f97316" opacity="0.2" />

      <rect x="209" y="115" width="85" height="70" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <circle cx="229" cy="135" r="10" fill="#10b981" opacity="0.1" />
      <rect x="224" y="130" width="10" height="10" rx="2" fill="url(#chart3Grad)" />
      <rect x="246" y="130" width="35" height="4" rx="2" fill="#a7f3d0" />
      <rect x="246" y="138" width="25" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="219" y="155" width="60" height="3" rx="1.5" fill="#10b981" opacity="0.3" />
      <rect x="219" y="162" width="45" height="3" rx="1.5" fill="#10b981" opacity="0.2" />

      <rect x="306" y="115" width="85" height="70" rx="8" fill="url(#dashCardGrad)" filter="url(#dashShadow)" />
      <circle cx="326" cy="135" r="10" fill="#6366f1" opacity="0.1" />
      <rect x="321" y="130" width="10" height="10" rx="2" fill="#6366f1" />
      <rect x="343" y="130" width="35" height="4" rx="2" fill="#a5b4fc" />
      <rect x="343" y="138" width="25" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="316" y="155" width="60" height="3" rx="1.5" fill="#6366f1" opacity="0.3" />
      <rect x="316" y="162" width="45" height="3" rx="1.5" fill="#6366f1" opacity="0.2" />
    </svg>
  );
}

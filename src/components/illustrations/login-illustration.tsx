interface LoginIllustrationProps {
  className?: string;
}

export default function LoginIllustration({ className }: LoginIllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="loginBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="lampGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="loginShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#loginBg)" rx="12" />

      {/* Decorative circles */}
      <circle cx="350" cy="50" r="60" fill="#818cf8" opacity="0.1" />
      <circle cx="50" cy="250" r="50" fill="#f97316" opacity="0.1" />
      <circle cx="380" cy="250" r="30" fill="#6366f1" opacity="0.08" />

      {/* Desk */}
      <rect x="60" y="200" width="280" height="15" rx="4" fill="url(#deskGrad)" filter="url(#loginShadow)" />
      <rect x="80" y="215" width="10" height="60" rx="2" fill="#78350f" />
      <rect x="310" y="215" width="10" height="60" rx="2" fill="#78350f" />

      {/* Chair */}
      <rect x="155" y="215" width="60" height="8" rx="2" fill="#4f46e5" />
      <rect x="155" y="223" width="6" height="50" rx="2" fill="#312e81" />
      <rect x="209" y="223" width="6" height="50" rx="2" fill="#312e81" />
      <rect x="150" y="170" width="10" height="50" rx="3" fill="#4f46e5" />
      <rect x="150" y="165" width="70" height="10" rx="3" fill="#6366f1" />

      {/* Person body */}
      <rect x="160" y="185" width="50" height="35" rx="6" fill="url(#shirtGrad)" />

      {/* Arms */}
      <rect x="140" y="190" width="25" height="10" rx="5" fill="url(#shirtGrad)" />
      <rect x="205" y="190" width="25" height="10" rx="5" fill="url(#shirtGrad)" />

      {/* Hands */}
      <circle cx="140" cy="195" r="5" fill="#fdba74" />
      <circle cx="230" cy="195" r="5" fill="#fdba74" />

      {/* Head */}
      <circle cx="185" cy="165" r="22" fill="#fdba74" />

      {/* Hair */}
      <path d="M163 160 Q165 140 185 138 Q205 140 207 160" fill="#1e1b4b" />
      <ellipse cx="163" cy="162" rx="5" ry="8" fill="#1e1b4b" />
      <ellipse cx="207" cy="162" rx="5" ry="8" fill="#1e1b4b" />

      {/* Face */}
      <circle cx="178" cy="168" r="2.5" fill="#1e1b4b" />
      <circle cx="192" cy="168" r="2.5" fill="#1e1b4b" />
      <path d="M180 176 Q185 180 190 176" stroke="#1e1b4b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Eyes shine */}
      <circle cx="177" cy="167" r="0.8" fill="white" />
      <circle cx="191" cy="167" r="0.8" fill="white" />

      {/* Graduation cap */}
      <polygon points="165,148 185,138 205,148 185,155" fill="url(#capGrad)" />
      <rect x="183" y="135" width="4" height="8" fill="#1e1b4b" />
      <circle cx="185" cy="134" r="3" fill="#f97316" />
      <line x1="185" y1="134" x2="195" y2="125" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="195" cy="124" r="2" fill="#fdba74" />

      {/* Tassel */}
      <line x1="195" y1="124" x2="198" y2="135" stroke="#f97316" strokeWidth="1" />

      {/* Laptop */}
      <rect x="220" y="175" width="70" height="45" rx="4" fill="url(#laptopGrad)" filter="url(#loginShadow)" />
      <rect x="224" y="178" width="62" height="35" rx="2" fill="#1e1b4b" />

      {/* Screen content */}
      <rect x="228" y="182" width="54" height="2" rx="1" fill="#818cf8" opacity="0.5" />
      <rect x="228" y="188" width="40" height="2" rx="1" fill="#6366f1" opacity="0.4" />
      <rect x="228" y="194" width="50" height="2" rx="1" fill="#818cf8" opacity="0.3" />
      <rect x="228" y="200" width="30" height="2" rx="1" fill="#6366f1" opacity="0.3" />
      {/* Screen graph */}
      <polyline points="230,212 240,205 250,208 260,198 270,202 280,195" stroke="#10b981" strokeWidth="1.5" fill="none" />

      {/* Laptop base */}
      <rect x="215" y="220" width="80" height="5" rx="2" fill="#312e81" />

      {/* Books stack left */}
      <rect x="70" y="185" width="40" height="10" rx="2" fill="#f97316" />
      <rect x="72" y="177" width="38" height="10" rx="2" fill="#6366f1" />
      <rect x="71" y="169" width="39" height="10" rx="2" fill="#10b981" />

      {/* Open book on desk */}
      <g transform="translate(100, 192)">
        <path d="M0 5 Q15 -2 30 5 L30 18 Q15 11 0 18Z" fill="white" />
        <path d="M30 5 Q45 -2 60 5 L60 18 Q45 11 30 18Z" fill="#f8fafc" />
        <line x1="30" y1="5" x2="30" y2="18" stroke="#d1d5db" strokeWidth="1" />
        <line x1="5" y1="9" x2="25" y2="9" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
        <line x1="5" y1="12" x2="20" y2="12" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
        <line x1="5" y1="15" x2="22" y2="15" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
        <line x1="35" y1="9" x2="55" y2="9" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
        <line x1="35" y1="12" x2="50" y2="12" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
        <line x1="35" y1="15" x2="52" y2="15" stroke="#818cf8" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Lamp */}
      <rect x="325" y="175" width="4" height="25" rx="2" fill="#6b7280" />
      <rect x="315" y="200" width="24" height="3" rx="1.5" fill="#6b7280" />
      <polygon points="310,175 340,175 335,160 315,160" fill="url(#lampGrad)" />
      {/* Light glow */}
      <ellipse cx="327" cy="170" rx="15" ry="20" fill="#f97316" opacity="0.08" />

      {/* Coffee mug */}
      <rect x="305" y="188" width="14" height="14" rx="3" fill="white" />
      <path d="M319 192 Q325 192 325 198 Q325 204 319 204" stroke="#d1d5db" strokeWidth="1.5" fill="none" />
      {/* Steam */}
      <path d="M309 185 Q311 180 309 175" stroke="#d1d5db" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M313 186 Q315 181 313 176" stroke="#d1d5db" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Floating elements */}
      <g opacity="0.4">
        <circle cx="50" cy="80" r="15" fill="#818cf8" />
        <circle cx="50" cy="80" r="8" fill="#a5b4fc" />
      </g>
      <g opacity="0.3">
        <circle cx="350" cy="120" r="10" fill="#f97316" />
        <circle cx="350" cy="120" r="5" fill="#fdba74" />
      </g>

      {/* WiFi symbol on screen */}
      <g transform="translate(245, 215)" opacity="0.5">
        <path d="M5 0 Q10 -3 15 0" stroke="#10b981" strokeWidth="1.2" fill="none" />
        <path d="M2 3 Q10 -2 18 3" stroke="#10b981" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="5" r="1.5" fill="#10b981" />
      </g>

      {/* Decorative dots */}
      <circle cx="30" cy="40" r="2" fill="#f97316" opacity="0.3" />
      <circle cx="380" cy="80" r="2" fill="#6366f1" opacity="0.3" />
      <circle cx="20" cy="150" r="1.5" fill="#818cf8" opacity="0.3" />
      <circle cx="370" cy="270" r="2" fill="#f97316" opacity="0.3" />
    </svg>
  );
}

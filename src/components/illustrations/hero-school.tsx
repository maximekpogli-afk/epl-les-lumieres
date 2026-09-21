interface HeroSchoolProps {
  className?: string;
}

export default function HeroSchool({ className }: HeroSchoolProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="treeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="bookGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="bookGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Sky background */}
      <rect width="600" height="400" fill="url(#sky)" rx="12" />

      {/* Sun */}
      <circle cx="520" cy="70" r="45" fill="url(#sunGrad)" filter="url(#shadow)" />
      <circle cx="520" cy="70" r="35" fill="#fdba74" opacity="0.6" />
      {/* Sun rays */}
      <g stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="520" y1="15" x2="520" y2="5" />
        <line x1="520" y1="125" x2="520" y2="135" />
        <line x1="465" y1="70" x2="455" y2="70" />
        <line x1="575" y1="70" x2="585" y2="70" />
        <line x1="481" y1="31" x2="474" y2="24" />
        <line x1="559" y1="109" x2="566" y2="116" />
        <line x1="481" y1="109" x2="474" y2="116" />
        <line x1="559" y1="31" x2="566" y2="24" />
      </g>

      {/* Clouds */}
      <g opacity="0.7">
        <ellipse cx="120" cy="60" rx="50" ry="20" fill="white" />
        <ellipse cx="100" cy="55" rx="30" ry="18" fill="white" />
        <ellipse cx="145" cy="55" rx="35" ry="16" fill="white" />
      </g>
      <g opacity="0.5">
        <ellipse cx="350" cy="45" rx="40" ry="16" fill="white" />
        <ellipse cx="335" cy="40" rx="25" ry="14" fill="white" />
        <ellipse cx="370" cy="40" rx="28" ry="12" fill="white" />
      </g>

      {/* Ground / grass */}
      <path d="M0 300 Q150 280 300 295 Q450 310 600 290 L600 400 L0 400Z" fill="url(#grassGrad)" />
      <path d="M0 310 Q150 295 300 308 Q450 320 600 305 L600 400 L0 400Z" fill="#059669" opacity="0.5" />

      {/* Path to school */}
      <path d="M250 400 Q270 350 280 310 L320 310 Q330 350 350 400Z" fill="#d1d5db" />
      <path d="M255 400 Q273 350 283 310 L317 310 Q327 350 345 400Z" fill="#e5e7eb" />

      {/* Main school building */}
      <rect x="180" y="180" width="240" height="130" rx="4" fill="url(#buildingGrad)" filter="url(#shadow)" />

      {/* Roof */}
      <polygon points="170,180 300,120 430,180" fill="url(#roofGrad)" />
      <polygon points="175,180 300,125 425,180" fill="#f97316" opacity="0.7" />

      {/* Roof peak decoration */}
      <circle cx="300" cy="125" r="8" fill="#fdba74" />
      <polygon points="300,110 303,118 297,118" fill="#f97316" />

      {/* Windows row 1 */}
      <rect x="200" y="200" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="203" y="203" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />
      <rect x="250" y="200" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="253" y="203" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />
      <rect x="320" y="200" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="323" y="203" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />
      <rect x="370" y="200" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="373" y="203" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />

      {/* Windows row 2 */}
      <rect x="200" y="250" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="203" y="253" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />
      <rect x="370" y="250" width="30" height="30" rx="3" fill="url(#windowGrad)" />
      <rect x="373" y="253" width="12" height="12" rx="1" fill="#e0e7ff" opacity="0.6" />

      {/* Door */}
      <rect x="275" y="260" width="50" height="50" rx="4" fill="#1e1b4b" />
      <rect x="278" y="263" width="44" height="44" rx="3" fill="#312e81" />
      <circle cx="315" cy="285" r="3" fill="#fdba74" />

      {/* Clock on building */}
      <circle cx="300" cy="165" r="14" fill="white" />
      <circle cx="300" cy="165" r="12" fill="#f0f0f0" />
      <line x1="300" y1="165" x2="300" y2="157" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />
      <line x1="300" y1="165" x2="306" y2="168" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="300" cy="165" r="1.5" fill="#f97316" />

      {/* Flag pole */}
      <line x1="420" y1="180" x2="420" y2="100" stroke="#6b7280" strokeWidth="2" />
      <rect x="422" y="100" width="25" height="16" rx="2" fill="#f97316" />
      <rect x="422" y="100" width="25" height="5" rx="2" fill="#fdba74" />

      {/* Trees left */}
      <rect x="85" y="260" width="12" height="50" rx="3" fill="#92400e" />
      <circle cx="91" cy="245" r="30" fill="url(#treeGrad)" />
      <circle cx="75" cy="255" r="22" fill="#34d399" opacity="0.8" />
      <circle cx="107" cy="250" r="25" fill="#059669" opacity="0.7" />

      {/* Trees right */}
      <rect x="490" y="265" width="10" height="45" rx="3" fill="#92400e" />
      <circle cx="495" cy="252" r="26" fill="url(#treeGrad)" />
      <circle cx="480" cy="260" r="20" fill="#34d399" opacity="0.8" />
      <circle cx="510" cy="255" r="22" fill="#059669" opacity="0.7" />

      {/* Small bush left */}
      <ellipse cx="150" cy="300" rx="20" ry="12" fill="#10b981" />
      <ellipse cx="140" cy="298" rx="14" ry="10" fill="#34d399" opacity="0.8" />

      {/* Small bush right */}
      <ellipse cx="450" cy="305" rx="18" ry="10" fill="#10b981" />
      <ellipse cx="460" cy="302" rx="12" ry="8" fill="#34d399" opacity="0.8" />

      {/* Student 1 - walking */}
      <circle cx="200" cy="330" r="10" fill="#fdba74" />
      <rect x="194" y="340" width="12" height="20" rx="3" fill="#6366f1" />
      <rect x="192" y="360" width="6" height="14" rx="2" fill="#1e1b4b" />
      <rect x="199" y="360" width="6" height="14" rx="2" fill="#1e1b4b" />
      <line x1="194" y1="348" x2="186" y2="355" stroke="#fdba74" strokeWidth="3" strokeLinecap="round" />
      <line x1="206" y1="348" x2="214" y2="342" stroke="#fdba74" strokeWidth="3" strokeLinecap="round" />
      {/* Hair */}
      <path d="M190 328 Q200 320 210 328" fill="#1e1b4b" />

      {/* Student 2 - with backpack */}
      <circle cx="380" cy="335" r="10" fill="#fdba74" />
      <rect x="374" y="345" width="12" height="18" rx="3" fill="#f97316" />
      <rect x="372" y="363" width="6" height="12" rx="2" fill="#1e1b4b" />
      <rect x="379" y="363" width="6" height="12" rx="2" fill="#1e1b4b" />
      {/* Backpack */}
      <rect x="385" y="346" width="8" height="12" rx="2" fill="#4338ca" />
      {/* Hair */}
      <ellipse cx="380" cy="330" rx="10" ry="5" fill="#1e1b4b" />

      {/* Floating books */}
      <g transform="translate(50, 150) rotate(-10)">
        <rect width="40" height="30" rx="3" fill="url(#bookGrad1)" />
        <rect x="2" y="2" width="36" height="26" rx="2" fill="#6366f1" />
        <line x1="5" y1="8" x2="35" y2="8" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="5" y1="14" x2="25" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="5" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1.5" opacity="0.5" />
      </g>

      <g transform="translate(510, 180) rotate(8)">
        <rect width="35" height="25" rx="3" fill="url(#bookGrad2)" />
        <rect x="2" y="2" width="31" height="21" rx="2" fill="#f97316" />
        <line x1="5" y1="8" x2="30" y2="8" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="5" y1="13" x2="22" y2="13" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="5" y1="18" x2="27" y2="18" stroke="white" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Floating pencil */}
      <g transform="translate(470, 120) rotate(25)">
        <rect x="0" y="0" width="8" height="35" rx="1" fill="#f97316" />
        <rect x="0" y="0" width="8" height="6" rx="1" fill="#fdba74" />
        <polygon points="0,35 8,35 4,42" fill="#fdba74" />
        <rect x="1" y="30" width="6" height="5" fill="#1e1b4b" opacity="0.3" />
      </g>

      {/* Stars / sparkles */}
      <g fill="#f97316" opacity="0.6">
        <polygon points="550,150 552,156 558,156 553,160 555,166 550,162 545,166 547,160 542,156 548,156" />
        <polygon points="80,100 81,103 84,103 82,105 83,108 80,106 77,108 78,105 76,103 79,103" />
      </g>
      <g fill="#818cf8" opacity="0.5">
        <polygon points="560,220 561,223 564,223 562,225 563,228 560,226 557,228 558,225 556,223 559,223" />
        <polygon points="30,200 31,202 33,202 32,204 32,206 30,205 28,206 28,204 27,202 29,202" />
      </g>

      {/* Ground flowers */}
      <g>
        <circle cx="120" cy="310" r="4" fill="#f97316" />
        <circle cx="120" cy="310" r="2" fill="#fdba74" />
        <circle cx="160" cy="305" r="3" fill="#818cf8" />
        <circle cx="160" cy="305" r="1.5" fill="#a5b4fc" />
        <circle cx="460" cy="315" r="4" fill="#f97316" />
        <circle cx="460" cy="315" r="2" fill="#fdba74" />
        <circle cx="500" cy="308" r="3" fill="#818cf8" />
        <circle cx="500" cy="308" r="1.5" fill="#a5b4fc" />
        <circle cx="340" cy="385" r="3" fill="#f97316" opacity="0.7" />
        <circle cx="340" cy="385" r="1.5" fill="#fdba74" opacity="0.7" />
      </g>

      {/* School sign */}
      <rect x="240" y="310" width="120" height="22" rx="4" fill="white" filter="url(#shadow)" />
      <rect x="242" y="312" width="116" height="18" rx="3" fill="#4f46e5" />
      <text x="300" y="325" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">
        EPL LES LUMIÈRES
      </text>
    </svg>
  );
}

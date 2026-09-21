interface EmptyStateProps {
  className?: string;
}

export default function EmptyState({ className }: EmptyStateProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="emptyBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="folderGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="folderTabGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="magnifyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="paperGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <filter id="emptyShadow" x="-15%" y="-15%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="200" height="200" fill="url(#emptyBg)" rx="12" />

      {/* Decorative circles */}
      <circle cx="170" cy="30" r="25" fill="#818cf8" opacity="0.1" />
      <circle cx="30" cy="170" r="20" fill="#f97316" opacity="0.1" />

      {/* Folder back */}
      <rect x="40" y="70" width="120" height="85" rx="6" fill="url(#folderGrad)" filter="url(#emptyShadow)" />

      {/* Folder tab */}
      <path d="M40 76 L40 68 Q40 62 46 62 L75 62 L82 70 L40 70Z" fill="url(#folderTabGrad)" />

      {/* Folder front */}
      <rect x="40" y="95" width="120" height="60" rx="6" fill="#6366f1" />

      {/* Folder line details */}
      <rect x="55" y="105" width="60" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="55" y="112" width="45" height="3" rx="1.5" fill="white" opacity="0.2" />
      <rect x="55" y="119" width="55" height="3" rx="1.5" fill="white" opacity="0.2" />

      {/* Papers peeking out */}
      <rect x="50" y="65" width="35" height="45" rx="3" fill="url(#paperGrad)" />
      <rect x="55" y="72" width="25" height="2" rx="1" fill="#e2e8f0" />
      <rect x="55" y="77" width="20" height="2" rx="1" fill="#e2e8f0" />
      <rect x="55" y="82" width="22" height="2" rx="1" fill="#e2e8f0" />

      <rect x="60" y="60" width="35" height="45" rx="3" fill="white" />
      <rect x="65" y="67" width="25" height="2" rx="1" fill="#e2e8f0" />
      <rect x="65" y="72" width="18" height="2" rx="1" fill="#e2e8f0" />
      <rect x="65" y="77" width="22" height="2" rx="1" fill="#e2e8f0" />

      {/* Magnifying glass */}
      <g transform="translate(95, 85)">
        {/* Handle */}
        <rect x="22" y="22" width="6" height="28" rx="3" fill="url(#magnifyGrad)" transform="rotate(45 25 36)" />

        {/* Glass rim */}
        <circle cx="15" cy="15" r="20" fill="none" stroke="url(#magnifyGrad)" strokeWidth="5" />

        {/* Glass fill */}
        <circle cx="15" cy="15" r="17" fill="white" opacity="0.85" />

        {/* Glass shine */}
        <ellipse cx="8" cy="8" rx="6" ry="4" fill="white" opacity="0.6" transform="rotate(-30 8 8)" />

        {/* Search lines inside */}
        <line x1="8" y1="12" x2="22" y2="12" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="17" x2="18" y2="17" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="22" x2="20" y2="22" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Question mark */}
      <g transform="translate(88, 55)">
        <circle cx="12" cy="12" r="11" fill="#f97316" opacity="0.9" />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">?</text>
      </g>

      {/* Floating dots */}
      <circle cx="35" cy="50" r="3" fill="#818cf8" opacity="0.4" />
      <circle cx="165" cy="45" r="2.5" fill="#f97316" opacity="0.4" />
      <circle cx="175" cy="150" r="2" fill="#6366f1" opacity="0.3" />
      <circle cx="25" cy="130" r="2.5" fill="#818cf8" opacity="0.3" />
      <circle cx="100" cy="165" r="3" fill="#f97316" opacity="0.2" />

      {/* Small stars */}
      <g fill="#f97316" opacity="0.4">
        <polygon points="30,90 31,93 34,93 32,95 33,98 30,96 27,98 28,95 26,93 29,93" />
      </g>
      <g fill="#818cf8" opacity="0.4">
        <polygon points="170,100 171,102 173,102 171.5,104 172,106 170,104.5 168,106 168.5,104 167,102 169,102" />
      </g>

      {/* Bottom text area */}
      <rect x="40" y="165" width="120" height="8" rx="4" fill="#818cf8" opacity="0.2" />
      <rect x="55" y="178" width="90" height="6" rx="3" fill="#818cf8" opacity="0.1" />
    </svg>
  );
}

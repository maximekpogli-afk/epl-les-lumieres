interface SuccessIllustrationProps {
  className?: string;
}

export default function SuccessIllustration({ className }: SuccessIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="successBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
        <linearGradient id="checkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="certGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="sSuccessShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <filter id="successShadow" x="-15%" y="-15%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="200" height="200" fill="url(#successBg)" rx="12" />

      {/* Decorative circles */}
      <circle cx="170" cy="30" r="30" fill="#10b981" opacity="0.1" />
      <circle cx="30" cy="170" r="25" fill="#f97316" opacity="0.1" />

      {/* Big checkmark circle */}
      <circle cx="100" cy="90" r="45" fill="url(#checkGrad)" filter="url(#successShadow)" />
      <circle cx="100" cy="90" r="38" fill="#10b981" />

      {/* Checkmark */}
      <path
        d="M80 90 L94 104 L122 76"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sparkles around checkmark */}
      <g fill="#f97316">
        <polygon points="145,60 147,64 151,64 148,67 149,71 145,68 141,71 142,67 139,64 143,64" />
        <polygon points="55,65 56.5,68 59.5,68 57.5,70 58,73 55,71 52,73 52.5,70 50.5,68 53.5,68" />
      </g>
      <g fill="#10b981">
        <polygon points="155,90 156,92 158,92 156.5,93.5 157,95.5 155,94 153,95.5 153.5,93.5 152,92 154,92" />
        <polygon points="45,85 46,87 48,87 46.5,88.5 47,90.5 45,89 43,90.5 43.5,88.5 42,87 44,87" />
      </g>

      {/* Student character */}
      {/* Body */}
      <rect x="80" y="125" width="40" height="30" rx="6" fill="url(#sSuccessShirt)" />

      {/* Arms raised */}
      <line x1="80" y1="132" x2="60" y2="118" stroke="url(#sSuccessShirt)" strokeWidth="8" strokeLinecap="round" />
      <line x1="120" y1="132" x2="140" y2="118" stroke="url(#sSuccessShirt)" strokeWidth="8" strokeLinecap="round" />

      {/* Hands */}
      <circle cx="58" cy="116" r="5" fill="#fdba74" />
      <circle cx="142" cy="116" r="5" fill="#fdba74" />

      {/* Head */}
      <circle cx="100" cy="115" r="16" fill="#fdba74" />

      {/* Hair */}
      <path d="M84 110 Q86 95 100 93 Q114 95 116 110" fill="#1e1b4b" />
      <ellipse cx="84" cy="112" rx="4" ry="6" fill="#1e1b4b" />
      <ellipse cx="116" cy="112" rx="4" ry="6" fill="#1e1b4b" />

      {/* Happy face */}
      <circle cx="94" cy="117" r="2" fill="#1e1b4b" />
      <circle cx="106" cy="117" r="2" fill="#1e1b4b" />
      <path d="M93 122 Q100 128 107 122" stroke="#1e1b4b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Eyes shine */}
      <circle cx="93" cy="116" r="0.7" fill="white" />
      <circle cx="105" cy="116" r="0.7" fill="white" />

      {/* Blush */}
      <ellipse cx="89" cy="120" rx="3" ry="1.5" fill="#f97316" opacity="0.2" />
      <ellipse cx="111" cy="120" rx="3" ry="1.5" fill="#f97316" opacity="0.2" />

      {/* Certificate */}
      <g transform="translate(55, 108)">
        <rect width="30" height="22" rx="2" fill="white" />
        <rect x="2" y="2" width="26" height="18" rx="1" fill="#fef3c7" />
        <rect x="5" y="5" width="20" height="2" rx="1" fill="#f97316" opacity="0.5" />
        <rect x="5" y="9" width="15" height="1.5" rx="0.75" fill="#d1d5db" />
        <rect x="5" y="12" width="18" height="1.5" rx="0.75" fill="#d1d5db" />
        {/* Seal */}
        <circle cx="22" cy="17" r="3" fill="url(#certGrad)" />
      </g>

      {/* Legs */}
      <rect x="88" y="155" width="10" height="18" rx="3" fill="#1e1b4b" />
      <rect x="102" y="155" width="10" height="18" rx="3" fill="#1e1b4b" />

      {/* Shoes */}
      <rect x="85" y="170" width="14" height="6" rx="3" fill="#312e81" />
      <rect x="101" y="170" width="14" height="6" rx="3" fill="#312e81" />

      {/* Ground */}
      <ellipse cx="100" cy="178" rx="50" ry="5" fill="#10b981" opacity="0.15" />

      {/* Confetti pieces */}
      <rect x="30" y="40" width="4" height="8" rx="1" fill="#f97316" opacity="0.5" transform="rotate(30 30 44)" />
      <rect x="165" y="50" width="4" height="7" rx="1" fill="#6366f1" opacity="0.5" transform="rotate(-20 165 53)" />
      <rect x="25" y="100" width="3" height="6" rx="1" fill="#10b981" opacity="0.4" transform="rotate(45 25 103)" />
      <rect x="170" y="120" width="3" height="6" rx="1" fill="#f97316" opacity="0.4" transform="rotate(-35 170 123)" />

      {/* Small circles confetti */}
      <circle cx="40" cy="70" r="2" fill="#818cf8" opacity="0.5" />
      <circle cx="160" cy="80" r="2" fill="#f97316" opacity="0.5" />
      <circle cx="35" cy="140" r="1.5" fill="#10b981" opacity="0.4" />
      <circle cx="170" cy="150" r="1.5" fill="#6366f1" opacity="0.4" />
    </svg>
  );
}

"use client";

import React from "react";

interface SchoolLogoProps {
  size?: number;
  variant?: "full" | "icon" | "white";
}

export function SchoolLogo({ size = 48, variant = "full" }: SchoolLogoProps) {
  const scale = size / 48;
  const textColor =
    variant === "white" ? "#ffffff" : variant === "icon" ? "transparent" : "#1e1b4b";
  const taglineColor =
    variant === "white" ? "rgba(255,255,255,0.7)" : variant === "icon" ? "transparent" : "#6b7280";
  const primary = "#4f46e5";
  const accent = "#f97316";
  const iconOnly = variant === "icon";

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EPL Les Lumières logo"
    >
      {/* Shield background */}
      <path
        d="M60 8 L105 28 V65 C105 90 85 108 60 115 C35 108 15 90 15 65 V28 Z"
        fill={primary}
        opacity="0.9"
      />

      {/* Shield inner glow */}
      <path
        d="M60 14 L100 32 V65 C100 87 82 103 60 110 C38 103 20 87 20 65 V32 Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* Shield highlight */}
      <path
        d="M60 14 L100 32 V50 C85 45 72 42 60 42 C48 42 35 45 20 50 V32 Z"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Book base - left page */}
      <path
        d="M30 75 L30 58 C30 58 45 55 60 58 L60 75 C60 75 45 72 30 75 Z"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* Book base - right page */}
      <path
        d="M90 75 L90 58 C90 58 75 55 60 58 L60 75 C60 75 75 72 90 75 Z"
        fill="#ffffff"
        opacity="0.85"
      />

      {/* Book spine */}
      <path d="M60 55 L60 78" stroke={primary} strokeWidth="2" opacity="0.6" />

      {/* Book bottom edge */}
      <path
        d="M30 75 L60 78 L90 75"
        stroke={primary}
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Page lines left */}
      <line x1="35" y1="63" x2="55" y2="61" stroke={primary} strokeWidth="0.5" opacity="0.3" />
      <line x1="35" y1="67" x2="55" y2="65" stroke={primary} strokeWidth="0.5" opacity="0.3" />
      <line x1="35" y1="71" x2="55" y2="69" stroke={primary} strokeWidth="0.5" opacity="0.3" />

      {/* Page lines right */}
      <line x1="65" y1="61" x2="85" y2="63" stroke={primary} strokeWidth="0.5" opacity="0.3" />
      <line x1="65" y1="65" x2="85" y2="67" stroke={primary} strokeWidth="0.5" opacity="0.3" />
      <line x1="65" y1="69" x2="85" y2="71" stroke={primary} strokeWidth="0.5" opacity="0.3" />

      {/* Flame - outer glow */}
      <ellipse cx="60" cy="38" rx="10" ry="14" fill={accent} opacity="0.15" />

      {/* Flame - outer shape */}
      <path
        d="M60 18 C63 28 70 32 70 40 C70 45 66 48 60 48 C54 48 50 45 50 40 C50 32 57 28 60 18 Z"
        fill={accent}
        opacity="0.85"
      />

      {/* Flame - inner shape */}
      <path
        d="M60 24 C62 30 66 33 66 38 C66 42 63 44 60 44 C57 44 54 42 54 38 C54 33 58 30 60 24 Z"
        fill="#fbbf24"
        opacity="0.9"
      />

      {/* Flame - core */}
      <path
        d="M60 30 C61 34 63 36 63 38 C63 40 62 41 60 41 C58 41 57 40 57 38 C57 36 59 34 60 30 Z"
        fill="#fef3c7"
        opacity="0.95"
      />

      {/* Flame tip spark */}
      <circle cx="60" cy="20" r="1.5" fill="#fef3c7" opacity="0.8" />

      {/* Light rays - left */}
      <line x1="48" y1="30" x2="42" y2="26" stroke="#fbbf24" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

      {/* Light rays - right */}
      <line x1="72" y1="30" x2="78" y2="26" stroke="#fbbf24" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

      {/* Light rays - top left */}
      <line x1="52" y1="20" x2="48" y2="14" stroke="#fbbf24" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />

      {/* Light rays - top right */}
      <line x1="68" y1="20" x2="72" y2="14" stroke="#fbbf24" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />

      {/* EPL text */}
      <text
        x="60"
        y="98"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="12"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="3"
      >
        EPL
      </text>
    </svg>
  );

  if (iconOnly) {
    return <span className="inline-flex items-center justify-center">{icon}</span>;
  }

  return (
    <span className="inline-flex items-center gap-3">
      {icon}
      <span className="flex flex-col leading-tight">
        <span
          style={{ fontSize: `${Math.max(14, 20 * scale)}px`, color: textColor }}
          className="font-bold tracking-tight"
        >
          EPL Les Lumières
        </span>
        <span
          style={{ fontSize: `${Math.max(9, 11 * scale)}px`, color: taglineColor }}
          className="tracking-wide"
        >
          Excellence et Lumière
        </span>
      </span>
    </span>
  );
}

export default SchoolLogo;

'use client';

interface SunflowerIconProps {
  className?: string;
  size?: number;
}

export default function SunflowerIcon({ className = '', size = 24 }: SunflowerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Petals */}
      <g className="text-sunflower-400">
        <ellipse cx="12" cy="4" rx="2" ry="3" fill="currentColor" />
        <ellipse cx="12" cy="20" rx="2" ry="3" fill="currentColor" />
        <ellipse cx="4" cy="12" rx="3" ry="2" fill="currentColor" />
        <ellipse cx="20" cy="12" rx="3" ry="2" fill="currentColor" />
        <ellipse cx="6.34" cy="6.34" rx="2" ry="3" fill="currentColor" transform="rotate(-45 6.34 6.34)" />
        <ellipse cx="17.66" cy="17.66" rx="2" ry="3" fill="currentColor" transform="rotate(-45 17.66 17.66)" />
        <ellipse cx="6.34" cy="17.66" rx="3" ry="2" fill="currentColor" transform="rotate(-45 6.34 17.66)" />
        <ellipse cx="17.66" cy="6.34" rx="3" ry="2" fill="currentColor" transform="rotate(-45 17.66 6.34)" />
      </g>
      {/* Center */}
      <circle cx="12" cy="12" r="4" className="text-gold-600" fill="currentColor" />
      <circle cx="12" cy="12" r="2.5" className="text-gold-700" fill="currentColor" />
    </svg>
  );
}

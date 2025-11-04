export function SnarkLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Speech bubble with sharp edges */}
      <defs>
        <linearGradient id="snark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>

      {/* Main bubble - sharp/angular */}
      <path
        d="M20 25 L75 25 L85 15 L85 25 L95 35 L85 45 L85 70 L25 70 L15 80 L15 70 L5 60 L15 50 L15 25 L20 25 Z"
        fill="url(#snark-gradient)"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="miter"
      />

      {/* Exclamation mark inside */}
      <rect x="45" y="35" width="10" height="20" fill="white" rx="2" />
      <circle cx="50" cy="60" r="5" fill="white" />
    </svg>
  );
}

export function SnarkLogoSimple({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="snark-simple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>

      {/* Lightning bolt style S */}
      <path
        d="M60 10 L30 45 H50 L40 90 L70 55 H50 L60 10 Z"
        fill="url(#snark-simple-gradient)"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

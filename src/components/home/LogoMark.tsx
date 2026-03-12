interface LogoMarkProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export default function LogoMark({ size = 200, animate = true, className = '' }: LogoMarkProps) {
  const gold = '#c9a227';
  const emerald = '#10b981';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 170"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Seed gradient */}
        <linearGradient id="sf-seedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold} stopOpacity="0.9" />
          <stop offset="50%" stopColor="#d4a843" stopOpacity="1" />
          <stop offset="100%" stopColor="#a17c1a" stopOpacity="0.8" />
        </linearGradient>

        {/* Sprout gradient */}
        <linearGradient id="sf-sproutGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={emerald} />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>

        {/* Leaf gradient */}
        <linearGradient id="sf-leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        {/* Glow filter (stronger, wider) */}
        <filter id="sf-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft radial background glow */}
        <radialGradient id="sf-bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={emerald} stopOpacity="0.1" />
          <stop offset="60%" stopColor={emerald} stopOpacity="0.04" />
          <stop offset="100%" stopColor={emerald} stopOpacity="0" />
        </radialGradient>

        {/* Wider ambient glow */}
        <radialGradient id="sf-ambientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={emerald} stopOpacity="0.06" />
          <stop offset="50%" stopColor={gold} stopOpacity="0.03" />
          <stop offset="100%" stopColor={emerald} stopOpacity="0" />
        </radialGradient>

        {/* Seed highlight filter */}
        <filter id="sf-seedGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Large ambient glow behind everything */}
      <circle cx="100" cy="85" r="95" fill="url(#sf-ambientGlow)" />

      {/* Soft radial glow behind logo */}
      <circle cx="100" cy="85" r="80" fill="url(#sf-bgGlow)" />

      {/* Outer hexagonal ring */}
      <polygon
        points="100,18 165,52 165,118 100,152 35,118 35,52"
        fill="none"
        stroke={gold}
        strokeWidth="1.5"
        opacity="0.3"
      >
        {animate && (
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
        )}
      </polygon>

      {/* Inner hexagonal ring */}
      <polygon
        points="100,35 150,60 150,110 100,135 50,110 50,60"
        fill="none"
        stroke={gold}
        strokeWidth="1"
        opacity="0.15"
      >
        {animate && (
          <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3s" repeatCount="indefinite" />
        )}
      </polygon>

      {/* Circuit lines */}
      <g opacity="0.15" stroke={emerald} strokeWidth="0.5">
        <line x1="35" y1="52" x2="15" y2="52" />
        <line x1="165" y1="52" x2="185" y2="52" />
        <line x1="35" y1="118" x2="15" y2="118" />
        <line x1="165" y1="118" x2="185" y2="118" />
        <line x1="100" y1="18" x2="100" y2="5" />
        <line x1="100" y1="152" x2="100" y2="165" />
      </g>

      {/* Seed body (faceted diamond) */}
      <path
        d="M100,70 L130,100 L100,145 L70,100 Z"
        fill="url(#sf-seedGrad)"
        opacity="0.9"
        filter="url(#sf-seedGlow)"
      />

      {/* Facet lines */}
      <line x1="100" y1="70" x2="100" y2="145" stroke={gold} strokeWidth="0.5" opacity="0.3" />
      <line x1="70" y1="100" x2="130" y2="100" stroke={gold} strokeWidth="0.5" opacity="0.2" />
      <line x1="100" y1="70" x2="85" y2="122" stroke={gold} strokeWidth="0.3" opacity="0.15" />
      <line x1="100" y1="70" x2="115" y2="122" stroke={gold} strokeWidth="0.3" opacity="0.15" />

      {/* Seed highlight */}
      <path
        d="M100,74 L110,90 L100,100 L90,90 Z"
        fill="white"
        opacity="0.15"
      />

      {/* Sprout stem */}
      <path
        d="M100,70 C100,55 98,40 100,25"
        fill="none"
        stroke="url(#sf-sproutGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#sf-glow)"
      >
        {animate && (
          <animate attributeName="stroke-width" values="2.5;3;2.5" dur="2s" repeatCount="indefinite" />
        )}
      </path>

      {/* Left leaf */}
      <path
        d="M100,45 C90,38 78,36 72,40 C78,42 88,44 100,45"
        fill="url(#sf-leafGrad)"
        opacity="0.85"
        filter="url(#sf-glow)"
      >
        {animate && (
          <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
        )}
      </path>

      {/* Right leaf */}
      <path
        d="M100,35 C110,28 122,26 128,30 C122,32 112,34 100,35"
        fill="url(#sf-leafGrad)"
        opacity="0.85"
        filter="url(#sf-glow)"
      >
        {animate && (
          <animate attributeName="opacity" values="0.85;0.7;0.85" dur="2.5s" repeatCount="indefinite" />
        )}
      </path>

      {/* Energy dots at hex vertices */}
      {[
        { cx: 100, cy: 18 },
        { cx: 165, cy: 52 },
        { cx: 165, cy: 118 },
        { cx: 100, cy: 152 },
        { cx: 35, cy: 118 },
        { cx: 35, cy: 52 },
      ].map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          fill={emerald}
          opacity="0.6"
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          )}
        </circle>
      ))}

      {/* Forge sparks */}
      {animate && (
        <g opacity="0.7">
          <circle cx="95" cy="68" r="1.5" fill={gold}>
            <animate attributeName="cy" values="68;55;68" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="105" cy="65" r="1.2" fill={emerald}>
            <animate attributeName="cy" values="65;50;65" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="72" r="1.7" fill={gold}>
            <animate attributeName="cy" values="72;58;72" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="92" cy="70" r="1.0" fill={emerald}>
            <animate attributeName="cy" values="70;52;70" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="108" cy="69" r="1.3" fill={gold}>
            <animate attributeName="cy" values="69;54;69" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
    </svg>
  );
}

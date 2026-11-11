type CircuitPatternProps = {
  className?: string;
};

export function CircuitPattern({ className = "" }: CircuitPatternProps) {
  return (
    <div className={`circuit-veil ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="circuit-fade" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.35" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#circuit-fade)" strokeWidth="1">
          <path d="M0 138H158L198 178H326L364 140H468" />
          <path d="M0 492H94L138 448H242L282 488H402L446 444H558" />
          <path d="M1200 212H1068L1024 256H886L844 214H742" />
          <path d="M1200 562H1094L1050 606H924L886 568H786" />
          <path d="M594 0V96L632 134V226" />
          <path d="M690 700V604L652 566V474" />
          <path d="M386 700V620L338 572V500" />
          <path d="M842 0V74L880 112V180" />
          <path className="circuit-flow" d="M158 138H326M1024 256H886M652 566V474M338 572V500" />
        </g>
        <g fill="currentColor">
          <circle cx="198" cy="178" r="2.5" opacity="0.65" />
          <circle cx="326" cy="138" r="3.5" opacity="0.8" />
          <circle cx="468" cy="140" r="2" opacity="0.5" />
          <circle cx="1024" cy="256" r="3.5" opacity="0.8" />
          <circle cx="886" cy="214" r="2" opacity="0.5" />
          <circle cx="338" cy="572" r="3" opacity="0.7" />
          <circle cx="652" cy="566" r="3" opacity="0.7" />
          <circle cx="94" cy="492" r="2" opacity="0.4" />
          <circle cx="1094" cy="562" r="2" opacity="0.4" />
          <circle cx="632" cy="134" r="2.5" opacity="0.55" />
          <circle cx="880" cy="112" r="2.5" opacity="0.55" />
        </g>
        <g stroke="currentColor" strokeOpacity="0.28" strokeWidth="1">
          <rect x="329" y="135" width="6" height="6" />
          <rect x="1027" y="253" width="6" height="6" />
          <rect x="335" y="569" width="6" height="6" />
          <rect x="649" y="563" width="6" height="6" />
        </g>
      </svg>
    </div>
  );
}

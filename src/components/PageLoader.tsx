export function PageLoader() {
  return (
    <div className="flex min-h-[64vh] flex-col items-center justify-center gap-5 px-6 py-24">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full border border-cyber-500/20" />
        <span className="absolute inset-2 animate-spin rounded-full border border-cyber-500/30 border-t-cyber-500" />
        <img src="/brand/logo-emblem.webp" alt="" className="h-9 w-auto opacity-80" />
      </div>
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-dim">Loading secure workspace</p>
    </div>
  );
}

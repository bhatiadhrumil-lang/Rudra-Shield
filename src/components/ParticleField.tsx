import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let frame = 0;
    let isVisible = true;
    let resizeTimer = 0;

    const createParticles = () => {
      const count = Math.min(68, Math.max(22, Math.round((width * height) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.4 + 0.12,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        if (particle.alpha <= 0) continue;
        context.beginPath();
        context.fillStyle = `rgba(87, 208, 255, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120) {
            context.beginPath();
            context.strokeStyle = `rgba(72, 190, 255, ${(1 - distance / 120) * 0.09})`;
            context.lineWidth = 0.6;
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }
    };

    const step = () => {
      if (!isVisible) {
        frame = 0;
        return;
      }
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }
      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (!frame && isVisible && !prefersReducedMotion) {
        frame = requestAnimationFrame(step);
      }
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (prefersReducedMotion) draw();
      }, 160);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        start();
      }
    };

    resize();
    if (prefersReducedMotion) {
      draw();
    } else {
      start();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) {
          start();
        } else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(canvas);
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

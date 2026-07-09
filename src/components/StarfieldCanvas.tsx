"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleDir: 1 | -1;
}

export interface StarfieldCanvasProps {
  /**
   * Number of stars to render. Default: 180.
   * Reduce for lower-end devices or denser backgrounds.
   */
  starCount?: number;
  /**
   * Twinkle speed multiplier (default 1.0).
   * Higher values = faster, more noticeable twinkle.
   */
  speed?: number;
  /** Additional CSS class names applied to the <canvas> element. */
  className?: string;
}

/**
 * StarfieldCanvas
 *
 * A lightweight canvas-based animated starfield for use as a background layer.
 * Renders twinkling star particles against a transparent surface — compose it
 * inside any `relative overflow-hidden` container.
 *
 * Reduced-motion: if `prefers-reduced-motion: reduce` is active, the stars are
 * drawn once as a static snapshot and animation is skipped entirely.
 *
 * Usage:
 * ```tsx
 * <section className="relative overflow-hidden">
 *   <StarfieldCanvas starCount={180} speed={1.0} />
 *   <div className="relative z-10">…content…</div>
 * </section>
 * ```
 */
export default function StarfieldCanvas({
  starCount = 180,
  speed = 1.0,
  className = "",
}: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let rafId = 0;

    function buildStars(width: number, height: number) {
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        // Mix small pinpoints with occasional slightly larger ones
        radius:
          Math.random() < 0.85
            ? Math.random() * 0.6 + 0.2
            : Math.random() * 0.8 + 0.8,
        alpha: Math.random(),
        twinkleSpeed: (Math.random() * 0.005 + 0.001) * speed,
        twinkleDir: (Math.random() < 0.5 ? 1 : -1) as 1 | -1,
      }));
    }

    function drawFrame(animate: boolean) {
      if (!ctx) return;
      const { width, height } = canvas!;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        if (animate) {
          star.alpha += star.twinkleSpeed * star.twinkleDir;
          if (star.alpha >= 1) {
            star.alpha = 1;
            star.twinkleDir = -1;
          } else if (star.alpha <= 0.04) {
            star.alpha = 0.04;
            star.twinkleDir = 1;
          }
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Icy starlight: sky-100 blue-white
        ctx.fillStyle = `rgba(224, 242, 254, ${star.alpha})`;
        ctx.fill();
      }
    }

    function sync() {
      const { width, height } = canvas!.getBoundingClientRect();
      canvas!.width = width;
      canvas!.height = height;
      buildStars(width, height);
      if (prefersReduced) {
        drawFrame(false);
      }
    }

    sync();

    if (!prefersReduced) {
      const tick = () => {
        drawFrame(true);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(sync);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}

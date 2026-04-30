"use client";

import { useEffect, useState } from "react";

/**
 * BackgroundDebug
 *
 * A small dev-only indicator that shows whether the WebGL nebula is active
 * or if the CSS fallback is being displayed.
 *
 * Activate by appending `?debug=bg` to any page URL.
 * Automatically hidden in production unless the query param is present.
 */
type BgMode = "webgl" | "reduced-motion" | "no-webgl" | "detecting";

interface DebugState {
  visible: boolean;
  mode: BgMode;
}

export default function BackgroundDebug() {
  const [state, setState] = useState<DebugState>({ visible: false, mode: "detecting" });

  useEffect(() => {
    // Only show when ?debug=bg is in the URL
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug") !== "bg") return;

    // Compute initial state outside of synchronous setState calls
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");

    const initialMode: BgMode = prefersReduced ? "reduced-motion" : !gl ? "no-webgl" : "detecting";

    // Defer first setState to avoid synchronous-setState-in-effect lint warning
    const initTimer = setTimeout(() => {
      setState({ visible: true, mode: initialMode });
    }, 0);

    if (prefersReduced || !gl) return () => clearTimeout(initTimer);

    // WebGL available — confirm once canvas actually mounts
    let attempts = 0;
    let confirmTimer: ReturnType<typeof setTimeout>;

    const checkCanvas = () => {
      const canvases = document.querySelectorAll("canvas");
      if (canvases.length > 0) {
        setState({ visible: true, mode: "webgl" });
      } else if (attempts < 6) {
        attempts++;
        confirmTimer = setTimeout(checkCanvas, 500);
      }
    };
    confirmTimer = setTimeout(checkCanvas, 800);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(confirmTimer);
    };
  }, []);

  if (!state.visible) return null;

  const modeLabels: Record<BgMode, { label: string; color: string }> = {
    "webgl":          { label: "WebGL Active ✦", color: "#34d399" },
    "reduced-motion": { label: "Reduced Motion — CSS Fallback", color: "#d4af37" },
    "no-webgl":       { label: "No WebGL — CSS Fallback", color: "#f87171" },
    "detecting":      { label: "Detecting…", color: "#94a3b8" },
  };

  const { label, color } = modeLabels[state.mode];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
        background: "rgba(5, 8, 15, 0.88)",
        border: `1px solid ${color}55`,
        borderRadius: "0.5rem",
        padding: "0.5rem 0.875rem",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        pointerEvents: "none",
      }}
      aria-live="polite"
      role="status"
    >
      <p style={{ color, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", margin: 0 }}>
        BG: {label}
      </p>
    </div>
  );
}

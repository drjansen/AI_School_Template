"use client";

import { useEffect, useRef } from "react";

/**
 * NebulaBackground
 *
 * A Three.js WebGL animated backdrop — star dome with nebula clouds.
 * Renders as a `position: fixed` layer behind all page content.
 *
 * ## How to tweak parameters
 * Edit the constants block inside the `useEffect` below:
 *   - `STAR_COUNT`       — number of star particles (desktop: 3500, mobile: 1500)
 *   - `NEBULA_COUNT`     — number of large nebula blob particles (desktop: 140, mobile: 60)
 *   - `ROTATION_SPEED`  — radians/s for the star-sphere drift (default 0.070)
 *   - `TWINKLE_SPEED`   — multiplier for twinkle oscillation (default 1.2)
 *   - `NEBULA_ALPHA`    — peak nebula blob opacity (default 0.32; raise for more visibility)
 *   - `MAX_PIXEL_RATIO` — caps devicePixelRatio for mobile (default 1.5)
 *
 * ## Reduced-motion / WebGL fallback
 * - If `prefers-reduced-motion: reduce` is set, the component renders a static
 *   CSS deep-space gradient and skips all JS/WebGL entirely.
 * - If WebGL is unavailable the same CSS fallback is used automatically.
 *
 * ## Performance notes
 * - Animation pauses when the browser tab is hidden (`visibilitychange`).
 * - Pixel ratio is capped at MAX_PIXEL_RATIO to protect mobile GPUs.
 * - Star/nebula count is automatically reduced on small screens.
 * - Three.js is loaded via a dynamic import so it does not block initial render.
 */
export default function NebulaBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Reduced-motion check ──────────────────────────────────────────────
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // keep CSS fallback on the div

    // ── WebGL availability check ──────────────────────────────────────────
    const testCanvas = document.createElement("canvas");
    const gl =
      testCanvas.getContext("webgl") ||
      testCanvas.getContext("experimental-webgl");
    if (!gl) return; // keep CSS fallback

    // ── Adaptive quality based on screen size ────────────────────────────
    const isMobile = window.innerWidth < 768;

    // ── Tunable parameters ────────────────────────────────────────────────
    const STAR_COUNT = isMobile ? 1500 : 3500;
    const NEBULA_COUNT = isMobile ? 60 : 140;
    const ROTATION_SPEED = 0.070;       // radians per second — noticeably alive
    const TWINKLE_SPEED = 1.2;          // stronger twinkle oscillation
    const NEBULA_ALPHA = 0.32;          // peak nebula blob opacity (was 0.12)
    const NEBULA_PULSE_SPEED = 0.22;    // frequency of nebula blob pulse cycle
    const CAMERA_DRIFT_SPEED_X = 0.07;  // camera sway frequency on X axis
    const CAMERA_DRIFT_SPEED_Y = 0.05;  // camera sway frequency on Y axis
    const CAMERA_DRIFT_AMOUNT_X = 2.5;  // peak camera displacement on X (units)
    const CAMERA_DRIFT_AMOUNT_Y = 1.8;  // peak camera displacement on Y (units)
    const MAX_PIXEL_RATIO = 1.5;
    const MAX_FRAME_TIME = 0.05; // seconds — caps delta-time to prevent jumps after hidden tab

    let cleanup: (() => void) | null = null;

    import("three").then((THREE) => {
      const mount = mountRef.current;
      if (!mount) return;

      // ── Renderer ──────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        mount.clientWidth / mount.clientHeight,
        0.1,
        500
      );
      camera.position.set(0, 0, 0);

      // ── Star positions on sphere surface ──────────────────────────────
      const starPositions = new Float32Array(STAR_COUNT * 3);
      const starSizes = new Float32Array(STAR_COUNT);
      const starPhases = new Float32Array(STAR_COUNT);
      const starBrightness = new Float32Array(STAR_COUNT);

      for (let i = 0; i < STAR_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        // Sphere radius range for slight depth variation
        const r = 60 + Math.random() * 40;
        starPositions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
        starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        starPositions[i * 3 + 2] = r * Math.cos(phi);
        // 90% tiny pinpoints, 10% slightly larger
        starSizes[i] =
          Math.random() < 0.9
            ? Math.random() * 1.4 + 0.5
            : Math.random() * 3.0 + 1.8;
        starPhases[i] = Math.random() * Math.PI * 2;
        starBrightness[i] = Math.random() * 0.4 + 0.6; // 0.6–1.0 (brighter)
      }

      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(starPositions, 3)
      );
      starGeometry.setAttribute(
        "aSize",
        new THREE.BufferAttribute(starSizes, 1)
      );
      starGeometry.setAttribute(
        "aPhase",
        new THREE.BufferAttribute(starPhases, 1)
      );
      starGeometry.setAttribute(
        "aBrightness",
        new THREE.BufferAttribute(starBrightness, 1)
      );

      const starGold = new Float32Array(STAR_COUNT); // 0 = cool white, 1 = warm gold
      for (let i = 0; i < STAR_COUNT; i++) {
        starGold[i] = Math.random() < 0.12 ? 1.0 : 0.0; // ~12% golden stars
      }
      starGeometry.setAttribute(
        "aGold",
        new THREE.BufferAttribute(starGold, 1)
      );

      const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uTwinkleSpeed: { value: TWINKLE_SPEED },
        },
        vertexShader: /* glsl */ `
          uniform float uTime;
          attribute float aSize;
          attribute float aPhase;
          attribute float aBrightness;
          attribute float aGold;
          varying float vAlpha;
          varying float vGold;

          void main() {
            float twinkle = 0.45 + 0.55 * sin(uTime * ${TWINKLE_SPEED.toFixed(2)} + aPhase);
            vAlpha = aBrightness * twinkle;
            vGold = aGold;

            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (300.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying float vAlpha;
          varying float vGold;

          void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);
            if (dist > 0.5) discard;
            float edge = smoothstep(0.5, 0.12, dist);
            // Cool white-blue core → warm gold tint for golden stars
            vec3 coolColor = mix(vec3(0.78, 0.90, 1.00), vec3(1.00, 1.00, 1.00), edge);
            vec3 goldColor = mix(vec3(1.00, 0.88, 0.55), vec3(1.00, 0.96, 0.78), edge);
            vec3 color = mix(coolColor, goldColor, vGold);
            gl_FragColor = vec4(color, edge * vAlpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // ── Nebula cloud blobs ────────────────────────────────────────────
      // Large soft points that create the nebula feel
      const nebulaPositions = new Float32Array(NEBULA_COUNT * 3);
      const nebulaSizes = new Float32Array(NEBULA_COUNT);
      const nebulaColors = new Float32Array(NEBULA_COUNT * 3);
      const nebulaPhases = new Float32Array(NEBULA_COUNT);

      // Aurora palette: vivid deep-space colors + warm gold highlights
      const auroraColors = [
        [0.25, 0.45, 1.00], // vivid aurora blue
        [0.10, 0.65, 0.92], // bright aurora teal-blue
        [0.60, 0.28, 1.00], // vivid aurora violet
        [0.05, 0.52, 0.72], // electric deep teal
        [0.35, 0.28, 1.00], // indigo-violet
        [0.82, 0.58, 0.14], // warm gold nebula (People of the Stars)
        [0.68, 0.48, 0.18], // amber-gold cloud
      ];

      for (let i = 0; i < NEBULA_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 40 + Math.random() * 30;
        nebulaPositions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
        nebulaPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        nebulaPositions[i * 3 + 2] = r * Math.cos(phi);
        nebulaSizes[i] = 100 + Math.random() * 200; // large blobs
        nebulaPhases[i] = Math.random() * Math.PI * 2;
        const c =
          auroraColors[Math.floor(Math.random() * auroraColors.length)];
        nebulaColors[i * 3 + 0] = c[0];
        nebulaColors[i * 3 + 1] = c[1];
        nebulaColors[i * 3 + 2] = c[2];
      }

      const nebulaGeometry = new THREE.BufferGeometry();
      nebulaGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(nebulaPositions, 3)
      );
      nebulaGeometry.setAttribute(
        "aSize",
        new THREE.BufferAttribute(nebulaSizes, 1)
      );
      nebulaGeometry.setAttribute(
        "aColor",
        new THREE.BufferAttribute(nebulaColors, 3)
      );
      nebulaGeometry.setAttribute(
        "aPhase",
        new THREE.BufferAttribute(nebulaPhases, 1)
      );

      const nebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
        },
        vertexShader: /* glsl */ `
          attribute float aSize;
          attribute vec3 aColor;
          attribute float aPhase;
          varying vec3 vColor;
          varying float vAlpha;
          uniform float uTime;

          void main() {
            vColor = aColor;
            float pulse = 0.65 + 0.35 * sin(uTime * ${NEBULA_PULSE_SPEED.toFixed(2)} + aPhase);
            vAlpha = pulse;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (300.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);
            if (dist > 0.5) discard;
            // Soft Gaussian-like fade — NEBULA_ALPHA raised for visibility
            float alpha = exp(-dist * dist * 10.0) * vAlpha * ${NEBULA_ALPHA.toFixed(2)};
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const nebulaClouds = new THREE.Points(nebulaGeometry, nebulaMaterial);
      scene.add(nebulaClouds);

      // ── Animation loop ────────────────────────────────────────────────
      let isAnimating = true;
      let rafId = 0;
      let t = 0;
      let lastTimestamp = 0;

      function tick(timestamp: number) {
        if (!isAnimating) return;
        rafId = requestAnimationFrame(tick);

        const dt = Math.min((timestamp - lastTimestamp) / 1000, MAX_FRAME_TIME);
        lastTimestamp = timestamp;
        t += dt;

        starMaterial.uniforms.uTime.value = t;
        nebulaMaterial.uniforms.uTime.value = t;

        // Star-sphere rotation — noticeably animated (was 0.4/0.15)
        stars.rotation.y = t * ROTATION_SPEED * 0.7;
        stars.rotation.x = t * ROTATION_SPEED * 0.25;
        nebulaClouds.rotation.y = t * ROTATION_SPEED * 0.45;
        nebulaClouds.rotation.x = t * ROTATION_SPEED * 0.18;

        // Subtle camera parallax drift — gives a "floating in space" feel
        camera.position.x = Math.sin(t * CAMERA_DRIFT_SPEED_X) * CAMERA_DRIFT_AMOUNT_X;
        camera.position.y = Math.cos(t * CAMERA_DRIFT_SPEED_Y) * CAMERA_DRIFT_AMOUNT_Y;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      rafId = requestAnimationFrame((ts) => {
        lastTimestamp = ts;
        tick(ts);
      });

      // ── Visibility change — pause when tab hidden ─────────────────────
      const onVisibility = () => {
        isAnimating = !document.hidden;
        if (isAnimating) {
          rafId = requestAnimationFrame((ts) => {
            lastTimestamp = ts;
            tick(ts);
          });
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      // ── Resize ────────────────────────────────────────────────────────
      const onResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      // ── Cleanup ───────────────────────────────────────────────────────
      cleanup = () => {
        isAnimating = false;
        cancelAnimationFrame(rafId);
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("resize", onResize);
        if (
          mountRef.current &&
          renderer.domElement.parentNode === mountRef.current
        ) {
          mountRef.current.removeChild(renderer.domElement);
        }
        starGeometry.dispose();
        starMaterial.dispose();
        nebulaGeometry.dispose();
        nebulaMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      // CSS fallback: stronger aurora gradients visible immediately / for reduced-motion
      style={{
        background:
          "radial-gradient(ellipse at 18% 55%, rgba(55,90,220,0.75) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 82% 22%, rgba(120,55,220,0.65) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 50% 90%, rgba(20,100,160,0.55) 0%, transparent 48%)," +
          "radial-gradient(ellipse at 72% 65%, rgba(180,140,40,0.25) 0%, transparent 38%)," +
          "#05080f",
      }}
    />
  );
}

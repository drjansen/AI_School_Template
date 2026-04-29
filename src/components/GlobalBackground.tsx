"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr: false must live in a Client Component
const NebulaBackground = dynamic(
  () => import("@/components/NebulaBackground"),
  { ssr: false }
);

export default function GlobalBackground() {
  return <NebulaBackground />;
}

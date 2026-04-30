"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr: false must live in a Client Component
const BackgroundDebug = dynamic(
  () => import("@/components/BackgroundDebug"),
  { ssr: false }
);

export default function GlobalDebug() {
  return <BackgroundDebug />;
}

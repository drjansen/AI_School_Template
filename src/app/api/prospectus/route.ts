import { NextRequest, NextResponse } from "next/server";
import { isValidName, isValidEmail } from "@/lib/validation";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter (single-process; for multi-instance deploys
// replace with a Redis-backed solution such as @upstash/ratelimit).
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 60_000; // 1 minute sliding window
const RATE_MAX_REQUESTS = 5;   // max submissions per IP per window

interface RateRecord { count: number; resetAt: number }
const ipMap = new Map<string, RateRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = ipMap.get(ip);
  if (!rec || now > rec.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (rec.count >= RATE_MAX_REQUESTS) return true;
  rec.count++;
  return false;
}

interface ProspectusRequest {
  name: string;
  email: string;
  phone?: string;
  childGrade?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  // Derive client IP (X-Forwarded-For is set by Nginx in production)
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  try {
    const body: ProspectusRequest = await request.json();

    const { name, email } = body;

    if (!isValidName(name)) {
      return NextResponse.json(
        { error: "A valid name is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In production, forward to CRM / email service here.
    // For now, log and return success.
    console.log("[Prospectus Request]", {
      name: name.trim(),
      email: email.trim(),
      phone: body.phone?.trim() ?? null,
      childGrade: body.childGrade ?? null,
      message: body.message?.trim() ?? null,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Prospectus API] Unexpected error:", error);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}

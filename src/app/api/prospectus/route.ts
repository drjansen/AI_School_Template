import { NextRequest, NextResponse } from "next/server";
import { isValidName, isValidEmail } from "@/lib/validation";

interface ProspectusRequest {
  name: string;
  email: string;
  phone?: string;
  childGrade?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
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
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}

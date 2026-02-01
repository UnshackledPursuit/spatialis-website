import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const USER_ID = process.env.SUPABASE_USER_ID!;

export async function POST(request: Request) {
  try {
    const { feedbackType, description, appVersion, contact } = await request.json();

    if (!feedbackType || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build content string
    const content = `**Spatialis Feedback**

**Type:** ${feedbackType}

**Description:** ${description}

${appVersion ? `**App Version:** ${appVersion}\n\n` : ""}${contact ? `**Contact:** ${contact}` : ""}`.trim();

    // Send to Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/fleeting_thoughts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        content,
        source: "spatialis_feedback",
        status: "inbox",
        content_type: "text",
        user_id: USER_ID,
        tags: ["feedback", "spatialis", feedbackType],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error:", errorText);
      return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

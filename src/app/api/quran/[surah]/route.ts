import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ surah: string }> }
) {
  const { surah } = await context.params;

  try {
    // domain Vercel yang benar
    const origin = new URL(req.url).origin;

    const res = await fetch(`${origin}/surah/${surah}.json`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Surah not found" }, { status: 404 });
    }

    const json = await res.json();
    return NextResponse.json(json);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

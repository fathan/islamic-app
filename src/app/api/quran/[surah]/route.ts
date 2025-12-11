import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ surah: string }> }
) {
  const { surah } = await context.params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/surah/${surah}.json`);
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

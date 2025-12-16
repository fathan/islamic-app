import { NextResponse } from "next/server";

export async function GET () {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/doa/doa.json`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return NextResponse.json({ error: "Doa not found" }, { status: 404 });
    }

    const json = await res.json();
    return NextResponse.json(json);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

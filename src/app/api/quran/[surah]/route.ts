import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  context: { params: Promise<{ surah: string }> }
) {
  const { surah } = await context.params;

  try {
    const filePath = path.join(
      process.cwd(),
      "src/database/surah",
      `${surah}.json`
    );

    const file = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(file);

    return NextResponse.json(json);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Surah not found" }, { status: 404 });
  }
}

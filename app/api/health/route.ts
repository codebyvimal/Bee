import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "hunnybi-web",
    timestamp: new Date().toISOString()
  });
}

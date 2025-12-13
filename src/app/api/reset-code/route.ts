import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body;

  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json(
      {
        code: 400,
        message: "Invalid JSON Data",
      },
      { status: 400 }
    );
  }

  const { resetCode } = body;

  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/auth/verifyResetCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetCode }),
      }
    );

    const payload: ResetCodeAPIResponse = await res.json();

    if ("code" in payload) {
      return NextResponse.json(
        { code: res.status, message: payload.message },
        { status: res.status }
      );
    }

    return NextResponse.json(payload, { status: res.status });
  } catch (e) {
    return NextResponse.json(
      {
        code: 500,
        message:  (e as Error).message || "internal server error",
      },
      { status: 500 }
    );
  }
}

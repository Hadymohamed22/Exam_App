import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const res = await fetch(`${process.env.API_URL}/api/v1/auth/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const payload: EmailVerificationAPIResponse = await res.json();

  if ("code" in payload) {
    return NextResponse.json(
      {
        ...payload,
      },
      { status: res.status }
    );
  }

  return NextResponse.json(
    {
      ...payload,
    },
    { status: res.status }
  );
}

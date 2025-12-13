import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    console.error("[resetPassword] API call failed:", (e as Error).message);
    return NextResponse.json(
      {
        message: "Invalid JSON Data",
        code: 400,
      },
      { status: 400 }
    );
  }

  const { email, newPassword, confirmNewPassword } = body;

  if (newPassword !== confirmNewPassword)
    return NextResponse.json(
      { message: "password and confirm password is not matched", code: 400 },
      { status: 400 }
    );

  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/auth/resetPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      }
    );

    const payload: ResetPassAPIResponse = await res.json();

    if ("code" in payload) {
      return NextResponse.json(
        {
          message: payload.message,
          code: res.status,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({
      message: "Your password has been updated , Please Login.",
    });
  } catch (e) {
    console.error("[resetPassword] API call failed:", (e as Error).message);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        code: 500,
      },
      { status: 500 }
    );
  }
}

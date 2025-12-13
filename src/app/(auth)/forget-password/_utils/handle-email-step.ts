export async function handleEmailStep(email: string) {
  if (
    !sessionStorage.getItem("startVerifyDate") ||
    email !== sessionStorage.getItem("emailVerification")
  ) {
    const res = await fetch("/api/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const payload: EmailVerificationAPIResponse = await res.json();

    if ("code" in payload) {
      throw new Error(payload.message);
    }

    sessionStorage.setItem("startVerifyDate", String(new Date()));
    sessionStorage.setItem(
      "endVerifyDate",
      String(new Date(new Date().getTime() + 60 * 1000))
    );
    return true;
  } else if (sessionStorage.getItem("startVerifyDate")) {
    // start date is found ( user go to verify code then log out then go to verify code again )
    sessionStorage.setItem("startVerifyDate", String(new Date()));
    return true;
  }
}

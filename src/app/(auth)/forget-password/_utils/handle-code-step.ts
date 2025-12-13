export async function handleCodeStep(resetCode: string) {
  try {
    const res = await fetch("api/reset-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resetCode: resetCode }),
    });

    const payload: ResetCodeAPIResponse = await res.json();
    if ("code" in payload) {
      throw new Error(payload.message);
    }

    return;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}

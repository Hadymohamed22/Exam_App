import { GetExamsAPIResponse, GetQuestionsAPIResponse } from "../types/exam";
import { getToken } from "../utils/get-token";

// Get Exams On Subjects
export async function getExamsOnSubjectService(id: string) {
  const tokenData = await getToken();
  const token = tokenData?.access_token;

  const res = await fetch(`${process.env.API_URL}/api/v1/exams?subject=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      token: token,
    },
  });
  const payload: GetExamsAPIResponse = await res.json();

  return payload;
}

// Get Question On Exam
export async function getQuestionService(examId: string) {
  const tokenData = await getToken();
  const token = tokenData?.access_token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/questions?exam=${examId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        token: token,
        "Content-Type": "application/json",
      },
    }
  );

  const payload: GetQuestionsAPIResponse = await res.json();

  return payload;
}

// Get Exam Result
export async function getExamResult(
  answers: Array<{ questionId: string; correct: string } | undefined>
) {
  const tokenData = await getToken();
  const token = tokenData?.access_token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/questions/check`,
    {
      method: "POST",
      body: JSON.stringify({
        answers,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        token,
        "Content-Type": "application/json",
      },
    }
  );

  const payload = await res.json();

  return payload;
}

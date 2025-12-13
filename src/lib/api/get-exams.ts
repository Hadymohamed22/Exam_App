import { getExamsOnSubjectService } from "../services/exams.service";

export async function GetExamsOnSubject(id: string) {
  let error;
  let data;
  let isEmpty = false;
  try {
    const payload = await getExamsOnSubjectService(id);

    if ("code" in payload) {
      error = payload.message;
    }

    if (!("code" in payload) && payload.exams.length === 0) {
      isEmpty = true;
    }

    if (!("code" in payload)) {
      data = payload.exams;
    }
  } catch (e) {
    error = (e as Error).message;
  }

  return { data, error, isEmpty };
}

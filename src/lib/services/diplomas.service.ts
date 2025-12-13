import { getToken } from "../utils/get-token";

export async function getDiplomasService(pageParam: string) {
  const jwt = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subjects?limit=4&page=${pageParam}`,
    {
      method: "GET",
      headers: jwt
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.access_token}`,
            token: jwt.access_token,
          }
        : {},
    }
  );

  const payload: GetDiplomasAPIResponse = await res.json();

  return {
    ...payload,
    subjects: [
      {
        _id: "670037f6728c92b7fdf434fc",
        name: "Frontend",
        icon: "https://exam.elevateegy.com/uploads/categories/67ee85f95554b32891275c40-tech.png",
        createdAt: "2024-10-04T18:57:30.499Z",
      },
      ...payload.subjects,
    ],
  };
}

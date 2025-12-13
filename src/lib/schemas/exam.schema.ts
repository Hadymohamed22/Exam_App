import z from "zod";

// Answers
export const AnswersData = z.object({
  answers: z.array(
    z
      .object({
        questionId: z
          .string("Please Enter Valid Data !")
          .nonempty("Question ID is required"),
        correct: z.string("Please Enter Valid Data !"),
      })
      .optional()
  ),
});

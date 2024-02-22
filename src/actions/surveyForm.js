"use server";

export async function SurveySubmit(form) {
  "use server";
  var numberOfQuestions = [...Array(10).keys()].map((x) => x + 1);

  const answers = numberOfQuestions.map((number) => {
    return { questionNo: number, answer: form.get("#" + number) };
  });

  await fetch(`${process.env.BACKEND_LOCAL}/v1/survey/create${uid}`, {
    method: "POST",
    body: {
      results: answers,
    },
  });
}

import axios from "axios";
import React from "react";

function Survey({ survey, uid }) {
  async function SurveySubmit(form) {
    "use server";
    var numberOfQuestions = [...Array(10).keys()].map((x) => x + 1);

    const answers = numberOfQuestions.map((number) => {
      return { questionNo: number, answer: form.get("#" + number) };
    });

    const _ = await axios.post(
      `${process.env.BACKEND_URL}/v1/survey/create${uid}`,
      {
        results: answers,
      }
    );
  }
  // resp:
  // survey : [{
  // question: "",
  // choices: ["",...]
  // }...]

  return (
    <div className="w-4/5 h-[500px] bg-slate-600 rounded-lg text-white px-14 items-center justify-center text-center flex flex-col overflow-hidden">
      <h1 className="text-amber-300 pb-10 uppercase font-bold my-5">Survey</h1>
      <form
        className="h-full w-full flex flex-col overflow-y-scroll"
        action={SurveySubmit}
      >
        {survey.map((survey, idx) => {
          const key = "#" + idx.toString();
          return (
            <div className="w-full h-20 flex flex-col my-6 rounded-lg bg-slate-500 text-white">
              <div className="flex gap-2">
                <h1>{idx}</h1>
                <h1>{survey.question}</h1>
              </div>
              <select name={key}>
                {survey.choices.map((choice) => {
                  <option value={choice.value}>{choice.response}</option>;
                })}
              </select>
            </div>
          );
        })}
        <button type="submit" className="px-7 py-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Survey;
